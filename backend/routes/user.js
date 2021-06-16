const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.route('/new').post((req, res) =>{
    const username = req.body.username;
    const newUser = new User({username});
    newUser.save()
    .then( () => res.json('User Created !'))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.route('/:id').get((req, res) =>{
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error : ${err}`))
});

router.route('/delete/:id').delete((req, res) =>{
    User.findByIdAndDelete(req.params.id)
    .then(_ => res.json('Deleted'))
    .catch( err => res.status(400).json(`Error : ${err}`))
});

router.route('/update/:id').post((req, res) =>{
    User.findById(req.params.id)
    .then(user =>{
        user.username = req.body.username
        user.isStaff = req.body.isStaff
        user.save()
        .then(_ => res.json('Updated'))
        .catch(err => res.status(400).json(`Error : ${err}`))
    })
    .catch(err => res.status(400).json(`Error : ${err}`))
})


module.exports = router;