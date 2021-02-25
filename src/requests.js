const API_KEY = "e335089cf9154db08fc8371f07675a9d";

// const API_KEY = "985e49b0eb084ac89eb439c9ec1d46e0";
// breakfastwithsara API 'e335089cf9154db08fc8371f07675a9d'
// mitch.hair@gmail.com = '716ebd9ae1834e8ea0236a8e97b4b4dd'

const requests = {
    fetchNz: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${API_KEY}`,
    
    fetchGr: `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`,
    fetchUk: `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`,
    fetchUs: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    fetchSk: `https://newsapi.org/v2/top-headlines?country=sk&apiKey=${API_KEY}`,
    fetchTh: `https://newsapi.org/v2/top-headlines?country=th&apiKey=${API_KEY}`,
    fetchBr: `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`,
    
    fetchAu: `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}`,
    fetchAuHealth: `https://newsapi.org/v2/top-headlines?category=health&country=au&apiKey=${API_KEY}`,
    fetchAuBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=au&apiKey=${API_KEY}`,
    fetchAuEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=au&apiKey=${API_KEY}`,
    fetchAuTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=au&apiKey=${API_KEY}`,
    fetchAuScience: `https://newsapi.org/v2/top-headlines?category=science&country=au&apiKey=${API_KEY}`,
    fetchAuSports: `https://newsapi.org/v2/top-headlines?category=sports&country=au&apiKey=${API_KEY}`,

    fetchIt: `https://newsapi.org/v2/top-headlines?country=it&apiKey=${API_KEY}`,
    fetchItHealth: `https://newsapi.org/v2/top-headlines?category=health&country=it&apiKey=${API_KEY}`,
    fetchItBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=it&apiKey=${API_KEY}`,
    fetchItEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=it&apiKey=${API_KEY}`,
    fetchItTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=it&apiKey=${API_KEY}`,
    fetchItScience: `https://newsapi.org/v2/top-headlines?category=science&country=it&apiKey=${API_KEY}`,
    fetchItSports: `https://newsapi.org/v2/top-headlines?category=sports&country=it&apiKey=${API_KEY}`,
}

export default requests;


// https://newsapi.org/v2/top-headlines?category=business&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=entertainment&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=general&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=health&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=science&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=sports&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=technology&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0