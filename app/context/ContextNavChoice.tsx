'use client';

import { createContext, useState, useContext } from 'react';

type ContextNavChoice = {
	navChoice: string,
	setNavChoice: React.Dispatch<React.SetStateAction<string>>
};

const ContextNavChoice = createContext<ContextNavChoice | null>(null);

export function ContextWrapperNavChoice( { children } : { children: React.ReactNode; } ) 
{
	const [ navChoice, setNavChoice ] = useState( 'Home' );

	return (
		<ContextNavChoice.Provider value={ {navChoice, setNavChoice } }>
			{ children }
		</ContextNavChoice.Provider>
	);
}

// Custom Hook - to be called when used within component
export function useContextNavChoice() {
	const context = useContext(ContextNavChoice);
	if ( !context) throw new Error( "useContextNavChoice must be used within a -Provider");

	return context;
}