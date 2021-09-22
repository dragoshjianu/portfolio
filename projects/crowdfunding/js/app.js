console.log("loaded");
const radioInputs = document.querySelectorAll(".select-product-input");

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

radioInputs.forEach((input) => {
	input.addEventListener("click", (e) => {
		const cardElement =
			e.currentTarget.parentElement.parentElement.parentElement;

		const siblings = getSiblings(cardElement);
		console.log(siblings);

		inputPledge = cardElement.querySelector(".pledge-input-area");

		if (e.currentTarget.checked) {
			e.currentTarget.parentElement.parentElement.parentElement.classList.add(
				"bordered"
			);
			inputPledge.style.display = "block";
		}
	});
});
