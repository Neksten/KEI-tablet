const generalInfo = document.querySelector('#page-general-info')

function checkedActivity() {
	let timer = setTimeout(() => {
		window.location.href = '/main-menu.html';
	}, 30000)
	generalInfo.addEventListener('click', () => {
		clearTimeout(timer)
		checkedActivity()
	})
}

checkedActivity()