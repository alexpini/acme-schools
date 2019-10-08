const router = require('express').Router();
const {Student, School} = require('./db');
router.get('/alex', (req, res, next) => {
  res.send('Hello World');
});

// router.use('/students', require('./student-route'));

// router.use('/schools', require('./school-route'));


module.exports = router



// app.get('/api/schools/random', async(req, res, next)=> {
//   try{
//     const schools = await School.findAll();
//     const school = Math.floor(Math.random()*schools.length);
//     res.send(schools[school]);
//   }
//   catch(ex){
//     next(ex);
//   }
// });

//find students per each school
router.get('/schools/:id/students', async(req, res, next)=> {
  Student.findAll({ where: { schoolId: req.params.id }})
  .then( students => res.send(students))
  .catch(next);
});


//find all schools
router.get('/schools', async(req, res, next)=> {
  School.findAll()
  .then( schools => res.send(schools))
  .catch(next);
});

//find all students
router.get('/students', async(req, res, next)=> {
  Student.findAll()
  .then( students => res.send(students))
  .catch(next);
});

//find one school
router.get('/schools/:id', (req, res, next)=> {
  School.findByPk(req.params.id)
  .then( school => {
    if(!school) {
      throw({ status: 401 });
    }
    res.send(school)
  })
  .catch(next);
});

//create new student for a school
router.post('/students', (req, res, next)=> {
  Student.create( req.body )
  .then( student => res.status(201).send(student))
  .catch(next);
});


//update school of a student

router.put('/students/:id', (req, res, next)=> {
  Student.findbyPk(req.params.id)
  .then( student => {
    student.schoolId = req.body.schoolId;
    student.update();
    student.save();
  })
});

//delete a student
router.delete('/schools/:studentId/students/:id', (req, res, next)=> {
  Student.findByPk(req.params.id)
  .then( student => student.destroy())
  .then( ()=> res.sendStatus(204))
  .catch(next);
});

// app.use((err, req, res, next)=> {
//   res.status(err.status || 500).send({ message: err.message });
// });
