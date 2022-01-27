import axios from "axios";

const instance=axios.create({
    baseUrl:'http://localhost:5001/challenge-bbb6f/us-central1/api' //the api (cloud function) URL
})


export default instance;