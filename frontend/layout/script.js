// Variables to hold the selected data
let selectedSeats = [];
let boardingPoint = "";
let droppingPoint = "";

// Example data structure for bookings
let bookings = [
  {
    id: 1,
    route: "Point A to Point B",
    seat: "3A",
    paymentStatus: "Confirmed",
  },
  {
    id: 2,
    route: "Point B to Point C",
    seat: "1B",
    paymentStatus: "Pending",
  },
];

// Handle seat selection
function selectSeat(seatNumber) {
  if (selectedSeats.includes(seatNumber)) {
    selectedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
  } else {
    selectedSeats.push(seatNumber);
  }
  updateSeatDisplay();
}

// Update the seat display with selected seats
function updateSeatDisplay() {
  document.querySelectorAll(".seat").forEach((seat) => {
    const seatNumber = seat.textContent.trim();
    if (selectedSeats.includes(seatNumber)) {
      seat.classList.add("bg-success", "text-white");
    } else {
      seat.classList.remove("bg-success", "text-white");
    }
  });
}

// Handle Confirm Selection Button click
document
  .getElementById("confirmSelectionBtn")
  .addEventListener("click", function () {
    boardingPoint = document.getElementById("boardingPoint").value;
    droppingPoint = document.getElementById("droppingPoint").value;

    if (!boardingPoint || !droppingPoint) {
      alert("Please select boarding and dropping points.");
      return;
    }

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    document.getElementById("confirmedBoarding").textContent = boardingPoint;
    document.getElementById("confirmedDropping").textContent = droppingPoint;

    // Hide the seat selection modal
    const seatModal = document.getElementById("seatModal");
    const modalInstance = bootstrap.Modal.getInstance(seatModal);
    if (modalInstance) {
      modalInstance.hide();
    }

    // Show the user details modal
    const userDetailsModal = new bootstrap.Modal(
      document.getElementById("userDetailsModal")
    );
    userDetailsModal.show();
  });

// Handle Proceed to Confirmation Button click
document
  .getElementById("proceedToConfirmationBtn")
  .addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!fullName || !phone || !email) {
      alert("Please enter all your details.");
      return;
    }

    document.getElementById("confirmedName").textContent = fullName;
    document.getElementById("confirmedPhone").textContent = phone;
    document.getElementById("confirmedEmail").textContent = email;
    document.getElementById("confirmedSeats").textContent =
      selectedSeats.join(", ");

    // Close the user details modal
    const userDetailsModal = bootstrap.Modal.getInstance(
      document.getElementById("userDetailsModal")
    );
    if (userDetailsModal) {
      userDetailsModal.hide();
    }

    // Show the confirmation modal
    const confirmationModal = new bootstrap.Modal(
      document.getElementById("confirmationModal")
    );
    confirmationModal.show();
  });

// Handle Final Confirm Button click
document
  .getElementById("finalConfirmBtn")
  .addEventListener("click", function () {
    alert("Booking Confirmed! Redirecting to confirmation page.");
    window.location.href = "/frontend/homepage/bookingconfirmation.html";
  });

// Function to load booking cards dynamically
function loadBookings() {
  const bookingContainer = document.querySelector(".container.mt-4");
  bookingContainer.innerHTML = ""; // Clear existing content

  bookings.forEach((booking) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.id = `booking${booking.id}`;

    card.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Route: ${booking.route}</h5>
          <p><strong>Seat: </strong>${booking.seat}</p>
          <p><strong>Payment Status: </strong>${booking.paymentStatus}</p>
          <button class="btn btn-warning" onclick="modifyBooking(${booking.id})">Modify</button>
          <button class="btn btn-danger" onclick="cancelBooking(${booking.id})">Cancel</button>
        </div>
      `;

    bookingContainer.appendChild(card);
  });
}

// Function to modify booking
function modifyBooking(id) {
  alert(`Modify booking ${id}`);
}

// Function to cancel booking
function cancelBooking(id) {
  const bookingIndex = bookings.findIndex((booking) => booking.id === id);
  if (bookingIndex !== -1) {
    bookings.splice(bookingIndex, 1);
    loadBookings(); // Re-render the booking list after cancellation
    alert(`Booking ${id} has been canceled.`);
  }
}

// Initial setup
document.addEventListener("DOMContentLoaded", function () {
  loadBookings();
});
