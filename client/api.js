import axios from "axios";

// Defining  the base URL for your API
const BASE_URL = 'https://full-stack-user-auth-inky.vercel.app/api';

export const loginUser = async (formData) => {
  
    try{
        const response = await axios.post(`${BASE_URL}/login`, formData);
        console.log('Login Successful', response.data);
        return response.data;

    }catch(error){
        throw error
    }
}


export const registerUser = async (formData) => {
    try {
        const response = await axios.post('https://full-stack-user-auth-inky.vercel.app/api/register', formData);
        console.log('Register Successful:', response.data);
        return response.data;  // Return the response for further use
    } catch (error) {
        console.error('Registration Failed:', error.response?.data || error);
        throw error;
    }
};
