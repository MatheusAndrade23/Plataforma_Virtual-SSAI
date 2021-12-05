
//----------------------- ANIMAÇAO ------------------

    var btnSignin = document.querySelector("#signin");
		var btnSignup = document.querySelector("#signup");
		
		var body = document.querySelector("body");
		
		btnSignin.addEventListener("click", function(){
      
			body.className = "signin-js";

		});
		btnSignup.addEventListener("click", function(){
		
			body.className = "signup-js";
		});
//-----------------------------------------------

// ------- ENTRAR, QUANDO JÁ REGSITRADO-----------

var en = document.querySelector("#entrar");

en.addEventListener("click", function(){

  var emailen =  document.querySelector('#emailen').value;
  var passworden =  document.querySelector('#passworden').value;

  console.log(emailen);
  console.log(passworden);

  if(emailen == "" || passworden == "")
  {
    alert('Todos os campos devem ser reenchidos!');

  }else{

    firebase.auth().signInWithEmailAndPassword(emailen, passworden)
    .then((userCredential) => {

    var user = userCredential.user;
    
    window.location.href = "https://ssai-d7259.web.app/main.html";

    })
    .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);


    if(errorCode == 'auth/user-not-found')
    {
      alert('Usuário inexistente!')
    }

    if(errorCode == 'auth/wrong-password')
    {
      alert('Senha incorreta!');
    }

    if(errorCode == 'auth/invalid-email')
    {
      alert('Email inválido!')
    }
   });
  }
});

// --------- FIM LOGIN -----------------

// -------- REGISTRAR ------------------

var re = document.querySelector("#registrar");


re.addEventListener("click", function(){

  var emailre =  document.querySelector('#emailre').value;
  var passwordre =  document.querySelector('#passwordre').value;
  var nome =  document.querySelector('#nome').value;

  console.log(nome)
  console.log(emailre);
  console.log(passwordre);

  if(nome === "" || emailre == "" || passwordre == "")
  {
    alert('Todos os campos devem ser reenchidos!');
  }
  else{

    firebase.auth().createUserWithEmailAndPassword(emailre, passwordre)
    .then((userCredential) => {

      var user = userCredential.user;
      window.location.href = "https://ssai-d7259.web.app/main.html";
      alert('Usuário registrado com sucesso!');

    })
    .catch((error) => {

    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);

    if(errorCode == 'auth/weak-password')
    {
      alert('A senha deve conter no mínimo 6 caracteres!')
    }

    if(errorCode == 'auth/invalid-email')
    {
      alert('Email inválido!')
    }

    if(errorCode == 'auth/email-already-in-use')
    {
      alert('O email já está em uso!')
    }
  });
  }
});


//--------------- FIM REGISTRAR ----------------

//--------------- RESETAR SENHA ----------------

// var fyps = document.querySelector(".fyps");

// fyps.addEventListener("click", function(){

//   var emailen =  document.querySelector('#emailen').value;
//   console.log(emailen);

//   if(email_redefinir = ""){

//     alert('Para redefinir a senha, você deve digitar seu email no campo "Email" e clicar no botão "Esqueci minha senha"!');
  
//   }else{  

//     firebase.auth().sendPasswordResetEmail(emailen)
//     .then(() => {
      
//       alert('Email enviado!');
//     })
//     .catch((error) => {

//       var errorCode = error.code;
//       var errorMessage = error.message;

//       console.log(errorCode);
//       console.log(errorMessage);

//     });
//   }
// })

//-------------------- FIM RESETAR SENHA --------
