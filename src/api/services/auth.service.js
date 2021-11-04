import axios from 'axios';
const BaseUrl="http://67b9-103-211-14-35.ngrok.io/auth/"
class AuthService{
    
    LogIn(userCredentials){
        return axios
        .put((BaseUrl+"login"),userCredentials)
    }
    // getCurrentUser() {
    //     return JSON.parse(localStorage.getItem('user'));;
    //   }
    OtpSignUp(otp){
        return axios.put((BaseUrl+"signup/verify"),otp)
    }
    logOut(){
        localStorage.removeItem("user2");    
    }
   
    ResetPass(userCredentials){
        return axios.put((BaseUrl+"resetpass"),userCredentials);
    }
    SignUp(userCredentials){
        return axios.put((BaseUrl+"signup"),userCredentials)
    }
    VerifyResetPassOtp(otp){
        return axios.put((BaseUrl+"resetpass/verify"),otp)
    }
    
    NewPassword(details){
        return axios.put((BaseUrl+"resetpass/verify/newpass"),details)
    }
    // PasswordReset(userCredentials){
    //     return axios
    //     .put((BaseUrl+"resetpass"),userCredentials)
    //     .then(response=>{
    //         if()
    //     })
    // }
    
}

export  default new AuthService();

