import authHeader from './auth-header';
import axios from "axios";

const BaseUrl='http://1fe0-103-211-14-16.ngrok.io/auth/signup/verify/';

class UserService{
    // getPublicContent(){
    //     return axios.get(BaseUrl+"all");
    // }
    getUserBoard(){
        return axios.get(BaseUrl +'user',{headers:authHeader()})
    }
    getAdminBoard() {
        return axios.get(BaseUrl + 'adminLogin', { headers: authHeader() });
      }
}
export default new UserService();