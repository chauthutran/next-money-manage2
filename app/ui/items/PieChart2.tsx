import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

type Expense = { value: number, category: string };

export default function PieChart2({ chartData, categories }: { chartData: any, categories: any[] }) {


	const data = {
		labels: chartData.map((data: any) => data.categoryName), // categories as labels
		datasets: [
			{
				label: 'Expenses by Category',
				data: chartData.map((data: any) => data.total), // values as data points
				backgroundColor: chartData.map((data: any) => data.color), // colors for pie slices
				// hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
			},
		],
	};

	const options = {
		responsive: true,
	}

	return (
		<>
			<div className='flex flex-col items-center'>
				<div className="w-8/12">
					<Pie data={data} options={options} />
				</div>
			</div>
		</>
	);
};