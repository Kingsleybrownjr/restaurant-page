const renderMenuTab = () => {
	const rootDiv = document.querySelector("#root");
	const menu = document.createElement("div");
	menu.classList.add("menu-div", "hide");
	menu.innerHTML = `
		<div class='menu-showcase'>
			<div class="menu-showcase-content">
			<main class="menu-container">
			<div class="menu-header">
				<h1>Our Food Menu</h1>
			</div>

			<div class="menu-food">
				<div class="menu-food-cards">
					<h3>Main Course</h3>
					<div class="menu-food-card">
						<div class="menu-food-card-content">
							<p class="title">Queso Enchiladas</p>
							<p class="description">
								Cheese Enchilada a la carte topped with your choice of sauce.
								Add Shredded Chicken, Ground Beef, Chicken Fajita or Steak
								Fajita for an additional charge.
							</p>
						</div>
						<p class="price">$20</p>
					</div>
				</div>
				<div class="menu-food-cards">
					<h3>Starters</h3>
					<div class="menu-food-card">
						<div class="menu-food-card-content">
							<p class="title">Kickin' Grande Nachos</p>
							<p class="description">
								Tortilla chips topped with your choice of ground beef, diced
								steak fajitas or diced chicken fajitas, refried beans, queso,
								guacamole, pico de gallo, slice fresh jalapenos & a drizzle of
								sour cream.
							</p>
						</div>
						<p class="price">$15</p>
					</div>
				</div>
				<div class="menu-food-cards">
					<h3>Kids Meal</h3>
					<div class="menu-food-card">
						<div class="menu-food-card-content">
							<p class="title">Kids Cheese Quesadilla Meal</p>
							<p class="description">
								Shredded cheese in between two 6" flour tortillas. Served with
								your choice of rice & beans OR chips & queso, apple juice OR
								kids’ drink.
							</p>
						</div>
						<p class="price">$12</p>
					</div>
				</div>
				<div class="menu-food-cards">
					<h3>Drinks</h3>
					<div class="menu-food-card">
						<div class="menu-food-card-content">
							<p class="title">Tequila Margaritas</p>
							<p class="description">Lime, Strawberry, Mango, and Seasonal</p>
						</div>
						<p class="price">$8</p>
					</div>
				</div>
			</div>
		</main>
    `;

	rootDiv.appendChild(menu);
};
export { renderMenuTab };
