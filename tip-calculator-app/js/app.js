const amountInput = document.querySelector("#amount-input");
const noPeople = document.querySelector("#card-people");
const radioBtns = document.querySelectorAll("input[type=radio]");
const customTip = document.querySelector(".card__tip--input");

const tipPerPerson = document.querySelector(
	".card__tip-amount--sum .sum-value",
);
const amountPerPerson = document.querySelector(
	".card__total-amount--sum .sum-value",
);

const reset = document.querySelector(".btn");

const initialise = () => {
	amountInput.value = "";
	noPeople.value = "";
	tipPerPerson.textContent = `$0.00`;
	amountPerPerson.textContent = `$0.00`;
	customTip.value = "";
	radioBtns.forEach((btn) => {
		btn.checked = false;
	});
};

const getTipPercent = () => {
	let chosenTip = 0;
	if (!customTip.value) {
		radioBtns.forEach((btn) => {
			if (!btn.checked) chosenTip = chosenTip;
			if (btn.checked) {
				chosenTip = btn.value;
			}
		});
	}
	if (customTip.value) {
		radioBtns.forEach((btn) => {
			btn.checked = false;
		});
		chosenTip = customTip.value;
	}

	return parseInt(chosenTip);
};

const totalTip = (percent, bill) => {
	return (totalTipAmount = parseInt(bill) * (percent / 100));
};

const totalAmount = (bill, fullTip) => {
	return (totAmount = parseInt(bill) + fullTip);
};

const tipAmountPerPerson = () => {
	return (
		totalTip(getTipPercent(), amountInput.value) / parseInt(noPeople.value)
	);
};

const totalPerPerson = () => {
	return (
		totalAmount(
			amountInput.value,
			totalTip(getTipPercent(), amountInput.value),
		) / parseInt(noPeople.value)
	);
};

const changeValues = () => {
	!isNaN(tipAmountPerPerson())
		? (tipPerPerson.textContent = `$${tipAmountPerPerson().toFixed(2)}`)
		: (tipPerPerson.textContent = `$0.00`);
	!isNaN(tipAmountPerPerson())
		? (amountPerPerson.textContent = `$${totalPerPerson().toFixed(2)}`)
		: (amountPerPerson.textContent = `$0.00`);
};

amountInput.addEventListener("blur", changeValues);
customTip.addEventListener("blur", changeValues);
noPeople.addEventListener("blur", (e) => {
	const alert = e.target.parentNode.querySelector(".alert");
	if (!noPeople.value) {
		noPeople.parentElement.classList.add("invalid");
		alert.classList.remove("hidden");
	}
	if (noPeople.value) {
		noPeople.parentElement.classList.remove("invalid");
		alert.classList.add("hidden");
		changeValues();
	}
});
radioBtns.forEach((btn) => {
	btn.addEventListener("change", changeValues);
});

document.addEventListener("DOMContentLoaded", initialise);
reset.addEventListener("click", initialise);
