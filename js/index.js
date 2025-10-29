window.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");
  const students = JSON.parse(localStorage.getItem("students")) || [];

  if (students.length === 0) {
    cardsContainer.innerHTML = "<p>No students added yet.</p>";
    return;
  }

  // Create cards for all students
  cardsContainer.innerHTML = students.map((student, index) => `
    <div class="card" onclick="openProfile(${index})">
      <img src="${student.userImage || student.pic || ''}" alt="Student Picture">

      <h3>${student.userName || "No Name"}</h3>
      <p><strong>Age:</strong> ${student.userAge || "N/A"}</p>
      <p><strong>Address:</strong> ${student.userAddress || "N/A"}</p>
      <p><strong>DOB:</strong> ${student.userDob || "N/A"}</p>
    </div>
  `).join("");
});

// 👉 Function to open the profile page
function openProfile(index) {
  localStorage.setItem("selectedStudentIndex", index);
  window.location.href = "./pages/profile.html";
}
