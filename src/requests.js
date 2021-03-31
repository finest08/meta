const API_KEY = "716ebd9ae1834e8ea0236a8e97b4b4dd";

// const API_KEY = "985e49b0eb084ac89eb439c9ec1d46e0";
// breakfastwithsara API 'e335089cf9154db08fc8371f07675a9d'
// mitch.hair@gmail.com = '716ebd9ae1834e8ea0236a8e97b4b4dd'
// finestmw = 'ce6b71ce59e44a2ea1ce15332e97e868'
// mistaboofy = 'c1dfc9d7addb4d0aa51b683a937ba57c'

// const countries = [
//     country ('au'),
//     country ('it'), 
//     country ('nz')
// ]

// const categories = [
//     item ('health'),
//     item ('business'), 
//     item ('entertainment')
// ]



const requests = {
    
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

    fetchNz: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${API_KEY}`,
    fetchNzHealth: `https://newsapi.org/v2/top-headlines?category=health&country=nz&apiKey=${API_KEY}`,
    fetchNzBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=nz&apiKey=${API_KEY}`,
    fetchNzEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=nz&apiKey=${API_KEY}`,
    fetchNzTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=nz&apiKey=${API_KEY}`,
    fetchNzScience: `https://newsapi.org/v2/top-headlines?category=science&country=nz&apiKey=${API_KEY}`,
    fetchNzSports: `https://newsapi.org/v2/top-headlines?category=sports&country=nz&apiKey=${API_KEY}`,

    fetchBr: `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`,
    fetchBrHealth: `https://newsapi.org/v2/top-headlines?category=health&country=br&apiKey=${API_KEY}`,
    fetchBrBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=br&apiKey=${API_KEY}`,
    fetchBrEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=br&apiKey=${API_KEY}`,
    fetchBrTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=br&apiKey=${API_KEY}`,
    fetchBrScience: `https://newsapi.org/v2/top-headlines?category=science&country=br&apiKey=${API_KEY}`,
    fetchBrSports: `https://newsapi.org/v2/top-headlines?category=sports&country=br&apiKey=${API_KEY}`,

    fetchTh: `https://newsapi.org/v2/top-headlines?country=th&apiKey=${API_KEY}`,
    fetchThHealth: `https://newsapi.org/v2/top-headlines?category=health&country=th&apiKey=${API_KEY}`,
    fetchThBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=th&apiKey=${API_KEY}`,
    fetchThEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=th&apiKey=${API_KEY}`,
    fetchThTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=th&apiKey=${API_KEY}`,
    fetchThScience: `https://newsapi.org/v2/top-headlines?category=science&country=th&apiKey=${API_KEY}`,
    fetchThSports: `https://newsapi.org/v2/top-headlines?category=sports&country=th&apiKey=${API_KEY}`,

    fetchUk: `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`,
    fetchUkHealth: `https://newsapi.org/v2/top-headlines?category=health&country=gb&apiKey=${API_KEY}`,
    fetchUkBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=gb&apiKey=${API_KEY}`,
    fetchUkEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=gb&apiKey=${API_KEY}`,
    fetchUkTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=gb&apiKey=${API_KEY}`,
    fetchUkScience: `https://newsapi.org/v2/top-headlines?category=science&country=gb&apiKey=${API_KEY}`,
    fetchUkSports: `https://newsapi.org/v2/top-headlines?category=sports&country=&apiKey=${API_KEY}`,

    fetchGr: `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`,
    fetchGrHealth: `https://newsapi.org/v2/top-headlines?category=health&country=de&apiKey=${API_KEY}`,
    fetchGrBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=de&apiKey=${API_KEY}`,
    fetchGrEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=de&apiKey=${API_KEY}`,
    fetchGrTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=de&apiKey=${API_KEY}`,
    fetchGrScience: `https://newsapi.org/v2/top-headlines?category=science&country=de&apiKey=${API_KEY}`,
    fetchGrSports: `https://newsapi.org/v2/top-headlines?category=sports&country=de&apiKey=${API_KEY}`,

    fetchSk: `https://newsapi.org/v2/top-headlines?country=sk&apiKey=${API_KEY}`,
    fetchSkHealth: `https://newsapi.org/v2/top-headlines?category=health&country=sk&apiKey=${API_KEY}`,
    fetchSkBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=sk&apiKey=${API_KEY}`,
    fetchSkEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=sk&apiKey=${API_KEY}`,
    fetchSkTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=sk&apiKey=${API_KEY}`,
    fetchSkScience: `https://newsapi.org/v2/top-headlines?category=science&country=sk&apiKey=${API_KEY}`,
    fetchSkSports: `https://newsapi.org/v2/top-headlines?category=sports&country=sk&apiKey=${API_KEY}`,

    fetchUs: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
    fetchUsHealth: `https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=${API_KEY}`,
    fetchUsBusiness: `https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=${API_KEY}`,
    fetchUsEntertainment: `https://newsapi.org/v2/top-headlines?category=entertainment&country=us&apiKey=${API_KEY}`,
    fetchUsTechnology: `https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${API_KEY}`,
    fetchUsScience: `https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=${API_KEY}`,
    fetchUsSports: `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${API_KEY}`,
}

export default requests;


// https://newsapi.org/v2/top-headlines?category=business&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=entertainment&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=general&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=health&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=science&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=sports&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0
// https://newsapi.org/v2/top-headlines?category=technology&country=nz&apiKey=985e49b0eb084ac89eb439c9ec1d46e0