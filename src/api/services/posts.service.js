import { BaseUrl } from "./BaseUrl";
// import authHeader from "./auth-header";
import axios from "axios";
class PostService {
	ViewAllPosts() {
		return axios.get(BaseUrl() + "post/getAll");
	}
	DeleteImage(id, imgPath) {
		console.log(imgPath);
		return axios.put(
			BaseUrl() + `post/deleteImage/${id}`,
			{ imgPath },
			{
				headers: {
					Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
					enctype: "multipart/form-data",
				},
			}
		);
	}
	AddImage(id, FileData) {
		return axios.put(BaseUrl() + `post/AddImages/${id}`, FileData, {
			headers: {
				Authorization: "Bearer " +JSON.parse(localStorage.getItem("user2")) ,
				enctype: "multipart/form-data",
			},
		});
	}
	SearchPost(searchItem) {
		console.log(searchItem);
		return axios.put(BaseUrl() + `post/eventSearch`, searchItem, {
			headers: {
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
			
			}
		});
	}
	RegisterPost(id) {
		return axios.post(BaseUrl() + `post/book/${id}`,{},{
			headers: {
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			}
		});
	}
	FavoritePost(id) {
		return axios.post(BaseUrl() + `post/bookmark/${id}`,{},{
			headers: {
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			}
		});
	}
	UnFavoritePost(id) {
		return axios.put(BaseUrl() + `post/unFav/${id}`,{},{
			headers: {
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("user2")),
				enctype: "multipart/form-data",
			}
		});
	}
	
}

let post=new PostService();
export default post;
