document.querySelector('.category-btn').addEventListener('click', async () => {
    const url = 'https://zappos1.p.rapidapi.com/brands/list';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3c1080e3d8msh2c882329209016cp1ebb34jsnd09ae9e0912d',
        'X-RapidAPI-Host': 'zappos1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        // Perform your desired task with the API response data here.
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('There was an error with the API request:', error);
    }
  });
