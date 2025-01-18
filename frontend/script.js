// const API_BASE_URL = 'http://localhost:8080/api/users';

// document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const user = {
//     username: document.getElementById('registerUsername').value,
//     email: document.getElementById('registerEmail').value,
//     password: document.getElementById('registerPassword').value,
//   };

//   try {
//     const response = await fetch(`${API_BASE_URL}/register`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(user),
//     });

//     if (response.ok) {
//       alert('Registration successful!');
//       window.location.href = 'login.html';
//     } else {
//       alert('Registration failed!');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Unable to connect to the server.');
//   }
// });

function saveUser(){
  let name = $('#registerUsername').val();
  let email = $('#registerEmail').val();
  let pass = $('#registerPassword').val();


$.ajax({
  method:"POST",
  contentType:"application/json",
  url:"http://localhost:8080/api/users/register",
  async:true,
  data:JSON.stringify({
    "id":'',
    "username": name,
    "email": email,
    "password": pass
  }),
  success: function (isAuthenticated) {
    if (isAuthenticated) { // Directly checking the returned boolean value
      alert("register successful! Redirecting...");
      // Redirect to a dashboard or home page
      window.location.href = "login.html";
    }
  },
  error: function (xhr, exception) {
    alert("Error while register in. Please check your credentials and try again.");
  }
})

}

function checkUser() {
  let name = $('#loginUsername').val();
  let pass = $('#loginPassword').val();

  $.ajax({
    method: "POST",
    contentType: "application/json",
    url: "http://localhost:8080/api/users/login",
    async: true,
    data: JSON.stringify({
      "username": name,
      "password": pass
    }),
    success: function (isAuthenticated) {
      if (isAuthenticated) { // Directly checking the returned boolean value
        alert("Login successful! Redirecting...");
        // Redirect to a dashboard or home page
        window.location.href = "home.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    },
    error: function (xhr, exception) {
      alert("Error while logging in. Please check your credentials and try again.");
    }
  });
}
