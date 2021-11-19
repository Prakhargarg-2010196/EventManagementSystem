import * as React from "react";

import { Button, CardActionArea } from "@mui/material";

import { BaseUrl } from "../../../../../api/services/BaseUrl";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import authService from "../../../../../api/services/auth.service";
import crudService from "../../../../../api/services/crud-service";
import postsService from "../../../../../api/services/posts.service";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function EventCards(props) {
	const [favorite, setFavorite] = React.useState();
	const [favoriteList, setFavoriteList] = React.useState([]);
	var isPresent = favoriteList.some((el) => el._id === props.id);
	const history = useHistory();
	const imgPath = props.img;
	const imageUrl = `${BaseUrl()}${imgPath}`;
	console.log(imageUrl);
	React.useEffect(() => {
		const getBookmarked = async () => {
			await crudService.BookMarkedEvents().then(
				(response) => {
					if (response.data) setFavoriteList(response.data);
				},
				(error) => {
					console.log(error.response.data);
				}
			);
		};
		getBookmarked();
	}, []);
	const handleClickEvent = () => {
		history.push({ pathname: `/EventPage/${props.id}` });
	};
	
	const handleFavoritism = async () => {
		if (authService.isAuthenticated()) {
			if (!isPresent || !favorite) {
				setFavorite(true);
				alert("Bookmarked")
				await postsService.FavoritePost(props.id);
			} else {
				setFavorite(false);
				alert("UnBookmarked")
				await postsService.UnFavoritePost(props.id);
			}
			await crudService.BookMarkedEvents().then(
				(response) => {
					if (response.data) setFavoriteList(response.data);
				},
				(error) => {
					console.log(error.response.data);
				}
			);
			
		};
		
	};

	return (
		<Card
			sx={{ maxWidth: 650, border: "solid 0.5px grey", margin: "30px 0px" }}
		>
			{console.log(favoriteList)}
			<CardHeader title={props.title} />
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={imageUrl}
					alt=""
					onClick={() => {
						handleClickEvent();
					}}
				/>

				<CardActions disableSpacing>
					{console.log(favorite)}

					<Button
						onClick={() => {
							handleFavoritism();
						}}
					>
						{favorite || isPresent ? (
							<FavoriteIcon color="secondary" />
						) : (
							<FavoriteBorderIcon />
						)}
					</Button>
				</CardActions>
			</CardActionArea>
		</Card>
	);
}
