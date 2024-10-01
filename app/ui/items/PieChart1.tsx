import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

type Expense = { value: number, category: string };

export default function PieChart1() {

	const expenses: Expense[] = [
		{ value: 500, category: 'Rent' },
		{ value: 200, category: 'Groceries' },
		{ value: 150, category: 'Utilities' },
		{ value: 100, category: 'Entertainment' },
		{ value: 50, category: 'Transport' }
	];


	const data = {
		labels: expenses.map(expense => expense.category), // categories as labels
		datasets: [
			{
				label: 'Expenses by Category',
				data: expenses.map(expense => expense.value), // values as data points
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // colors for pie slices
				hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
			},
		],
	};


	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'Expenses Distribution',
			},
		},
	};

	return (
		<>
			<Pie data={data} options={options} />
		</>
	);
};