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

router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  let sqlText = 'DELETE FROM feedback WHERE id=$1;';
  pool.query(sqlText, [reqId])
    .then(result => {
      console.log('Feedback deleted');
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(`Error making DB query ${sqlText}`, error);
      res.sendStatus(500);
    })
});

module.exports = router;