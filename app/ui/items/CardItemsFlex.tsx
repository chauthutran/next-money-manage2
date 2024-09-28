import CardItem from "./CardItem";

export default function CardItemsFlex({ dataList }: { dataList: any[] }) {
	return (
		<div className="flex flex-wrap">
			{
				dataList.map((item, i) => (
					<CardItem item={item} key={i}></CardItem>
				))
			}
		</div>
	);
};