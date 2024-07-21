const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');
const clearButton = document.getElementById('clear-button');
const searchResults = document.getElementById('search-results');

// Fetch travel data from JSON file
async function fetchTravelData() {
  const response = await fetch('travel_api.json');
  const data = await response.json();
  return data;
}

// Function to display search results
function displaySearchResults(recommendations) {
  searchResults.innerHTML = ''; // Clear previous results before displaying new ones
  recommendations.forEach(recommendation => {
    const result = document.createElement('div');
    result.classList.add('recommendation');
    result.innerHTML = `
      <h3><span class="math-inline">\{recommendation\.destination\}</h3\>
<img src\="</span>{recommendation.image}" alt="<span class="math-inline">\{recommendation\.destination\}"\>
<p\></span>{recommendation.description}</p>
    `;
    searchResults.appendChild(result);
  });
}

// Function to handle search based on user input
async function handleSearch() {
  const searchTerm = searchBar.value.toLowerCase(); // Convert search
