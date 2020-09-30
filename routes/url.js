const router = require('express').Router();

router.get('/:code', (req, res) => {
    const {code} = req.params;
    console.log('Code is: ', code);
    res.redirect('https://google.com');
});

router.post('/', (req, res) => {
    const {url} = req.body;
    console.log('Url is: ',url);
    let newUrl = 'https://google.com';
    res.status(201).json({url: newUrl});
});

module.exports = router;