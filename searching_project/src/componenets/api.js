import axios from "axios"
const searchImages = async (term) => {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID 7-WtsJxByOt6tV34o6SHCE4a6AIMdo5V2MiARGt_cp8`,
    },
    params: {
      query: term,
    },
  });
  return response.data.results;

}

export default searchImages


