const renderNavBar = () => {
	const rootDiv = document.querySelector("#root");
	const navBar = document.createElement("nav");
	navBar.classList.add("main-nav");

	navBar.innerHTML = `
        <nav class="main-nav">
			<div class="main-nav__container">
				<ul class="main-nav__links">
					<li class="main-nav__link home-link selected">Home</li>
					<li class="main-nav__link menu-link">Menu</li>
					<li class="main-nav__link contact-link">Contact</li>
				</ul>
			</div>
		</nav>
    `;

	rootDiv.appendChild(navBar);
};

export { renderNavBar };
