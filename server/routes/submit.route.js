const express = require('express');
const router = express.router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const newFeedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES
    ($1, $2, $3, $4)`;

  pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
    .then((result) => {
      console.log('Added feedback to the DB ', newFeedback);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error making DB query ${sqlText}`, err);
      res.sendStatus(500);
    })
});

module.exports = router;
