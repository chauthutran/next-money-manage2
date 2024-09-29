import { useContextNavChoice } from "@/context/ContextNavChoice";
import { useState } from "react";
import { FaHome, FaChartPie } from "react-icons/fa";
import { TbLayoutNavbarFilled } from "react-icons/tb";

export default function NavSide() {

	const { navChoice, setNavChoice } = useContextNavChoice();

	// const [ navChoice, setNavChoice ] = useState( 'Home' );

	const getCssChoiceStr = ( navStr: string ) => {
		return ( navStr === navChoice ) ? 'text-blue-700': '';
	};

	return (
		<div className="w-8 bg-gray-900 text-white p-2 flex flex-col gap-3">
			<div className={ "cursor-pointer " + getCssChoiceStr( 'Home' ) } title="Home" onClick={() => setNavChoice('Home')}><FaHome /></div>
			<div className={ "cursor-pointer " + getCssChoiceStr( 'PieChart' ) } title="Pie Chart" onClick={() => setNavChoice('PieChart')}><FaChartPie /></div>
			<div className="mt-2 cursor-pointer" title="Switch To Top Nav"><TbLayoutNavbarFilled /></div>
	   </div>
	);
};