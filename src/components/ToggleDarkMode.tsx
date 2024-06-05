"use client"

import { useState } from "react";

export default function ToggleDarkMode() {

	const [mode, setMode] = useState('light');

	function toggleMode() {

		if (mode === 'light') {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			setMode('dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			setMode('light');
		}
	}

	return <div className="flex items-center">
		<button onClick={toggleMode} >
			Dark / Light
		</button>
	</div>;
}
