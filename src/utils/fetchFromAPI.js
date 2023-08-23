const axios = require('axios');

const BASE_URL = 'https://yt-api.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50' //This wasn't in provided API code
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  }
};

//Changed the fetchFrom API function
export const fetchFromAPI = async (endpoint, params = {}) => {
  const apiUrl = `${BASE_URL}/${endpoint}`; // Construct the URL
  const queryParms = new URLSearchParams(params)
  const fullAPIURL = apiUrl + (queryParms.toString() ? `?${queryParms.toString()}` : '')
  
  console.log('Constructed API URL:', fullAPIURL); // Log the constructed URL
  
  try {
      const {data} = await axios.get(fullAPIURL, options);
      return data;
  } catch (error) {
      console.error('API Error:', error);
      throw error;
  }
}