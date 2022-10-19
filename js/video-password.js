const PASSWORD = '123123'

const passwordBtn = document.querySelector('#video-password__btn')
const passwordInput = document.querySelector('#video-password__input')

passwordBtn.addEventListener('click', () => {
	if (passwordInput.value === PASSWORD) {
		window.location.href = '/video-url.html'
	}
})