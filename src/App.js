/** @format */
import React, { useEffect, useRef, useState } from "react"
import "./App.css"
import { gsap, TweenMax } from "gsap"
import { Power3 } from "gsap/gsap-core"

function App() {
	const [cursorX, setCursorX] = useState()
	const [cursorY, setCursorY] = useState()
	const [mouseEnter, setMouseEnter] = useState(false)
	const [loading, setLoading] = useState(false)
	let list = useRef(null)
	let cursor = useRef(null)
	let vid = useRef(null)

	useEffect(() => {
		window.addEventListener("mousemove", (event) => {
			setCursorX(event.pageX)
			setCursorY(event.pageY)
		})
	}, [])

	function handleMouseEnter() {
		setMouseEnter(true)
		TweenMax.to(cursor, 0.3, {
			width: 300,
			height: 300,
			ease: Power3.easeIn,
		})

		TweenMax.to(vid, 0.3, {
			visibility: "visible",
			opacity: 1,
		})
	}

	function handleMouseLeave() {
		setMouseEnter(false)
		TweenMax.to(cursor, 0.3, {
			width: 20,
			height: 20,
			ease: Power3.easeIn,
		})

		TweenMax.to(vid, 0.3, {
			visibility: "visible",
			opacity: 0,
		})
	}

	return (
		<div className='App'>
			<ul>
				<li ref={(el) => (list = el)} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
					<a href=''>Home</a>
				</li>
				<li>
					<a href=''>Awards</a>
				</li>
				<li>
					<a href=''>About</a>
				</li>
				<li>
					<a href=''>Contact</a>
				</li>
				<div ref={(el) => (cursor = el)} className='cursor' style={{ left: cursorX + "px", top: cursorY + "px" }}>
					<video
						preload='auto'
						onLoadStart={() => setLoading(true)}
						onLoadedData={() => setLoading(false)}
						muted
						ref={(el) => (vid = el)}
						autoPlay
						playsInline
						loop
						src='https://cdn.dribbble.com/users/207046/screenshots/14334987/media/f2daf66e84a15e98d61b87f4e6a716f3.mp4'></video>
				</div>
			</ul>
		</div>
	)
}

export default App
