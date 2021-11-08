import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import React, { useEffect, useState } from "react";

import { MultiSelect } from "primereact/multiselect";

export const CategorySelect = (props) => {
	const [Category, setCategory] = useState([]);
	const Categories = [
		{ name: "music" },
		{ name: "sports" },
		{ name: "award ceremony" },
		{ name: "trade and shopping" },
		{ name: "education" },
		{ name: "workshops" },
		{ name: "webinars" },
		{ name: "festivals and parties" },
		{ name: "fashion" },
		{ name: "others" },
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
                    
					optionLabel="name"
					placeholder="Category"
					display="chip"
					selectionLimit={3}
				/>
		</div>
	);
};
