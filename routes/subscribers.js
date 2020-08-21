const express = require('express');
const router = express.Router();

// Getting all
router.get('/', (req, res) => {
  res.send('hello from get');
});

// Getting one
router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

// Creating one
router.post('/', (req, res) => {});

// updating one
router.patch('/:id', (req, res) => {});

// deleting one
router.delete('/:id', (req, res) => {});

module.exports = router;
