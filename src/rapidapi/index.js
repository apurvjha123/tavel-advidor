import axios from "axios";

export const data = async (place,bounds) => {
  console.log(place)
    try {
      const options = {
        method: "GET",
        url: `https://travel-advisor.p.rapidapi.com/${place}/list-in-boundary`,
        params: {
          bl_latitude: bounds.sw.lat,
          tr_latitude: bounds.ne.lat,
          bl_longitude: bounds.sw.lng,
          tr_longitude: bounds.ne.lng,
        },
        headers: {
          "X-RapidAPI-Key": "eced852888mshf17ffa1c475b2cdp1c96dajsnf7aa636ec19e",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };