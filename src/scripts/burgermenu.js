export default (function burgermenu() {
<<<<<<< HEAD
    const button = document.querySelector(".menuButton")
    const menu = document.querySelector(".primaryMenu")

    button.addEventListener("click", clickHandler)

    function clickHandler() {
        menu.style.right = menu.style.right == "-19em" ? "0" : "-19em"
    }
})()
=======
	const button = document.querySelector(".menuButton")
	const menu = document.querySelector(".primaryMenu")

	button.addEventListener("click", clickHandler)

	function clickHandler() {
		menu.style.right = menu.style.right == "-19em" ? "0" : "-19em"
	}
})()
>>>>>>> 847bd4a74e2cdc4b61a803037cd89424916d2d6c
