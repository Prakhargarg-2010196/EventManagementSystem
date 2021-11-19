
export default function authHeader() {
	const userToken = JSON.parse(localStorage.getItem("user2"));

	if (userToken) {
		return{ Authorization: "Bearer "+ JSON.parse(localStorage.getItem("user2"))}
        
	} 
	
    else return {};
}
