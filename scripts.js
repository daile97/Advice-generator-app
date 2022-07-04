const GETQUOTE = () => {
try {
		fetch('https://api.adviceslip.com/advice').then
		(res => res.json()).then(quote => {
			document.querySelector(".advice__number").innerText = `ADVICE # ${quote.slip.id}`
			document.getElementById("advice__content_q").innerText = `${quote.slip.advice}`
})
	} catch(err) {
		console.log(err)
	}
}

document.addEventListener("DOMContentLoaded", (event) => {
	GETQUOTE();
})

document.querySelector(".dice__container").addEventListener("click", (event) => {
	GETQUOTE();
})

