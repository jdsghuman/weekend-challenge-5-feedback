const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  // Get all feedback and return
  pool.query('SELECT * FROM "feedback";').then(result => {
    res.send(result.rows);  
  }).catch(err => {
    console.log('Error from GET ', err);
    res.sendStatus(500);
  });
});

module.exports = router;