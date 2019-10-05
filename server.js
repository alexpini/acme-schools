const db = require('./db');
const { conn, Student } = db;
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));


app.use(express.json());


app.use('/api', require('./router.js'))


conn.sync({force: true})
  .then( async ()=> {
    // app.listen(3000);
    const student = {fullName: 'Cookie Monster'}
    await Student.create(student)

    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  });
