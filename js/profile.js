let selectedIndex; // ✅ define globally

window.addEventListener("DOMContentLoaded", () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const params = new URLSearchParams(window.location.search);
  selectedIndex = params.get("index");

  if (selectedIndex === null || !students[selectedIndex]) {
    document.body.innerHTML = "<p>Student not found!</p>";
    return;
  }

  const student = students[selectedIndex];

  // 🧩 Fill profile details
  document.getElementById("profile-pic").src = student.userImage || student.pic || "";
  document.getElementById("profile-name").textContent = student.userName || "No Name";
  document.getElementById("profile-email").textContent = student.userEmail || "N/A";
  document.getElementById("profile-password").textContent = student.userPassword || "N/A";
  document.getElementById("profile-age").textContent = student.userAge || "N/A";
  document.getElementById("profile-phone").textContent = student.userPhone || "N/A";
  document.getElementById("profile-address").textContent = student.userAddress || "N/A";
  document.getElementById("profile-city").textContent = student.userCity || "N/A";
  document.getElementById("profile-pincode").textContent = student.userPincode || "N/A";
  document.getElementById("profile-dob").textContent = student.userDob || "N/A";
});

// 🔙 Back
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "../index.html";
});

// ✏️ Edit
document.getElementById("editBtn").addEventListener("click", () => {
  window.location.href = `../pages/edit.html?index=${selectedIndex}`;
});

// 🗑️ Delete
document.getElementById("deleteBtn").addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this profile?")) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(selectedIndex, 1);
    localStorage.setItem("students", JSON.stringify(students));
    alert("Profile deleted successfully!");
    window.location.href = "../index.html";
  }
});
