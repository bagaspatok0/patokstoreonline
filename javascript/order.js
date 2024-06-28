function checkout() {
    console.log('checkout clicked'); // Debugging

    // Ambil data keranjang dari Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let message = 'Saya ingin memesan produk berikut:\n';
    cart.forEach(item => {
        message += `- ${item.name} (${item.price})\n`;
    });
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/+628990763604?text=${encodedMessage}`;
    console.log(whatsappUrl); // Debugging
    window.open(whatsappUrl, '_blank');
}