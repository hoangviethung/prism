$(document).ready(function() {
    $('#restore-trezor').on('click', function(e){
        e.preventDefault();
        window.open('https://trezor.io/', '_blank');
        window.location.replace('/restore-with-hardware.html');
    });
    
    $('#restore-ledger').on('click', function(e) {
        e.preventDefault();
        window.open('https://www.ledger.com/', '_blank');
        window.location.replace('/restore-with-hardware.html');
    });
    $('#restore-grid').on('click', function(e) {
        e.preventDefault();
        window.open('https://gridplus.io/');
        window.location.replace('/restore-with-hardware.html');
    });
});