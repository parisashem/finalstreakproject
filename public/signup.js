const userInfo = [];

window.onload = function () {
   document.getElementById("createaccount").addEventListener("click", createAccount);
  };
  
  
  const createAccount = () => {
    auth
    .createUserWithEmailAndPassword(document.getElementById('user').value, document.getElementById("password").value)
    .then(user => {
      if (user) {
        console.log(user);
        userInfo.push(user);
      }
    }).catch(err => {
      alert(err.message);
    })
  }
  