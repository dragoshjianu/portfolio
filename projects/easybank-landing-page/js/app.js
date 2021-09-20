const toggleBtn = document.querySelector(".toggle-menu");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".menu-list");

toggleBtn.addEventListener("click", () => {
	toggleBtn.classList.toggle("toggled");
	menu.classList.toggle("opened");
	overlay.classList.toggle("opened");
});
