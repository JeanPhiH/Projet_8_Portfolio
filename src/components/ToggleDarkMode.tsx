"use client"

import { useState } from "react";
import Image from "next/image";

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
		<button onClick={toggleMode} className="p-2">
			<Image src="/icons/theme-light-dark.svg" alt="Dark / Light mode" title="Dark / Light" width={40} height={40} className="dark:invert"/>
		</button>
	</div>;
}
