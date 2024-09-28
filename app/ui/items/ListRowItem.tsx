import * as Utils from "@/util/utils";

export default function ListRowItem({ item }: { item: any }) {

	const condClass = ( item.amount >= 1000 ) ? 'bg-red-200': '';

	return (
		<>
			<div className={ "px-4 py-2 border-b border-gray-300 " + condClass}>{Utils.formatDisplayDate(item.date)}</div>
			<div className={ "px-4 py-2 flex space-x-3 border-b border-gray-300 col-span-2 " + condClass}>{item.description}</div>
			<div className={ "px-4 py-2 font-bold border-b border-gray-300 " + condClass}>${item.amount}</div>
			<div className={ "px-4 py-2 border-b border-gray-300 text-right " + condClass}></div>
		</>
	);
};