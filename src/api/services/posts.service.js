import { BaseUrl } from "./BaseUrl";
// import authHeader from "./auth-header";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("user2"));
console.log(token);
class PostService {
	ViewAllPosts() {
		return axios.get(BaseUrl() + "post/getAll");
	}
}

export default new PostService();
