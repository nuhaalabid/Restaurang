document.addEventListener("DOMContentLoaded", function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const date = urlParams.get('date');
    const time = urlParams.get('time');

    console.log(`Namn: ${name}`);
    console.log(`E-post: ${email}`);
    console.log(`Datum: ${date}`);
    console.log(`Tid: ${time}`);
    console.log  (`Booking för: ${name}, Email: ${email}, Date: ${date}, Time: kl. ${time}`);

    
    // Visa bokningsinformationen på sidan
    const bookingInfoContainer = document.getElementById("bookingInfoContainer");
    bookingInfoContainer.innerHTML = `
        <p>Namn: ${name}</p>
        <p>E-post: ${email}</p>
        <p>Datum: ${date}</p>
        <p>Tid: ${time}</p>
    `;


   
   
});