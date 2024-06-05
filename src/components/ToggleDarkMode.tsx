"use client"
import { useState } from "react";

const body = document.querySelector('body');

export default function ToggleDarkMode() {

	const [mode, setMode] = useState('light');

	function toggleMode() {

		if (mode === 'light') {
			body?.classList.remove('light');
			body?.classList.add('dark');
			setMode('dark');
		} else {
			body?.classList.remove('dark');
			body?.classList.add('light');
			setMode('light');
		}
	}

	return <div className="flex items-center">
		<button onClick={toggleMode} >
			Dark / Light
		</button>
	</div>;
}
