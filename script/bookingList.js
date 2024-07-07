
class Booking {
    constructor(name, email, date, time) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.time = time;
    }
}

let bookingList = [];

bookingList.push(new Booking("Jim", "ji@mail.com", "2024-04-15", "18:00"));
bookingList.push(new Booking("Tom", "to@mail.com", "2024-04-16", "19:00"));
bookingList.push(new Booking("Tim", "ti@mail.com", "2024-04-17", "20:00"));
bookingList.push(new Booking("Sam", "sa@mail.com", "2024-04-18", "21:00"));
bookingList.push(new Booking("Ali", "al@mail.com", "2024-04-19", "22:00"));

document.addEventListener("DOMContentLoaded", function() {
    const bookingListContainer = document.getElementById("bookingList");
    
    // Funktion för att ta bort en bokning från listan
    function removeBooking(id) {
        const index = id - 1; 
        if (index >= 0 && index < bookingList.length) {
            bookingList.splice(index, 1);
            refreshBookingContainer(); 
        }
    }

    function refreshBookingContainer() {
        if (!bookingListContainer) return; 

        bookingListContainer.innerHTML = "";
        bookingList.forEach(function(booking, index) {
            const bookingDiv = document.createElement("div");
            bookingDiv.classList.add("booking");
            bookingDiv.innerHTML = `
                <p>Namn: ${booking.name}</p>
                <p>E-post: ${booking.email}</p>
                <p>Datum: ${booking.date}</p>
                <p>Tid: ${booking.time}</p>
                <button class="deleteBtn" data-id="${index + 1}">Ta bort</button>
                <button class="showBtn" data-id="${index}">Visa info</button>
            `;
            bookingListContainer.appendChild(bookingDiv);
        });
    }

    bookingListContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("deleteBtn")) {
            const id = parseInt(event.target.getAttribute("data-id"));
            removeBooking(id);
        } else if (event.target.classList.contains("showBtn")) {
            const id = parseInt(event.target.getAttribute("data-id"));
            showBookingInfo(id);
        }
    });

    function showBookingInfo(index) {
        const booking = bookingList[index];
        alert(`Bokningsinformation:\nNamn: ${booking.name}\nE-post: ${booking.email}\nDatum: ${booking.date}\nTid: ${booking.time}`);
    }

    // Förbered att lägga till en ny bokning
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        const newBooking = new Booking(name, email, date, time);
        bookingList.push(newBooking);
        refreshBookingContainer();
        bookingForm.reset(); 
        console.log(`Bokning:\nNamn: ${name}\nE-post: ${email}\nDatum: ${date}\nTid: ${time}`);
    });

    refreshBookingContainer();
});

