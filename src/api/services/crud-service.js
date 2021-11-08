import { BaseUrl } from './BaseUrl';
import axios from 'axios';
const token=JSON.parse(localStorage.getItem('user2'));
console.log(token);
class CrudService{
	 
    
    Create(FormData){
        return axios
        .post((BaseUrl()+"post/create"),FormData,{
            headers:{
			'Authorization':'Bearer '+ token,
            'Content-Type': "multipart/form-data",    
        }})
       
    }
    // Update(FormData){
    //     return axios.post((BaseUrl()+"post/create"),FormData)
    // }
    // Delete(FormData){
    //     return axios.post((BaseUrl()+"post/create"),FormData)
    // }
    // Read(FormData){
    //     return axios.post((BaseUrl()+"post/create"),FormData)
    // }
    
    
    
    
}

export  default new CrudService();

