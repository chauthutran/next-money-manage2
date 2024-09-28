import * as Utils from "@/util/utils";

export default function CardItem({ item }: { item: any }) {
	// className="border-2 p-2 m-1 rounded-lg bg-blue-200 shadow-lg text-xs" 

	// pass down as color limit?  Or have above layer calculate & send the color?
	//  Or pass down the range & color def?  { blue: 900, red: 2000 }

	const condClass = ( item.amount >= 1000 ) ? 'bg-red-200': 'bg-blue-200';

	return (
		<div className={ 'p-2 m-1 rounded-lg shadow-lg text-xs ' + condClass } >
			<div>{Utils.formatDisplayDate(item.date)}</div>
			<div className="font-semibold">{'$' + item.amount}</div>
			<div>{item.description}</div>
		</div>
	);
};