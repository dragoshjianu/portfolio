console.log("loaded");
const body = document.querySelector("body");
const modals = document.querySelector(".modals");
const overlay = document.querySelector(".overlay");
const bookBtns = document.querySelectorAll("[data-action='book']");
const closeModalBtn = document.querySelector(".close-modal");
const payInputsAreas = document.querySelectorAll(".pledge-pay-input-area");
const payInputs = document.querySelectorAll(".pledge-pay-input");
const payBtns = document.querySelectorAll(".pledge-pay-button");
const finalBtn = document.querySelector(".final-btn");
const cards = document.querySelectorAll(".card");
const radioInputs = document.querySelectorAll(".select-product-input");

const initApp = () => {
	modals.style.display = "none";
	overlay.style.display = "none";
	modals.querySelector(".choose").style.display = "none";
	modals.querySelector(".thank-you").style.display = "none";
	if (body.classList.contains("blocked")) body.classList.remove("blocked");
	payInputs.forEach((input) => {
		input.value = "";
	});
	radioInputs.forEach((radioInput) => {
		radioInput.checked = false;
	});
	cards.forEach((card) => {
		if (card.classList.contains("bordered")) {
			card.classList.remove("bordered");
		}
	});

	payInputsAreas.forEach((area) => {
		if (area.classList.contains("error")) area.classList.remove("error");
		area.style.border = "none";
	});
};

const getSiblings = (e) => {
	let siblings = [];

	if (!e.parentNode) {
		return siblings;
	}

	let sibling = e.parentNode.firstChild;

	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== e) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling;
	}

	return siblings;
};

bookBtns.forEach((bookBtn) => {
	bookBtn.addEventListener("click", () => {
		overlay.style.display = "block";
		modals.style.display = "flex";
		modals.querySelector(".choose").style.display = "block";
		modals.querySelector(".thank-you").style.display = "none";
		body.classList.add("blocked");
	});
});

payBtns.forEach((payBtn) => {
	// console.log(payBtn.previousSibling.nodeType);
	payBtn.addEventListener("click", () => {
		const prevElement = payBtn.previousElementSibling;
		console.log(prevElement);
		const inputElement = prevElement.querySelector(".pledge-pay-input");
		console.log(inputElement.value);

		if (!inputElement.value) {
			prevElement.classList.add("error");
			prevElement.style.border = "2px solid red";
			return;
		}

		if (inputElement.nodeName === "INPUT" && inputElement.value) {
			console.log("passed stage 1");
			if (
				inputElement.name.includes("no-reward") ||
				(inputElement.name.includes("bamboo") && inputElement.value >= 25) ||
				(inputElement.name.includes("black") && inputElement.value >= 75) ||
				(inputElement.name.includes("mahogany ") && inputElement.value >= 200)
			) {
				console.log("passed stage 2");
				modals.querySelector(".choose").style.display = "none";
				modals.querySelector(".thank-you").style.display = "block";
			} else {
				console.log("error stage 2");
				prevElement.classList.add("error");
				prevElement.style.border = "2px solid red";
				return;
			}
		} else {
			console.log("error stage 1");
		}
	});
});

radioInputs.forEach((input) => {
	input.addEventListener("click", (e) => {
		const cardElement =
			e.currentTarget.parentElement.parentElement.parentElement;

		const siblings = getSiblings(cardElement);
		siblings.forEach((sibling) => {
			if (sibling.classList.contains("choose-product")) {
				if (sibling.classList.contains("bordered"))
					sibling.classList.remove("bordered");

				const siblingPledgeForm = sibling.querySelector(".pledge-input-area");
				if (siblingPledgeForm.style.display === "block") {
					siblingPledgeForm.style.display = "none";
				}
			}
		});

		inputPledge = cardElement.querySelector(".pledge-input-area");

		if (e.currentTarget.checked) {
			e.currentTarget.parentElement.parentElement.parentElement.classList.add(
				"bordered"
			);
			inputPledge.style.display = "block";
		}
	});
});

closeModalBtn.addEventListener("click", () => {
	initApp();
});
finalBtn.addEventListener("click", () => {
	initApp();
});

initApp();
