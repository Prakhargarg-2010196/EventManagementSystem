import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import React, { useEffect, useState } from "react";

import { MultiSelect } from "primereact/multiselect";

export const CategorySelect = (props) => {
	const selectedCategories=props.defaultValue;
	const [Category, setCategory] = useState();
	const Categories = [
		  "music" ,
		  "sports" ,
		  "award ceremony" ,
		  "trade and shopping" ,
		  "education" ,
		  "workshops" ,
		  "webinars" ,
		  "festivals and parties" ,
		  "fashion" ,
		  "others" 
	];
	useEffect(() => {
		props.onSelect(Category);
	});

	return (
		<div className="w-100">
				<MultiSelect
					value={Category}
					options={Categories}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					selectAll={false}
                    showSelectAll={false}
					placeholder="Category"
					display="chip"
					selectionLimit={3}
				/>
		</div>
	);
};
