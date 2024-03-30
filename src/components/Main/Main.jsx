import React from 'react'
import Notif from './Notif'
import data from '../../data/data.json'
import { nanoid } from 'nanoid'

export default function Main() {
	const [notif, setNotif] = React.useState(data)
	const [unread, setUnread] = React.useState(0)

	// Add id property
	React.useEffect(() => {
		setNotif(prevNotif =>
			prevNotif.map(noti => {
				return { ...noti, id: nanoid() }
			})
		)
	}, [])

	// Unread count
	React.useEffect(() => {
		const unreadArr = notif.filter(noti => !noti.read)
		setUnread(unreadArr.length)
	}, notif)

	// Mark all as read
	const handleBtnClick = () => {
		setNotif(
			notif.map(noti => {
				return { ...noti, read: true }
			})
		)
	}

	// Mark specific item as read
	const handleNotiClick = id => {
		setNotif(
			notif.map(noti => {
				return noti.id === id ? { ...noti, read: true } : noti
			})
		)
	}

	// Pass props to Notif component
	const notifElem = notif.map(noti => (
		<Notif
			key={nanoid()}
			id={noti.id}
			avatar={noti.avatar}
			username={noti.username}
			type={noti.desc.type}
			reference={noti.desc.ref}
			time={noti.time}
			message={noti.message}
			read={noti.read}
			onClick={handleNotiClick}
		/>
	))

	return (
		<main>
			<header className='head'>
				<h2 className='title bold'>
					Notifications <span className='unread'>{unread}</span>
					<span className='sr-only'>unread</span>
				</h2>

				<button
					type='button'
					className='btn'
					onClick={handleBtnClick}
				>
					Mark all as read
				</button>
			</header>

			<ul className='list'>{notifElem}</ul>
		</main>
	)
}
