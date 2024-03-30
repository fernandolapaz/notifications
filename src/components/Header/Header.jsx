import React from 'react'
import Theme from './Theme'

export default function Header() {
	const [dark, setDark] = React.useState(false)

	const root = document.querySelector(':root')

	React.useEffect(() => {
		const mode = localStorage.getItem('mode')
		if (mode && mode === 'dark') {
			root.classList.add('dark')
			setDark(true)
		}
	}, [])

	const handleToggle = () => {
		setDark(prevDark => !prevDark)
		root.classList.toggle('dark')
		if (root.classList.contains('dark')) {
			localStorage.setItem('mode', 'dark')
		} else {
			localStorage.setItem('mode', 'light')
		}
	}

	return (
		<header>
			<h1 className='sr-only'>Frontend Mentor | Notifications page</h1>
			<Theme
				dark={dark}
				onClick={handleToggle}
			/>
		</header>
	)
}
