let products = [];

// Load JSON
fetch('products.json')
.then(res => res.json())
.then(data => {
    products = data.products;

    const productSelect = document.getElementById('product');

    products.forEach(p => {
        let option = document.createElement('option');
        option.value = p.id;
        option.textContent = p.name;
        productSelect.appendChild(option);
    });
});

// Auto fill price
document.getElementById('product').addEventListener('change', function(){
    const selected = products.find(p => p.id == this.value);
    document.getElementById('price').value = selected.price;
});

// Save record
function saveSale(){

    const record = {
        date: document.getElementById('date').value,
        shift: document.getElementById('shift').value,
        employee: document.getElementById('employee').value,
        productId: document.getElementById('product').value,
        productName: document.getElementById('product').selectedOptions[0].text,
        price: document.getElementById('price').value,
        quantity: document.getElementById('qty').value,
        total: document.getElementById('price').value * document.getElementById('qty').value
    };

    sendToCloud(record);
}