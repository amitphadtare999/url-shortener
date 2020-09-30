const router = require('express').Router();
const urlRoutes = require('./url');

router.get('/',(req,res) => {
    res.json({message: 'Welcome to url shortener'});
});

router.use('/',urlRoutes);

module.exports = router;