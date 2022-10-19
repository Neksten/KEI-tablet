const teachers = document.querySelector('#page-teachers')

function checkedActivity() {
	let timer = setTimeout(() => {
		window.location.href = '/main-menu.html';
	}, 30000)
	teachers.addEventListener('click', () => {
		clearTimeout(timer)
		checkedActivity()
	})
}

checkedActivity()