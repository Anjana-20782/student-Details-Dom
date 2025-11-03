let student = [
  {name:"Name",id:"userName",placeholder:"Enter your name",type:"text"},
  {name:"email",id:"userEmail",placeholder:"Enter your email",type:"email"},
  {name:"ID",id:"userPassword",placeholder:"Enter iD",type:"number"},
  {name:"age",id:"userAge",placeholder:"Enter your age",type:"number"},
  {name:"phone",id:"userPhone",placeholder:"Enter phone number",type:"tel"},
  {name:"address",id:"userAddress",placeholder:"Enter your address",type:"text"},
  {name:"city",id:"userCity",placeholder:"Enter city",type:"text"},
  {name:"pincode",id:"userPincode",placeholder:"Enter pincode",type:"number"},
  {name:"dob",id:"userDob",placeholder:"Select date of birth",type:"date"},
  {name:"Profile Picture", id:"userImage", placeholder:"Choose Image", type:"file"},
  {name:"submit",id:"submit",placeholder:"submit",type:"submit"}
];

function setInputs() {
  let str = "";

  student.forEach(field => {
    if (field.type === "submit") {
      str += `
        <div class="btn">
          <button id="${field.id}" type="${field.type}">${field.placeholder}</button>
        </div>`;
    } else if (field.type === "file") {
      // file input with preview image above it
      str += `
        <div class="image-section">
          <label for="${field.id}">${field.placeholder}</label>
          <img id="addPreviewImg" src="" alt="Preview" class="image-preview hidden">
          <input name="${field.name}" id="${field.id}" placeholder="${field.placeholder}" type="${field.type}" accept="image/*">
        </div>
      `;
    } else {
      str += `
        <div>
          <label for="${field.id}">${field.placeholder}</label>
          <input name="${field.name}" id="${field.id}" placeholder="${field.placeholder}" type="${field.type}">
        </div>`;
    }
  });

  document.getElementById("form").innerHTML = str;

  // Add change listener for image preview after inputs are rendered
  const fileInput = document.getElementById("userImage");
  const previewImg = document.getElementById("addPreviewImg");

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
      previewImg.src = "";
      previewImg.classList.add("hidden");
      return;
    }
    const reader = new FileReader();
    reader.onload = function(event) {
      previewImg.src = event.target.result;
      previewImg.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  });
}

setInputs();
