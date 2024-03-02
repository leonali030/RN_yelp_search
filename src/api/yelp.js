import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 86-zOJcREmc-Xg-6GpM-7U4_Yrzkt4Hr75L9aViDkkNiWPHJfzNfBkpAUhFZyjBTSLomjw-zQ7nCS_kJx48s9yQudJBtzvUWQBMAMQ0mLN0aBfh4y6NbjZcmgZXgZXYx' 
    }
})
