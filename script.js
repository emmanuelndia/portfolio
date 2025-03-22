document.querySelector('form').addEventListener('submit', function(e){
    let email = document.querySelector('input[type="email"]').value;
    if(!email.include('@')){
        e.preventDefault();
        alert('Please enter a valid email!');
    }
});