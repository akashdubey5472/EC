// Get all elements with the class "category-btn"
const categoryButtons = document.getElementsByClassName("category-btn");

// Loop through each button and attach a click event listener
for (const button of categoryButtons) {
  button.addEventListener("click", function () {
    // Fetch data when the button is clicked
    fetch("https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/v2/amz/amazon-lookup-prices?page=1&domainCode=com&asin=B07QFC6LN6", {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual API key
        'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com',
      }
    })
      .then(response => response.json())
      .then(data => {
        // Get the container where you want to display the results
        const shirtContainer = document.getElementsByClassName("add-cart-btn")[0]; // Assuming you want to target the first element with this class

        // Clear previous content if any
        shirtContainer.innerHTML = "";

        // Loop through the data and create elements to display it
        data.forEach(shirt => {
          const shirtElement = document.createElement("div");
          shirtElement.textContent = shirt.name;
          shirtContainer.appendChild(shirtElement);
        });
      })
      .catch(error => {
        console.error("Error fetching shirt data: " + error);
      });
  });
}
