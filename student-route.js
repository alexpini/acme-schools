const router = require('express').Router();
const {Student} = require('./db');
//GET /API/STUDENTS
router.get('/', async (req, res, next) => {
  res.json(await Student.findAll());
})

module.exports = router;

