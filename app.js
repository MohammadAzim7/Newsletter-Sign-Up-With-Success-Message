const userInput=document.getElementById('input');
const sign_up_card=document.getElementById('sign-up-card');
const success_massage_card=document.getElementById('success-massage-card');
const signUpBtn = document.getElementById('sign-up-btn');
const errorMassage = document.getElementById('Error-Massage');
const massageUpBtn = document.getElementById('success-massage-btn');
const user_email = document.getElementById('user_email');

signUpBtn.addEventListener('click',function(){
    if (userInput.checkValidity() && userInput.value!=''){
        sign_up_card.classList.add('hidden');
        success_massage_card.classList.remove('hidden');
        user_email.innerText = userInput.value;

        
    }else{
        errorMassage.classList.remove('hidden')
        userInput.classList.add('bg-red-200')
        userInput.classList.add('border-red-400')
        userInput.classList.add('text-red-500')
        userInput.classList.add('outline-none')
    }
}) 
massageUpBtn.addEventListener('click',function(){
    location.reload();
    sign_up_card.classList.remove('hidden');
    success_massage_card.classList.add('hidden')
    

})