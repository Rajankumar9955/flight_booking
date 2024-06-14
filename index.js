
const flights = [
    { name: "Air India", seatClass: "Economy", price: 10200 },
    { name: "Indigo", seatClass: "Business", price: 10100 },
    { name: "Qatar Airways", seatClass: "First Class", price: 12600 }
];

const bookedFlights = [];

const displayFlights = () => {
    const flightsContainer = document.getElementById("flights");
    flightsContainer.innerHTML = '';

    flights.forEach(flight => {
        const flightElement = document.createElement("div");
        flightElement.classList.add("flight");
        flightElement.innerHTML = `
            <h2>${flight.name}</h2>
            <p>Class: ${flight.seatClass}</p>
            <p>Price: INR:${flight.price}</p>
            <button onclick="bookFlight('${flight.name}', '${flight.seatClass}', ${flight.price})">Book Now</button>
        `;
        flightsContainer.appendChild(flightElement);
    });
};

const bookFlight = (name, seatClass, price) => {
    const bookedFlight = { name, seatClass, price };
    bookedFlights.push(bookedFlight);
    displayBookedFlights();
};

const displayBookedFlights = () => {
    const bookedFlightsTable = document.getElementById("bookedFlights");
    bookedFlightsTable.innerHTML = `
        <tr>
            <th>Flight Name</th>
            <th>Seat Class</th>
            <th>Price</th>
        </tr>
    `;

    bookedFlights.forEach(flight => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${flight.name}</td>
            <td>${flight.seatClass}</td>
            <td> INR:${flight.price}</td>
        `;
        bookedFlightsTable.appendChild(row);
    });
};

const addFlight = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const seatClass = document.getElementById("seatClass").value;
    const price = parseInt(document.getElementById("price").value);

    if (name && seatClass && price) {
        flights.push({ name, seatClass, price });
        displayFlights();
        document.getElementById("addFlightForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
};

window.onload = () => {
    displayFlights();
    document.getElementById("addFlightForm").addEventListener("submit", addFlight);
};


// ==========
function fun()
{
    document.getElementById("addFlightForm").style.display="block"
}