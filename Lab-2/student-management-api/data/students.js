// In-memory "database" — just a plain array of student objects.
// No MongoDB / Mongoose, per assignment restrictions.

let students = [
  { id: 1, name: "Rahul", course: "BCA" },
  { id: 2, name: "Priya", course: "BTech" },
  { id: 3, name: "Amit", course: "BCA" },
];

module.exports = students;
