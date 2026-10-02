const plants = [
    { name: "Rose",      type: "Flower", color: "Red",    height: 1.2, sunlight: "Full Sun",  bloomSeason: "Summer" },
    { name: "Tulip",     type: "Flower", color: "Yellow", height: 0.5, sunlight: "Full Sun",  bloomSeason: "Spring" },
    { name: "Sunflower", type: "Flower", color: "Yellow", height: 3.0, sunlight: "Full Sun",  bloomSeason: "Summer" },
    { name: "Hosta",     type: "Foliage", color: "Green", height: 0.6, sunlight: "Shade",     bloomSeason: "Summer" },
    { name: "Hydrangea", type: "Shrub",  color: "Blue",   height: 1.5, sunlight: "Partial Shade", bloomSeason: "Summer" },
    { name: "Aster",     type: "Flower", color: "Purple", height: 0.9, sunlight: "Full Sun",  bloomSeason: "Fall" },
    { name: "Pansy",     type: "Flower", color: "Purple", height: 0.2, sunlight: "Partial Shade", bloomSeason: "Winter" }
];

// map(): turn each plant into a card
function display(plantsArray) {
    const plantList = document.getElementById("plantList");
    if (plantsArray.length === 0) {
        plantList.innerHTML = "<p>No plants match.</p>";
        return;
    }
    plantList.innerHTML = plantsArray.map((plant) => `
        <div class="plant">
            <h2>${plant.name}</h2>
            <p>Type: ${plant.type}</p>
            <p>Color: ${plant.color}</p>
            <p>Height: ${plant.height} meters</p>
            <p>Sunlight: ${plant.sunlight}</p>
            <p>Blooms: ${plant.bloomSeason}</p>
        </div>
    `).join("");
}

function showAllPlants() {
    display(plants);
}

// sort(): alphabetical (copy the array so the original isn't changed)
function sortAlphabetically() {
    const sorted = [...plants].sort((a, b) => a.name.localeCompare(b.name));
    display(sorted);
}

// filter(): by sunlight
function filterBySunlight() {
    const input = prompt("Enter sunlight needs (Full Sun, Partial Shade, Shade):");
    if (!input) return;
    const search = input.trim().toLowerCase();
    display(plants.filter((p) => p.sunlight.toLowerCase() === search));
}

// filter(): by bloom season
function filterByBloomSeason() {
    const input = prompt("Enter a bloom season (Spring, Summer, Fall, Winter):");
    if (!input) return;
    const search = input.trim().toLowerCase();
    display(plants.filter((p) => p.bloomSeason.toLowerCase() === search));
}

// filter(): by height (minimum height in meters)
function filterByHeight() {
    const input = prompt("Show plants at least this tall (in meters):");
    if (!input) return;
    const minHeight = parseFloat(input);
    if (isNaN(minHeight)) {
        alert("Please enter a number.");
        return;
    }
    display(plants.filter((p) => p.height >= minHeight));
}

// find(): look up one plant by name
function findPlant() {
    const input = prompt("Enter the name of the plant to find:");
    if (!input) return;
    const found = plants.find((p) => p.name.toLowerCase() === input.trim().toLowerCase());
    if (found) {
        display([found]);
    } else {
        alert("Plant not found.");
    }
}

// reduce(): total and average height
function plantStats() {
    const totalHeight = plants.reduce((total, p) => total + p.height, 0);
    const averageHeight = (totalHeight / plants.length).toFixed(2);
    document.getElementById("stats").innerHTML = `
        <h2>Plant Statistics</h2>
        <p>Total Plants: ${plants.length}</p>
        <p>Average Height: ${averageHeight} meters</p>
    `;
}

showAllPlants();