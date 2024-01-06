import './theme-select.css';
import { useEffect, useState } from 'react';

export default function ThemeSelect() {

	if (typeof window !== 'undefined') {
		const storedTheme = localStorage.getItem('theme');

		const [isDark, setScheme] = useState(
			!((document.body.parentNode as HTMLElement).dataset.theme === 'light')
		);

		useEffect(() => {
			setScheme(storedTheme == 'dark')
		}, [storedTheme])

		useEffect(() => {
			if (isDark) {
				(document.body.parentNode as HTMLElement).dataset.theme = 'dark';
			} else {
				(document.body.parentNode as HTMLElement).dataset.theme = 'light';
			}
		}, [isDark])

		return <button
			className={`sz-theme-button ${!isDark ? 'sz-theme-button-dark' : 'sz-theme-button-light'}`}
			onClick={() => {
				if (isDark) {
					setScheme(false);
					localStorage.setItem('theme', 'light')
				} else {
					setScheme(true);
					localStorage.setItem('theme', 'dark')
				}
			}}
		/>
	} else {
		return <div></div>;
	}
}
