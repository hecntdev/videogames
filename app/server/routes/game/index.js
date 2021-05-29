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

const getYears = async (req, res) => {
  console.log(colors.green('getYears'));
  const d = await ctrl.getYears()
  res.json(d)
}

const getConsoles = async (req, res) => {
  console.log(colors.green('getConsoles'));
  const d = await ctrl.getConsoles()
  res.json(d)
}

const getDeveloper = async (req, res) => {
  console.log(colors.green('getDeveloper'));
  const d = await ctrl.getDeveloper()
  res.json(d)
}

router.post('/findById', findById)
router.post('/insertOne', insertOne)
router.get('/getYears', getYears)
router.get('/getConsoles', getConsoles)
router.get('/getDeveloper', getDeveloper)

module.exports = router;
