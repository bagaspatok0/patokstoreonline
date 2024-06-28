let cart = [];

	    function addToCart(productName, productPrice, productImage) {
		    // Ambil data keranjang dari Local Storage
		    let cart = JSON.parse(localStorage.getItem('cart')) || [];

		    // Tambahkan produk ke keranjang
		    cart.push({ name: productName, price: productPrice, image: productImage });

		    // Simpan kembali keranjang ke Local Storage
		    localStorage.setItem('cart', JSON.stringify(cart));

		    // Perbarui jumlah item di ikon keranjang
		    updateCartCount();

		    // Perbarui tampilan keranjang
		    updateCartDisplay();
		}

	    

	    function removeFromCart(index) {
	        // Ambil data keranjang dari Local Storage
	        let cart = JSON.parse(localStorage.getItem('cart')) || [];

	        // Hapus item dari keranjang
	        cart.splice(index, 1);

	        // Simpan kembali keranjang ke Local Storage
	        localStorage.setItem('cart', JSON.stringify(cart));

	        // Perbarui jumlah item di ikon keranjang
	        updateCartCount();

	        // Perbarui tampilan keranjang
	        updateCartDisplay();
	    }

	    function updateCartCount() {
	        // Ambil data keranjang dari Local Storage
	        let cart = JSON.parse(localStorage.getItem('cart')) || [];

	        // Perbarui jumlah item di ikon keranjang
	        document.getElementById('cart-count').textContent = cart.length;
	    }

	    function updateCartDisplay() {
	        const cartItems = document.getElementById('cart-items');
	        cartItems.innerHTML = '';

	        // Ambil data keranjang dari Local Storage
	        let cart = JSON.parse(localStorage.getItem('cart')) || [];

	        cart.forEach((item, index) => {
	            const li = document.createElement('li');
	            li.className = 'list-group-item cart-item';
	            
	            li.innerHTML = `
	                <img src="${item.image}" alt="${item.name}">
	                <div class="cart-item-info">
	                    ${item.name} - ${item.price}
	                </div>
	                <button class="bi bi-trash" onclick="removeFromCart(${index})"></button>
	            `;

	            cartItems.appendChild(li);
	        });
	    }

	    // Panggil fungsi ini untuk memperbarui jumlah item di ikon keranjang saat halaman dimuat
	    window.onload = function() {
	        updateCartCount();
	        updateCartDisplay();
	    };