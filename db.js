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
  fullName: Sequelize.STRING
});

Student.belongsTo(School);
School.hasMany(Student);

module.exports = {conn, Student, School}
