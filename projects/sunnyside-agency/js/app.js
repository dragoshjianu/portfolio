const toggleBtn = document.querySelector(".toggle-menu");
const menuList = document.querySelector(".menu-list");

toggleBtn.addEventListener("click", () => {
	menuList.classList.toggle("hidden");
});
