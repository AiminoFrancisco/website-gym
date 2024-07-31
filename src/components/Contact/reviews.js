import axios from 'axios';

const apiKey = "AIzaSyCFMZgQ629T8oree1gGJGYgtP2_DnFEETw";
const placeId = "ChIJVWibW1KZMpQRPcqZZuRceZ0";

const fetchReviews = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );
    console.log(response.data.result.reviews); // Aquí tienes las reseñas
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

fetchReviews();
