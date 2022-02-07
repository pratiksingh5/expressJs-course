const router = require('express').Router();
let UserModal = require('../user')


router.get('/', (req, res) => {
    res.render('index');
});

router.post('/submit', (req, res) => {
    UserModal.create({
        name : req.body.name,
        number: req.body.number
    })
    .then(function(){
      res.send('Form Submitted! Check Your Database')

    })
});

module.exports = router;