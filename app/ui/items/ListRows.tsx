import ListRowItem from "./ListRowItem"

export default function ListRows({ dataList }: { dataList: any[] }) {
	return (
		<div className="flex-1 py-0 block bg-white mt-4">
			<div className=" overflow-y-auto">
				<div className="grid grid-cols-5">
					<div className="px-4 py-2 text-left font-medium border-b border-gray-300 bg-blue-200">Date</div>
					<div className="px-4 py-2 text-left font-medium border-b border-gray-300 col-span-2 bg-blue-200">Description</div>
					<div className="px-4 py-2 text-left font-medium border-b border-gray-300 bg-blue-200">Amount</div>
					<div className="px-4 py-2 font-medium border-b border-gray-300 col-start-5 col-end-6 text-right bg-blue-200">#</div>

					{dataList.map((item: any, i: number) => (
						<ListRowItem item={item} key={i}></ListRowItem>
					))}
				</div>
			</div>
		</div>
	);
};