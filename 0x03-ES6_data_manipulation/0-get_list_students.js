function getListStudents() {
  Data = fetch("https://api.example.com/students")
    .then((response) => response.json())
    .then((data) => data.students);
  console.log(data);
}
