const router = require('express').Router();

const user  = require('../routes/user');
const publication = require('../routes/publication');
const award = require('../routes/awards');
const research = require('../routes/research');
const trainingConducted = require('../routes/training');
const trainingAttended = require('../routes/trainingAttended');
const subject = require('../routes/subject');
const securedRoutes = require('../routes/securedRoutes');

const passport = require('passport');
const jwtStrategry = require('../strategies/jwt');
passport.use(jwtStrategry);

// router.use('/publication' ,passport.authenticate('jwt', {session: false}), publication);

router.use('/', user);
router.use('/publication', publication);
router.use('/award', award);
router.use('/research', research);
router.use('/training/conducted', trainingConducted);
router.use('/training/attended', trainingAttended);
router.use('/subject', subject);
router.use('/', passport.authenticate('jwt', { session: false }), securedRoutes);

module.exports = router;