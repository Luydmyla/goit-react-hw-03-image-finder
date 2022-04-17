const API_KEY = '25154920-bc2b97b916e9c15e1ff6fb5dd';
const BASE_URL = 'pixabay.com/api';

function fetchPixabayImage(image, page) {
  return fetch(
    `https://${BASE_URL}/?q=${image}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
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

// export default class FetchPixabayImage {
//   constructor() {
//     this.searchImage = '';
//     this.page = 1;
//     this.per_page = 12;
//   }
//   fetchImage() {
//     const params = new URLSearchParams({
//       q: this.searchImage,
//       key: API_KEY,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: this.per_page,
//       page: this.page,
//     });
//     this.icrementPage();
//     fetch(`https://${BASE_URL}/?${params}`).then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//       return Promise.reject(
//         new Error(`Немає картинки по запиту ${this.searchImage}`)
//       );
//     });
//   }
//   icrementPage() {
//     this.page += 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
//   get query() {
//     return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.query = newQuery;
//   }
// }

// const pixabayAPI = {
//   FetchPixabayImage,
// };

// export default pixabayAPI;
