import { useEffect, useState } from "react";
import PieChart1 from "@/ui/items/PieChart1";
import PieChart2 from "@/ui/items/PieChart2";

export default function PeiChartDisplay({ dataList }: { dataList: any[] }) {

	const [displayType, setDisplayType] = useState('Chart1'); // Loading state

	const displayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDisplayType(event.target.value);
	};

	return (
		<div className="ml-2 mt-1 text-sm">
			<div className="w-full flex justify-end" >
				<div className="w-fit" >
					<label className="text-xs" htmlFor="dropdown">Display:</label>
					<select id="dropdown" className="ml-1 text-xs p-1" value={displayType} onChange={displayChange}>
						<option value="Chart1">Chart1</option>
						<option value="Chart2">Chart2</option>
					</select>
				</div>
			</div>
			<div className="mt-2">
				{displayType === 'Chart1' && <PieChart1></PieChart1>}
				{displayType === 'Chart2' && <PieChart2></PieChart2>}
			</div>
		</div>
	);
};