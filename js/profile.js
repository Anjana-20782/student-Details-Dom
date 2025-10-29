window.addEventListener("DOMContentLoaded", () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const selectedIndex = localStorage.getItem("selectedStudentIndex");

  if (selectedIndex === null || !students[selectedIndex]) {
    document.body.innerHTML = "<p>Student not found!</p>";
    return;
  }

  const student = students[selectedIndex];

  document.getElementById("profile-pic").src = student.pic;
  document.getElementById("profile-name").textContent = student.name;
  document.getElementById("profile-age").textContent = student.age;
  document.getElementById("profile-dob").textContent = student.dob;
});