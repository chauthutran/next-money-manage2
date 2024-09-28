import CardItem from "./CardItem";

export default function CardItemsGrid({ dataList }: { dataList: any[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 ">
			{
				dataList.map((item, i) => (
					<CardItem item={item} key={i}></CardItem>
				))
			}
		</div>
	);
};