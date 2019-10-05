const router = require('express').Router();

//GET /API/SCHOOLS
router.get('/', (req, res, next) => {
  res.send('/alex');
})

module.exports = router;
