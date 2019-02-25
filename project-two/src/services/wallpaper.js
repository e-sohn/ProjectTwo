import axios from 'axios';

const TOKEN = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
      'Authorization': `Bearer ${TOKEN}`
  }
});

const fetchWallpaper = async () => {
  try {
    const resp = await api(`search?query=wallpaper&per_page=15&page=1`)
    return resp.data;
  } catch(e) {
    console.log('got a problem: ', e);
    return [];
  }
}

const fetchRandomWallpaper = async () => {
  try {
    const rand = Math.random() * 100;
    const resp = await api(`curated?per_page=1&page=${rand}`);
    return resp.data;
  } catch(e) {
    console.log('got a problem: ', e);
    return [];
  }
}

export {
  fetchWallpaper,
  fetchRandomWallpaper
};
