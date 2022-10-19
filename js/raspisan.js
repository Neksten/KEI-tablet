function checkedActivityIframe() {
	window.focus()
	
	let timer = setTimeout(() => {
		window.location.href = '/main-menu.html';
	}, 30000)
	window.addEventListener("blur", () => {
		setTimeout(() => {
			if (document.activeElement.tagName === "IFRAME") {
				clearTimeout(timer)
				checkedActivityIframe()
			}
		});
	}, {once: true});
}

checkedActivityIframe();
