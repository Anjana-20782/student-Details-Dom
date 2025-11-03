window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const index = params.get("index");
  const students = JSON.parse(localStorage.getItem("students")) || [];

  if (index === null || !students[index]) {
    document.body.innerHTML = "<p>Student not found!</p>";
    return;
  }

  const student = students[index];

  // Same input structure as add form
  let fields = [
    { name: "Name", id: "userName", type: "text" },
    { name: "Email", id: "userEmail", type: "email" },
    { name: "Password", id: "userPassword", type: "number" },
    { name: "Age", id: "userAge", type: "number" },
    { name: "Phone", id: "userPhone", type: "tel" },
    { name: "Address", id: "userAddress", type: "text" },
    { name: "City", id: "userCity", type: "text" },
    { name: "Pincode", id: "userPincode", type: "number" },
    { name: "DOB", id: "userDob", type: "date" },
    { name: "Profile Picture", id: "userImage", type: "file" }
  ];

  let str = "";
  fields.forEach(field => {
    // 🧩 Show image preview before file input
    if (field.type === "file") {
      str += `
        <div class="image-section">
          <label>${field.name}</label>
          <img id="previewImg" src="${student.pic || ''}" alt="Profile Preview" class="image-preview">
          <input id="${field.id}" type="${field.type}">
        </div>
      `;
    } else {
      str += `
        <div>
          <label>${field.name}</label>
          <input id="${field.id}" type="${field.type}" value="${student[field.id] || ''}">
        </div>
      `;
    }
  });

  str += `<button type="submit">Update</button>`;
  document.getElementById("editForm").innerHTML = str;

  const previewImg = document.getElementById("previewImg");
  const fileInput = document.getElementById("userImage");

  // 🔄 Update preview when image is selected
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        previewImg.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // 🧠 Handle update
  document.getElementById("editForm").addEventListener("submit", e => {
    e.preventDefault();

    let updatedStudent = {};
    fields.forEach(f => {
      let input = document.getElementById(f.id);
      if (f.type !== "file") updatedStudent[f.id] = input.value;
    });

    let file = fileInput.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function(event) {
        updatedStudent.pic = event.target.result;
        saveChanges(updatedStudent);
      };
      reader.readAsDataURL(file);
    } else {
      updatedStudent.pic = student.pic;
      saveChanges(updatedStudent);
    }
  });

  function saveChanges(updatedStudent) {
    students[index] = updatedStudent;
    localStorage.setItem("students", JSON.stringify(students));
    window.location.href = `./profile.html?index=${index}`;
  }
});
