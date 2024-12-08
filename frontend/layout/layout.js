class LayoutHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <head>
          <link rel="stylesheet" type="text/css" href="../homepage/styles/homepage_styles.css">
        </head>
        <header class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
          <div class="container-fluid m-0 w-100">
            <a class="navbar-brand d-flex align-items-center" href="#">
              <img src="../assets/logo.png" alt="TravelSphere logo" class="d-inline-block align-text-top">
              <h2 class="mb-0 ms-2 navbrand">TravelSphere</h2>
            </a>
            
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

            
            <div class="collapse navbar-collapse  justify-content-center" id="navbarNav">
              <ul class="navbar-nav d-flex justify-content-center">
                <li class="nav-item">
                  <a class="nav-link mx-2 active" href="/frontend/homepage/index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2" href="#">Contact</a>
                </li>
              <li class="nav-item">
  <a class="nav-link mx-2" href="/frontend/pages/triptracker.html" style="margin-right: 20px;">Trip Tracker</a>
</li>

              </ul>
            <div class="nav-actions d-flex align-items-center flex-wrap justify-content-center">
 <button 
  type="button" 
  class="nav-btn btn btn-book-now px-4 responsive-btn" 
  onclick="window.location.href='/frontend/login_register/login.html'"
>
  Get Started
</button>

  <div class="search-icon ms-3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
  </div>
</div>

            </div>
          </div>
        </header>
      `;
  }
}

class LayoutFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="w-100 h-50">
            <div class="text-center text-light mb-4 ">
                <h5>Subscribe to our newsletter</h5>
                <div class="d-flex justify-content-center mt-3">
                    <input type="email" class="email-input form-control rounded-start-pill" placeholder="Input your email">
                    <button class="btn btn-subscribe rounded-end-pill">Subscribe</button>
                </div>
            </div>

            <!-- Branding and Links -->
            <div class="d-flex flex-column flex-md-row justify-content-around align-items-center text-center text-md-start">
                <!-- Branding -->
                <div class="text-light footer-logo d-flex align-items-center">
                    <img src="../assets/logo.png">
                    <h3 class="mb-0 ms-3">Explore the World with Us</h3>
                </div>

                <!-- Navigation Links -->
                <div class="d-flex flex-wrap justify-content-center my-3 my-md-0">
                    <a href="#" class="nav-link text-white px-2">About us</a>
                    <a href="#" class="nav-link text-white px-2">Features</a>
                    <a href="#" class="nav-link text-white px-2">Help Center</a>
                    <a href="#" class="nav-link text-white px-2">Contact us</a>
                    <a href="#" class="nav-link text-white px-2">FAQs</a>
                    <a href="#" class="nav-link text-white px-2">Careers</a>
                </div>
            </div>

            <hr class="footer-divider my-4 mx-auto">

            <!-- Footer Bottom Section -->
            <div class="d-flex flex-column flex-md-row justify-content-around align-items-center">
                <!-- Language Dropdown -->
                <div class="mb-3 mb-md-0">
                    <select class="form-select w-auto bg-dark text-white border-0">
                        <option selected>English</option>
                        <option value="1">French</option>
                        <option value="2">Spanish</option>
                        <option value="3">German</option>
                    </select>
                </div>

                <!-- Copyright -->
                <div class="footer-bottom text-center">
                    &copy; 2024 Brand, Inc. • <a href="#" class="text-decoration-none text-white">Privacy</a> • <a href="#" class="text-decoration-none text-white">Terms</a> • <a href="#" class="text-decoration-none text-white">Sitemap</a>
                </div>

                <!-- Social Icons -->
                <div class="social-icons d-flex justify-content-between align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                        <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                    </svg>
                </div>
            </div>
        </footer>
        `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar-toggler");
  toggleButton.addEventListener("click", function () {
    console.log("Hamburger menu clicked");
    console.log("aria-expanded:", toggleButton.getAttribute("aria-expanded"));
  });
});

customElements.define("special-header", LayoutHeader);
customElements.define("special-footer", LayoutFooter);

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
    window.location.href = "/frontend/pages/bookingconfirmation.html";
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
