import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";

import React, { useEffect, useState } from "react";

import { MultiSelect } from "primereact/multiselect";

export const CategorySelect = (props) => {
	const [Category, setCategory] = useState([]);
	// const [categoryErr, setCategoryErr] = useState("");
	const Categories = [
		  "music" ,
		  "sports" ,
		  "award ceremony" ,
		  "education" ,
		  "workshops" ,
		  "webinars" ,
		  "dance",
		  "singing"
	];
	useEffect(() => {
		props.onSelect(Category);
	});
	const handleBlurCategory = () => {
		// let categoryErr = "";
		// if (Category.length===0) categoryErr = "category Can't be empty";
		// setCategoryErr(categoryErr );
	};
	
	return (
		<div className="w-100">
			
				<MultiSelect
					value={Category}
					options={Categories}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					onBlur={()=>{handleBlurCategory()}}
                    selectAll={false}
                    showSelectAll={false}
					placeholder="Category"
					display="chip"
					selectionLimit={3}
				/>
				{/* <div className="text-danger">{categoryErr}</div> */}
		</div>
	);
};
