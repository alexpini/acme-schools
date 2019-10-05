const router = require('express').Router();
const {Student} = require('./db');
router.get('/alex', (req, res, next) => {
  res.send('Hello World');
});

router.use('/students', require('./student-route'));

router.use('/schools', require('./school-route'));


module.exports = router












// app.get('/api/schools/detail/:id', (req, res, next)=> {
//   School.findByPk(req.params.id)
//   .then( school => {
//     if(!school) {
//       throw({ status: 401 });
//     }
//     res.send(school)
//   })
//   .catch(next);
// });

// app.get('/api/schools/random', async(req, res, next)=> {
//   try{
//     const schools = await School.findAll();
//     const school = schools[Math.floor(Math.random()*schools.length)];
//     res.send(school);
//   }
//   catch(ex){
//     next(ex);
//   }
// });

// app.get('/api/schools/:id/students', async(req, res, next)=> {
//   Student.findAll({ where: { schoolId: req.params.id }})
//   .then( students => res.send(students))
//   .catch(next);
// });

// app.post('/api/schools/schoolId/students', (req, res, next)=> {
//   Student.create({ ...req.body, schoolId: req.params.schoolId })
//   .then( student => res.status(201).send(student))
//   .catch(next);
// });

// app.delete('/api/schools/:studentId/students/:id', (req, res, next)=> {
//   Student.findByPk(req.params.id)
//   .then( student => student.destroy())
//   .then( ()=> res.sendStatus(204))
//   .catch(next);
// });

// app.use((err, req, res, next)=> {
//   res.status(err.status || 500).send({ message: err.message });
// });
