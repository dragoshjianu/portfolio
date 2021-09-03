const toggleBtn = document.querySelector(".toggle-menu");
const menuList = document.querySelector(".menu-list");

toggleBtn.addEventListener("click", () => {
	menuList.classList.toggle("hidden");
});

if (window.innerWidth > 500) {
	menuList.classList.remove("hidden");
	toggleBtn.classList.add("hidden");
} else {
	menuList.classList.add("hidden");
	toggleBtn.classList.add("hidden");
}
