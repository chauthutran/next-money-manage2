import { useEffect, useState } from "react";
import CardItemsGrid from "../items/CardItemsGrid";
import CardItemsFlex from "../items/CardItemsFlex";
import ListRows from "../items/ListRows";

export default function DataDisplay( { dataList }: { dataList: any[] } ) {
	
	const [displayType, setDisplayType] = useState('CardItemsFlex'); // Loading state

	const displayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDisplayType(event.target.value);
	};

	return (
		<div className="ml-2 mt-1 text-sm">
			<div className="w-full flex justify-end" >
				<div className="w-fit" >
					<label className="text-xs" htmlFor="dropdown">Display:</label>
					<select id="dropdown" className="ml-1 text-xs p-1" value={displayType} onChange={displayChange}>
						<option value="CardItemsFlex">CardItemsFlex</option>
						<option value="CardItemsGrid">CardItemsGrid</option>
						<option value="ListRows">ListRows</option>
						<option value="Text">Text</option>
						<option value="None">None</option>
					</select>
				</div>
			</div>
			<div className="mt-2">
				{ displayType === 'Text' && JSON.stringify(dataList) }
				{ displayType === 'CardItemsGrid' && <CardItemsGrid dataList={dataList} /> }
				{ displayType === 'CardItemsFlex' && <CardItemsFlex dataList={dataList} /> }
				{ displayType === 'ListRows' && <ListRows dataList={dataList} /> }
				{ displayType === 'None' && <div>No Display</div> }
			</div>
		</div>
	);
};