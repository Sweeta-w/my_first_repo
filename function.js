

var emailElement = document.querySelector('#email');
let msgElement = document.querySelector('#message');
let submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener("click", function(e){
    e.preventDefault();

    let emailTyped = emailElement.value;
    let msgTyped = msgElement.value;
    if(emailTyped.includes("@")){
        alert('Hello! Your message is "'+ msgTyped+'" Thankyou for your message.');
        
    }else{
        alert("Your email address is not valid, Please try again.");
        document.querySelector('#email').value = "";
        document.querySelector('#email').focus();
        

    }

    
})


