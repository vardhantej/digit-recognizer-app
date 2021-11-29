import axios from 'axios';


const url="https://digit-recognizer-api-tej.herokuapp.com/cnnPredict";


export const fetchPredictionFromURL = async (imgDataURL) => {
    try {
        
        return axios.post(url,{'imgDataURL' :imgDataURL});
    

    } catch (error) {
        console.log(error);
    }
}
 
