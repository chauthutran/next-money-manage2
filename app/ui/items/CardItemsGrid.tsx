export default function CardItemsGrid({ dataList }: { dataList: any[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
			{
				dataList.map((item, i) => (
					<div className="border-2 p-2 w-fit rounded-lg bg-blue-200 shadow-lg text-xs" key={i} >
						<div>{item.date.substr(0, 16).replace('T', ' ')}</div>
						<div className="font-semibold">{'$' + item.amount}</div>
						<div>{item.description}</div>
					</div>
				))
			}
		</div>
	);
};