import defaultBg from "../assets/default.jpg";
const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "85885e9937ec458ef8683291b120b418",
  originalImage: (imgPath) => {
    if (imgPath === null) {
      return defaultBg;
    } else {
      return `https://image.tmdb.org/t/p/original/${imgPath}`;
    }
  },
  w500Image: (imgPath) => {
    if (imgPath === null) {
      return defaultBg;
    } else {
      return `https://image.tmdb.org/t/p/w500/${imgPath}`;
    }
  },
};

export default apiConfig;
