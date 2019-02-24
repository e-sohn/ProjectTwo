import axios from 'axios';

const BASE_URL = '';

const fetchWallpaper = async () => {
  try {
    const resp = await axios(`${BASE_URL}`)
    return resp.data;
  } catch(e) {
    console.log('got a problem: ', e);
    return [];
  }
}

export { wallpaper };
