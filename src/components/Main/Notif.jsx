import React from 'react'
import types from '../../data/types.json'
import posts from '../../data/posts.json'
import groups from '../../data/groups.json'
import pictures from '../../data/pictures.json'
import { nanoid } from 'nanoid'

export default function Notif(props) {
	const [userHover, setUserHover] = React.useState(false)

	const handleEnter = () => {
		setUserHover(true)
	}

	const handleLeave = () => {
		setUserHover(false)
	}

	return (
		<li
			className='item'
			style={{ backgroundColor: !props.read && 'hsl(var(--clr-neutral-2))' }}
		>
			<img
				className='avatar'
				src={props.avatar}
				alt={`${props.username}'s profile picture`}
				width={90}
				height={90}
				style={{ scale: userHover ? '1.1' : '1' }}
			/>
			<div className='info'>
				<p className='description'>
					<a
						href='#'
						className='name bold'
						onClick={() => props.onClick(props.id)}
						onMouseEnter={handleEnter}
						onMouseLeave={handleLeave}
						onFocus={handleEnter}
						onBlur={handleLeave}
					>
						{props.username}
					</a>{' '}
					{types.map(
						type =>
							type.id === props.type && (
								<span
									key={nanoid()}
									className='type'
								>
									{type.type}
								</span>
							)
					)}{' '}
					{posts.map(
						post =>
							post.id === props.reference && (
								<a
									href='#'
									key={nanoid()}
									className='post bold'
									onClick={() => props.onClick(props.id)}
								>
									{post.title}
								</a>
							)
					)}{' '}
					{groups.map(
						group =>
							group.id === props.reference && (
								<a
									href='#'
									key={nanoid()}
									className='group bold'
									onClick={() => props.onClick(props.id)}
								>
									{group.name}
								</a>
							)
					)}{' '}
					{!props.read && <span className='circle'></span>}
				</p>
				<p className='time'>{props.time}</p>
				{props.message && (
					<a
						href='#'
						className='message'
						onClick={() => props.onClick(props.id)}
					>
						{props.message}
					</a>
				)}
			</div>
			{pictures.map(
				pic =>
					pic.id === props.reference && (
						<a
							key={nanoid()}
							href='#'
							className='picture'
							onClick={() => props.onClick(props.id)}
						>
							<img
								src={pic.url}
								alt={pic.alt}
								width={90}
								height={90}
							/>
						</a>
					)
			)}
		</li>
	)
}
