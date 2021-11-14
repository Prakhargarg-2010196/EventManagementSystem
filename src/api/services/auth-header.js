import authService from "./auth.service";

export default function authHeader() {
	const userToken = authService.getCurrentUser();

	if (userToken) {
		return{ Authorization: "Bearer "+ userToken}
        
	} 
	
    else return {};
}
