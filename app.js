var express = require("express")
    , app = express()
    , cors = require('cors')
    , mongoose = require("mongoose")
    , User = require("./models/user")
    , bodyParser = require("body-parser");

require('dotenv').config();

const path = require("path");
mongoose.connect(process.env.DEV ? process.env.DB_CONN_DEV : process.env.DB_CONN ,{ useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static(path.join(__dirname, "client", "build")));

const api = require('./routes/apiRouter');

app.use('/api', api);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, process.env.IP, function () {
    console.log(`app server has started on ${port}`);
});