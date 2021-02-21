const API_KEY = "985e49b0eb084ac89eb439c9ec1d46e0";

// const API_KEY = "985e49b0eb084ac89eb439c9ec1d46e0";
// breakfastwithsara API 'e335089cf9154db08fc8371f07675a9d'
// mitch.hair@gmail.com = '716ebd9ae1834e8ea0236a8e97b4b4dd'

const requests = {
    fetchNz: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${API_KEY}`,
    fetchAu: `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}`,
    fetchIt: `https://newsapi.org/v2/top-headlines?country=it&apiKey=${API_KEY}`,
    fetchGr: `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`,
    fetchUk: `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`,
    fetchUs: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    fetchSk: `https://newsapi.org/v2/top-headlines?country=sk&apiKey=${API_KEY}`,
    fetchTh: `https://newsapi.org/v2/top-headlines?country=th&apiKey=${API_KEY}`,
    fetchBr: `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`,
    
}

export default requests;
