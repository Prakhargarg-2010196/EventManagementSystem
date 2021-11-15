import { BaseUrl } from "./BaseUrl";
// import authHeader from "./auth-header";
import axios from "axios";
const token = JSON.parse(localStorage.getItem("user2"));
console.log(token);
class PostService {
	ViewAllPosts() {
		return axios.get(BaseUrl() + "post/getAll");
	}
	DeleteImage(id, imgPath) {
		console.log(imgPath)
		return axios.put(BaseUrl() + `post/deleteImage/${id}`,{imgPath}, {
			headers: {
				Authorization: "Bearer " + token,
				enctype: "multipart/form-data",
			},
		});
	}
	AddImage(id,FileData) {
		return axios.put(BaseUrl() + `post/AddImages/${id}`, FileData, {
			headers: {
				Authorization: "Bearer " + token,
				enctype: "multipart/form-data",
			},
		});
	}
	
}

export default new PostService();
