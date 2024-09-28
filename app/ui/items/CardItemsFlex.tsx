export default function CardItemsFlex({ dataList }: { dataList: any[] }) {
	return (
		<div className="flex flex-wrap">
			{
				dataList.map((item, i) => (
					<div className="border-2 p-2 m-1 rounded-lg bg-blue-200 shadow-lg text-xs" key={i} >
						<div>{item.date.substr(0, 16).replace('T', ' ')}</div>
						<div className="font-semibold">{'$' + item.amount}</div>
						<div>{item.description}</div>
					</div>
				))
			}
		</div>
	);
};