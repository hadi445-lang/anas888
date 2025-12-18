async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (response.ok) {
      const data = await response.json();

      console.log("List of Products\n--------------------");

      // Loop through all products
      data.forEach((product, index) => {
        console.log(`
${index + 1}. ID: ${product.id},
Title: ${product.title},
Price: $${product.price},
Description: ${product.description},
Category: ${product.category},
Image: ${product.image},
Rating: ${product.rating.rate} (${product.rating.count} reviews)
        `);
      });

      // Or just first product
      // console.log(`First Product: ID: ${data[0].id}, Title: ${data[0].title}`);

    } else {
      console.log("Error fetching products:", response.status);
    }

  } catch (error) {
    console.log("Error:", error);
  }
}

fetchProducts();
