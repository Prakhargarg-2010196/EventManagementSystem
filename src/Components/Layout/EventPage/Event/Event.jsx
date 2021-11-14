import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import bgimageOne from "../../../../assets/carouselbg.png"

const Event = () => {
	return (
		<>
			<Card style={{ width: "inherit", marginTop: "50px" }}>
				<CardMedia
					component="img"
					
					image={bgimageOne}
					alt=""
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
				<CardActions>
					<IconButton aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>
					
                    <Button variant="contained">REgister Now</Button>
				</CardActions>
					<Typography variant="body2" color="text.secondary">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
						nesciunt ipsum a odio necessitatibus itaque, fugiat rem ullam quam.
						Molestias facere nisi dolorem. Tempore fuga perspiciatis fugit,
						officiis dolor, architecto voluptatem minus repellat neque magni
						labore aperiam minima ad saepe hic voluptatum? Sint necessitatibus
						cumque illo corrupti illum quam optio dolore at, error beatae quo
						tenetur, praesentium aspernatur iste nobis fugit, doloremque ipsam
						rem reiciendis. Architecto facere sequi commodi quibusdam rem
						impedit adipisci non distinctio dignissimos unde atque tempora quas
						doloremque, similique itaque aut. Doloribus odit dicta placeat
						expedita nostrum culpa hic est assumenda, earum ratione accusantium
						ipsum perferendis, ipsa quam natus quod neque quisquam iure
						perspiciatis voluptates laborum? Iste accusantium maxime a obcaecati
						dolor ipsa, fuga corrupti beatae cupiditate nobis illo! Ad assumenda
						cumque similique optio voluptate. Alias cum soluta, adipisci sunt
						accusantium ea earum corporis similique! Odit perspiciatis nobis
						dolorem doloribus repellendus delectus optio aperiam, necessitatibus
						quas minus id quos eos distinctio cumque. Reprehenderit quis error
						unde deleniti necessitatibus exercitationem? A est sunt molestias
						quos amet pariatur exercitationem, doloribus quam, id vel at fugiat
						possimus cupiditate suscipit doloremque optio et repellat mollitia
						quo earum, magnam nisi excepturi reprehenderit. Rerum culpa id
						commodi vero placeat soluta? Ab molestiae esse alias. Quia molestias
						inventore perferendis beatae deleniti dolore nulla cum facilis ab!
						Corporis, eos? Quia quisquam fugiat ipsam debitis tempore
						consequatur alias a! Magnam impedit consequatur, assumenda maiores
						magni, ipsa facere explicabo esse asperiores illum praesentium neque
						laborum voluptatum veritatis cumque enim dicta? In voluptas, magnam
						unde distinctio necessitatibus cupiditate aspernatur ratione
						molestias minus facilis culpa quaerat dolorem! Architecto
						consequatur, molestias ipsum beatae quos nisi impedit quas eaque
						labore pariatur animi incidunt assumenda, aliquam quidem laborum
						officia totam. Doloribus quibusdam, eius debitis culpa fugit vero.
						Quisquam placeat explicabo neque minima quaerat dignissimos,
						necessitatibus mollitia aspernatur dicta numquam, porro temporibus
						vero iure possimus sunt totam assumenda amet. Neque delectus natus
						expedita pariatur reprehenderit rerum dolorum blanditiis enim. Iure
						eligendi impedit accusantium nobis inventore a incidunt, earum
						dolore, autem voluptatem reiciendis! Laborum, molestias consequatur
						tempore dicta ducimus expedita dolorum et. Cupiditate delectus sunt
						illum nemo at debitis eos quod accusamus, est error maxime, vel enim
						temporibus! Consequuntur aut beatae saepe mollitia, alias architecto
						aperiam eum quas similique, tenetur accusamus in, facere ab
						perspiciatis ullam? Eveniet sed hic fuga sapiente debitis totam ea
						optio doloremque placeat deleniti ipsum, impedit accusamus nulla
						obcaecati, minus omnis maiores voluptatibus pariatur delectus
						nostrum et dolorum fugiat veritatis. Dignissimos velit eaque vero
						adipisci ex consequatur expedita, enim cumque reprehenderit deleniti
						aspernatur sit soluta dolorem voluptates consequuntur est commodi
						perferendis porro! Nam optio ad, repellendus rerum numquam aliquid
						iste, asperiores, quibusdam itaque harum eos nesciunt cum sit quis
						vero dolor cupiditate unde quo. Nesciunt asperiores a voluptas odio
						quidem? Dignissimos labore hic id ipsa vel maxime exercitationem
						officia amet culpa, itaque fugit sunt dolore ex temporibus. Suscipit
						atque deleniti corporis blanditiis, quas, excepturi doloribus natus
						velit ut eligendi laboriosam fuga quae commodi earum, et debitis?
						Sunt eos, rerum quam possimus fugiat earum atque quibusdam libero
						hic voluptates nobis. Itaque?
					</Typography>
                    <div className="d-flex justify-content-around mt-4"> 
                        <h4>Categories</h4>
                        <Button variant="contained" style={{background:"#BF616A"}}>#Monthly</Button> 
                        <Button variant="contained" style={{background:"#BF616A"}}>#Arts</Button> 
                        <Button variant="contained" style={{background:"#BF616A"}}>#Craft</Button> 
                    </div>

				</CardContent>
			</Card>
		</>
	);
};
export default Event;
