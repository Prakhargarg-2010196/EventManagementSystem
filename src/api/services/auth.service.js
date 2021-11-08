import { BaseUrl } from './BaseUrl';
import axios from 'axios';
class AuthService{
    
    LogIn(userCredentials){
        return axios
        .put((BaseUrl()+"auth/login"),userCredentials)
    }
    
    OtpSignUp(otp){
        return axios.put((BaseUrl()+"auth/signup/verify"),otp)
    }
   
    logOut(){
        localStorage.removeItem("user2");    
    }
   
    ResetPass(userCredentials){
        return axios.put((BaseUrl()+"auth/resetpass"),userCredentials);
    }
    SignUp(userCredentials){
        return axios.put((BaseUrl()+"auth/signup"),userCredentials)
    }
    VerifyResetPassOtp(otp){
        return axios.put((BaseUrl()+"auth/resetpass/verify"),otp)
    }
    
    NewPassword(details){
        return axios.put((BaseUrl()+"auth/resetpass/verify/newpass"),details)
    }
    
    
}

export  default new AuthService();

