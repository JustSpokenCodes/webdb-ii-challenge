const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    try {
        const count = await db('cars').where({id}).update(changes);
        if (count) {
            res.status(200).json({updated: count})
        } else {
            res.status(404).json({message: `could not find car #${id}`})
        }
    } catch (err) {
        res.status(500).json({message: 'could not update the post', error: err});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const count = await db('cars').where({id}).del();
        if (count) {
            res.status(200).json({deleted: count});
        } else {
            res.status(404).json({message: `${id} cannot be found so go back and find the correct one`});
        }
    } catch (err) {
        res.status(500).json({message: 'could not find the car your trying to look for', error: err});
    }
});

module.exports = router;