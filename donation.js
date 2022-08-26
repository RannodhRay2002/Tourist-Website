let fname = document.getElementById("fname");
let donation = document.getElementById("donation")
let dntForm = document.getElementById("dform")

dntForm.addEventListener("submit",function(event){
    event.preventDefault();
    let donationAmount = donation.options[donation.selectedIndex].value;
    let firstnameValue = fname.value;
    alert(`Thank you for your donation ${firstnameValue} You have donated ${donationAmount}`)


    localStorage.setItem('Is_name', fname);
    localStorage.setItem('Is_birthdate', donation);
    localStorage.setItem('Is_email', dntForm);


})




