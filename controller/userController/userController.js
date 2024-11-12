const mongoose = require('mongoose');


const createUser = (req, res) => {
    const User = require('../../DB/Models/userModel');
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        subjects: req.body.subjects,
        attendance: req.body.attendance
    });
    user.save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const getUser = (req, res) => {
    const User = require('../../DB/Models/userModel');
    const { page = 1, limit = 10, sortBy = 'createdAt' } = req.query;

    const skip = (page - 1) * limit;

    User.find()
        .sort(sortBy)
        .skip(skip)
        .limit(parseInt(limit))
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Server Error');
        });
}

const getUserById = (req, res) => {
    const User = require('../../DB/Models/userModel');
    User.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const updateUser = (req, res) => {
    const User = require('../../DB/Models/userModel');
    User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        subjects: req.body.subjects,
        attendance: req.body.attendance
    })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

const deleteUser = (req, res) => {
    const User = require('../../DB/Models/userModel');
    User.findByIdAndDelete(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = { createUser, getUser, getUserById, updateUser , deleteUser };

