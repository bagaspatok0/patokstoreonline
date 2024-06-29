function getTimeBasedGreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Selamat pagi";
    } else if (hours < 18) {
        greeting = "Selamat siang";
    } else {
        greeting = "Selamat malam";
    }

    return greeting;
}


function checkout() {  
    console.log('checkout clicked'); // Debugging

    // Ambil data keranjang dari Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const timemessage = getTimeBasedGreeting();

    let message = 'Saya ingin memesan produk berikut:\n';
    cart.forEach(item => {
        message += `- ${item.name} (${item.price})\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+628990763604?text=Hallo ${timemessage}, ${encodedMessage}`;
    console.log(whatsappUrl); // Debugging
    window.open(whatsappUrl, '_blank');
}
