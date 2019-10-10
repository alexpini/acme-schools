const Sequelize = require('sequelize');
const { STRING, UUID, UUIDV4 } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/my_db');

const School = conn.define('schools', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING
});

const Student = conn.define('students', {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true
  },
  schoolId: {
    type: UUID,
    // allowNull: false
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        msg: 'Email address must be valid'
      }
    }
  },
  gpa: Sequelize.DECIMAL,
  url: Sequelize.STRING
});

Student.belongsTo(School);
School.hasMany(Student);

module.exports = {conn, Student, School}
