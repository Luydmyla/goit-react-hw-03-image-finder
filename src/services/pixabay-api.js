const API_KEY = '25154920-bc2b97b916e9c15e1ff6fb5dd';
const BASE_URL = 'pixabay.com/api';

function fetchPixabayImage(image) {
  return fetch(
    `https://${BASE_URL}/?q=${image}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Немає картинки по запиту ${image}`));
  });
}

const pixabayAPI = {
  fetchPixabayImage,
};

export default pixabayAPI;
