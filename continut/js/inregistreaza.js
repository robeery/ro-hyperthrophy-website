function validateAndSubmit() {
    const form = document.querySelector('.form_inregistreaza');
    const inputs = form.querySelectorAll('input[required]');
    let allValid = true;
    
    
    inputs.forEach(input => {
        if (!input.value || !input.checkValidity()) {
            allValid = false;
        }
    });
    
    if (allValid) {
        
        schimbaContinut('inregistrare_completa');
    } else {
        alert('Vă rugăm să completați toate câmpurile obligatorii corect!');
    }
}