fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
.then(response => response.json())
.then(data => {
    // Extract products from the data
    const products = data.products || {};

    // Convert the products object to an array
    const dataArray = Object.values(products);

    // Sort the data based on descending popularity
    dataArray.sort((a, b) => b.popularity - a.popularity);

    // Display data in the table
    const tableBody = document.getElementById('productTableBody');
    dataArray.forEach(product => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = product.title;
        row.insertCell(1).textContent = product.price;
        row.insertCell(2).textContent = product.popularity;
    });
})
.catch(error => console.error('Error fetching data:', error));