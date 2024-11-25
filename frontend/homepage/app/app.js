// Restrict input to numbers only and format card number
function setupCardNumberInput() {
    const cardInput = document.getElementById('cardNumber');
    
    cardInput.addEventListener('input', function(e) {
        // Remove any non-digit characters
        let value = this.value.replace(/\D/g, '');
        
        // Limit to 16 digits
        value = value.substring(0, 16);
        
        // Add spaces after every 4 digits
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        
        // Update input value
        this.value = value;
    });

    cardInput.addEventListener('keypress', function(e) {
        if (!/^\d*$/.test(e.key)) {
            e.preventDefault();
        }
    });
}

// Format expiry date with slash
function setupExpiryInput() {
    const expiryInput = document.getElementById('expiryDate');
    
    expiryInput.addEventListener('input', function(e) {
        // Remove any non-digit characters
        let value = this.value.replace(/\D/g, '');
        
        // Limit to 4 digits
        value = value.substring(0, 4);
        
        // Add slash after first 2 digits
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2);
        }
        
        // Update input value
        this.value = value;
    });

    expiryInput.addEventListener('keypress', function(e) {
        if (!/^\d*$/.test(e.key)) {
            e.preventDefault();
        }
    });
}

// Setup CVV input
function setupCVVInput() {
    const cvvInput = document.getElementById('cvv');
    
    cvvInput.addEventListener('input', function(e) {
        // Remove any non-digit characters
        let value = this.value.replace(/\D/g, '');
        
        // Limit to 4 digits (some cards use 4-digit CVV)
        value = value.substring(0, 4);
        
        // Update input value
        this.value = value;
    });

    cvvInput.addEventListener('keypress', function(e) {
        if (!/^\d*$/.test(e.key)) {
            e.preventDefault();
        }
    });
}

// Setup payment method selection
function setupPaymentMethodSelection() {
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            document.querySelectorAll('.payment-method-card').forEach(c => {
                c.classList.remove('active');
            });
            // Add active class to clicked card
            card.classList.add('active');
        });
    });
}

// Handle form submission
function setupFormSubmission() {
    document.getElementById('payment-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('cardName').value;

        if (cardNumber.length !== 16 || !expiryDate || !cvv || !cardName) {
            alert('Please fill in all fields correctly');
            return;
        }

        // Show transaction modal
        const transactionModal = new bootstrap.Modal(document.getElementById('transactionModal'));
        transactionModal.show();
        
        // Show processing animation
        document.getElementById('transaction-loader').innerHTML = 
            '<img src="../../assets/payment-processing.gif" alt="Processing Payment" style="width: 150px; height: 150px;">';
        document.getElementById('transaction-message').innerHTML = 'Processing your payment...';
        
        // Simulate transaction processing
        setTimeout(() => {
            // Show success state
            document.getElementById('transaction-loader').innerHTML = 
                '<img src="../assets/verified.gif">';
            document.getElementById('transaction-message').innerHTML = 'Payment successful!';
            
            // Redirect after successful payment
            setTimeout(() => {
                window.location.href = 'confirmation.html';
            }, 1500);
        }, 2000);
    });
}

// Initialize all functionality when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupCardNumberInput();
    setupExpiryInput();
    setupCVVInput();
    setupPaymentMethodSelection();
    setupFormSubmission();
});