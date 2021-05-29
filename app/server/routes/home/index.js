const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/home')

const getGames = async (req, res) => {
  console.log(colors.green('GETGAMES'));
  const d = await ctrl.getGames()
  res.json(d)
}

const findName = async (req, res) => {
  console.log(colors.green('findName'));
  const d = await ctrl.findName(req.body)
  res.json(d)
}

const findYear = async (req, res) => {
  console.log(colors.green('findYear'));
  const d = await ctrl.findYear(req.body)
  res.json(d)
}

const findDevelop = async (req, res) => {
  console.log(colors.green('findDevelop'));
  const d = await ctrl.findDevelop(req.body)
  res.json(d)
}

const deleteOne = async (req, res) => {
  console.log(colors.green('deleteOne'));
  const d = await ctrl.deleteOne(req.body)
  res.json(d)
}

router.get('/games', getGames)
router.post('/findName', findName)
router.post('/findYear', findYear)
router.post('/findDevelop', findDevelop)
router.post('/deleteOne', deleteOne)

module.exports = router;
