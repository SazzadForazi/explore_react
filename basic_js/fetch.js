const apiResponse = {
    user: {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        address: {
            street: "123 Main St",
            city: "Wonderland",
            zip: "12345",
            coordinates: {
                lat: 40.7128,
                lng: 74.0060
            }
        }
    }
}
// console.log(apiResponse);
const apiResponseJSON = JSON.stringify(apiResponse)
// console.log(apiResponseJSON);
const apiResponseOBJ = JSON.parse(apiResponseJSON)
// console.log(apiResponseOBJ);




fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        // Use map to iterate over each post object
        data.map(post => {
            // Extract keys and values from each post object
            const keys = Object.keys(post);
            const values = Object.values(post);

            // Log keys and values
            console.log('Keys:', keys);
            console.log('Values:', values);
        });
    })
    .catch(error => {
        console.log('ERROR', error);
    });
