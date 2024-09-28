import { useEffect, useState } from "react";
import SpinningIcon from "./common/SpinningIcon";
import CardItemsGrid from "./items/CardItemsGrid";
import CardItemsFlex from "./items/CardItemsFlex";
import ListRows from "./items/ListRows";

export default function AppWrapper() {
	
	const [loading, setLoading] = useState<boolean>(true); // Loading state
	const [displayType, setDisplayType] = useState('CardItemsFlex'); // Loading state
	const [dataList, setDataList] = useState([]); // Loading data
	
	useEffect( () => {
		onRequestClick();
	}, []); // Only if 'symbol' is not same as previous one, run 'useEffect'


	const onRequestClick = async () => {

		const response: any = await fetch('/api/expense?userId=66c87d3411b974f022f84bec');
		const responseJson: any = await response.json();

		setDataList(responseJson);
		setLoading(false);
	};

	const displayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDisplayType(event.target.value);
	};

	// 1. Download the data on load <-- on 'useEffect'.. unless it is refreshed by button - state?
	// 2. loading progress tag
	// 3. Display items --> in diff container <-- switch in here..  'state' value of display selection..

	return (
		<div className="bg-gray-100 p-2 text-black">
			{ ( loading ) ?
				<div className="ml-2 mt-1 w-fit">
					<SpinningIcon className="text-gray-400" />
				</div>
				:<div className="ml-2 mt-1 text-sm">
					<div className="w-full flex justify-end" >
						<div className="w-fit" >
							<label className="text-xs" htmlFor="dropdown">Display:</label>
							<select id="dropdown" className="ml-1 text-xs p-1" value={displayType} onChange={displayChange}>
								<option value="CardItemsFlex">CardItemsFlex</option>
								<option value="CardItemsGrid">CardItemsGrid</option>
								<option value="ListRows">ListRows</option>
								<option value="Text">Text</option>
							</select>
						</div>
					</div>
					<div className="mt-2">
						{ displayType === 'Text' && JSON.stringify(dataList) }
						{ displayType === 'CardItemsGrid' && <CardItemsGrid dataList={dataList} /> }
						{ displayType === 'CardItemsFlex' && <CardItemsFlex dataList={dataList} /> }
						{ displayType === 'ListRows' && <ListRows dataList={dataList} /> }
					</div>
				</div>
			}
		</div>
	);
};