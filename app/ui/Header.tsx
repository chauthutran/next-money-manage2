export default function Header() {

	return (
		<header className="p-4">
			<div className="flex items-center justify-between">
				<div className="flex flex-row">
					<div className="hidden md:block mx-3 text-xl uppercase tracking-wider" style={{ letterSpacing: "8px" }}>Personal Expense Management</div>
					<div className="md:hidden uppercase tracking-wider" style={{ letterSpacing: "3px" }}>Personal Expense Management</div>
					<div className="text-secondary flex flex-col text-xs uppercase"></div>
				</div>
				<div className="flex-grow"></div>
				<div className="flex flex-row items-center space-x-2 rounded-md border border-slate-400 px-4 py-1 text-sm">
					<div className="bg-living-coral h-2 w-2 rounded-full"></div>
					<button>Logout</button>
				</div>
			</div>
		</header>
	);
};