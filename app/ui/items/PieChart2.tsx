import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type Expense = {
	value: number;
	category: string;
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28EF5'];

export default function PieChart2() {

	const expenses: Expense[] = [
		{ value: 500, category: 'Rent' },
		{ value: 200, category: 'Groceries' },
		{ value: 150, category: 'Utilities' },
		{ value: 100, category: 'Entertainment' },
		{ value: 50, category: 'Transport' }
	];

	return (
		<div>
			<ResponsiveContainer width="100%" height={400}>
				<PieChart>
					<Pie
						data={expenses}
						dataKey="value"
						nameKey="category"
						cx="50%"
						cy="50%"
						outerRadius={150}
						fill="#8884d8"
						label
					>
						{expenses.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
						))}
					</Pie>
					<Tooltip />
					<Legend />
				</PieChart>
			</ResponsiveContainer>

			<div>[*NOTE]: This chart is not based on actual data due to the data not currently not being marked with categories. </div>
		</div>
	);
};