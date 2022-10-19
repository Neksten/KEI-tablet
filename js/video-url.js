const LINK = 'https://www.youtube.com/embed/'
const pageUrl = document.querySelector('#page-url')
const pageVideo = document.querySelector('#page-video')
const videoBtn = document.querySelector('#video-url-password__btn')
const urlInput = document.querySelector('#video-url-password__input')
const video = document.querySelector('#video')

videoBtn.addEventListener('click', () => {
	let url = `${LINK + urlInput.value + '?autoplay=1'}`
	pageUrl.classList.add('_none')
	pageVideo.classList.remove('_none')
	video.setAttribute('src', url)
})
let timer = null
pageVideo.addEventListener('mousedown', () => {
	timer = setTimeout(() => {
		window.location.href = '/main-menu.html';
	}, 5000)
})
pageVideo.addEventListener('mouseup', () => {
	clearTimeout(timer)
	console.log('up')
})
