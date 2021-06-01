const renderHomeTab = () => {
	const rootDiv = document.querySelector("#root");
	const homeContent = document.createElement("div");

	homeContent.innerHTML = `
		<div class='showcase active'>
		    <div class="showcase-content ">
            	<p class='showcase-present'>Enjoy Fresh Mexican Eats</p>
        	</div>
		</div>
    `;
	rootDiv.appendChild(homeContent);
};

export { renderHomeTab };
