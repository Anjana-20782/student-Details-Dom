let student = [{name:"username",id:"userName",placeholder:"Enter your name",type:"text"},
  {name:"email",id:"userEmail",placeholder:"Enter your email",type:"email",},
  {name:"password",id:"userPassword",placeholder:"Enter password",type:"password"},
  {name:"age",id:"userAge",placeholder:"Enter your age",type:"number"},
  {name:"phone",id:"userPhone",placeholder:"Enter phone number",type:"tel"},
  {name:"address",id:"userAddress",placeholder:"Enter your address",type:"text"},
  {name:"city",id:"userCity",placeholder:"Enter city",type:"text"},
  {name:"pincode",id:"userPincode",placeholder:"Enter pincode",type:"number"},
  {name:"dob",id:"userDob",placeholder:"Select date of birth",type:"date"},
  {name:"submit",id:"submit",placeholder:"submit",type:"submit"}];



  function setInputs()
  {

    str=''
    student.forEach(field=>{
      str+=
      `
      <label for="${field.id}">${field.name}</label>
      <input type="${field.type}" id="${field.id}" placeholder="${field.placeholder}" name="${field.name}">
      `
    })
    document.getElementById("form").innerHTML=str;

  }
  setInputs()