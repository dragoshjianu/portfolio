const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");
const display = document.querySelector(".calculator__display");

keys.addEventListener("click", (e) => {
	if (e.target.matches("button")) {
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;
		const displayedNum = display.textContent;

		if (!action) {
			console.log("numeric key");
			if (displayedNum === "0") {
				display.textContent = keyContent;
			} else {
				display.textContent += keyContent;
			}
		}
		if (
			action === "add" ||
			action === "subtract" ||
			action === "multiply" ||
			action === "divide"
		) {
			console.log("operator key");
		}

		if (action === "decimal") {
			console.log("decimal key");
			display.textContent += ".";
		}

		if (action === "reset") {
			console.log("reset key");
			display.textContent = "0";
		}
		if (action === "delete") {
			console.log("delete key");
			console.log(toString(display.textContent));
		}
		if (action === "calculate") {
			console.log("equal key");
		}
	}
});
