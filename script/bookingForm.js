class Booking {
  constructor(name, email, date, time) {
      this.name = name;
      this.email = email;
      this.date = date;
      this.time = time;
  }

  displayBookingInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Email: ${this.email}`);
      console.log(`Date: ${this.date}`);
      console.log(`Time: ${this.time}`);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submitBtn");
  const bookingForm = document.getElementById("bookingForm");
  

  submitButton.addEventListener("click", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;

      console.log(`Booking för: ${name}, Email: ${email}, Date: ${date}, Time: kl. ${time}`);

      clearFormInputs();

// Skicka bokningsinformationen som URL-parametrar
   const queryParams = `?name=${name}&email=${email}&date=${date}&time=${time}`;
  window.location.href = `bekräftelse.html${queryParams}`;
  });

  function clearFormInputs() {
      bookingForm.reset();
  }


});





