import axios from 'axios';

const key = "AIzaSyCG4zSnge4H1wle62gEdt1At-fwPWScAQk";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: key

    }
});