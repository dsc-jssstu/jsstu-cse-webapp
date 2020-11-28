const router = require('express').Router();
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const User = require('../models/user');
const Document = require('../models/document');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        let randomFileName = crypto.randomBytes(18).toString('hex');
        let extension = path.extname(file.originalname).split('.')[1];
        cb(null, randomFileName + '.' + extension);
    }
});

const upload = multer({ storage: storage });

const accessLookup = {
    "faculty": 4,
    "coordinator": 3,
    "hod": 2,
    "admin": 1,
}

router.post('/', upload.single('document'), (req, res, next) => {
    const file = req.file;
    console.log(file.path);
    User.findOne({ _id: req.body.userId }).then(user => {
        if (!user) {
            res.status(500).json("invalid user id");
        }

        console.log(req.body);

        const document = new Document({
            title: req.body.title,
            description: req.body.description,
            fileName: file.filename,
            date: req.body.date,
            binName: req.body.binName,
            accessLevel: accessLookup[req.body.mode],
        });

        document.save().then((doc) => {
            res.status(200).json(doc);
        })
    });
});

router.delete('/', (req, res, next) => {
    Document.findOneAndRemove({ _id: req.body.docId }).then(doc => {
        const deletePath = path.join('uploads/', doc.fileName);
        fs.unlink(deletePath, err => {
            if (err)
                res.status(500).json("File delete failed");
            
            res.status(200).json("Document deleted");
        });
    })
});

router.get('/bins', (req, res) => {
    Document.find().distinct('binName', (err, ids) => {
        if (err)
            res.status(500).json("failed to fetch bin names");
        res.status(200).json(ids);
    })
});


router.get('/', (req, res) => {
    let accessLevel = accessLookup[req.user.mode]
    if (!req.body.startDate || !req.body.endDate)
        Document.find({ accessLevel: { $gte : accessLevel } }).then(doc => res.status(200).json(doc));
    else {
        Document.find({ accessLevel: { $gte : accessLevel } }).where('date').gt(req.body.startDate).lt(req.body.endDate).then(docs => {
            res.status(200).json(docs);
        })
    }
});

router.get('/download/:id', (req, res) => {
    Document.findOne({ _id: req.params.id }).then(doc => {
        res.download(`${__dirname}/../uploads/${doc.fileName}`);
    }).catch(err => {
        console.error(err);
    });
});

module.exports = router;