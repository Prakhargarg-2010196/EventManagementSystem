import {BaseUrl} from './BaseUrl'
import authHeader from './auth-header';
import axios from "axios";
class UserService{
    
    getUserBoard(){
        return axios.get(BaseUrl()+"post/dashboard",{headers:authHeader()})
    }
    getAdminBoard() {
        return axios.get(BaseUrl() + 'admin/view', { headers: authHeader() });
      }
}
export default new UserService();