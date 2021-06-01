const renderContactTab = () => {
	const rootDiv = document.querySelector("#root");
	const contactDiv = document.createElement("div");
	contactDiv.classList.add('contacts',"hide");
	contactDiv.innerHTML = `
        <div class="content-showcase">
			<div class="content-showcase-text">
				<h1>Contact Us</h1>
				<p>
					Unfortunately we are under construction and do not have an address or
					phone number.
				</p>
				<p>Don't fret, we will be in your neighborhood shortly...</p>
			</div>
		</div>
    `;

	rootDiv.appendChild(contactDiv);
};

export { renderContactTab };
