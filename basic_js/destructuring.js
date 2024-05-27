// Example API response
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
  },
  token: "abc123",
  expires: "2024-12-31T23:59:59Z"
};

const { id, name } = apiResponse.user;
console.log(name);

const { lng } = apiResponse?.user?.address?.coordinates
console.log(lng);