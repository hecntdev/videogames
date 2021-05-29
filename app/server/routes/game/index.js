const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/game')

const findById = async (req, res) => {
  console.log(colors.green('findById'));
  const d = await ctrl.findById(req.body)
  res.json(d)
}

const insertOne = async (req, res) => {
  console.log(colors.green('insertOne'));
  const d = await ctrl.insertOne(req.body)
  res.json(d)
}

router.post('/findById', findById)
router.post('/insertOne', insertOne)

module.exports = router;
