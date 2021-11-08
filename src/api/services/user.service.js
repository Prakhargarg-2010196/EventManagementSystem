import {BaseUrl} from './BaseUrl'
import authHeader from './auth-header';
import axios from "axios";
class UserService{
    
    getUserBoard(){
        return axios.get(BaseUrl() ,'user' ,{headers:authHeader()})
    }
    getAdminBoard() {
        return axios.get(BaseUrl() + 'adminLogin', { headers: authHeader() });
      }
}
export default new UserService();