// Create displayEntries function
function displayEntries() {

  // Get existing entries from localStorage
  const entriesArray = JSON.parse(localStorage.getItem("entriesArray"));

  // Select the container for the entries
  const div = document.querySelector('.entry-list');

  // Select the existing entry card
  const card = document.querySelector('.entry');

  // Check if there are any entries in localStorage
  if (!entriesArray || entriesArray.length === 0) {
    alert("No records found. Please fill in the title and reflection first!");
    return;
  }

  // Remove the existing entry card from the DOM
  card.remove();

  // Display saved entries in the cards
  entriesArray.forEach((item) => {

    // Create h2 and p elements
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    // Add the title and reflection to the elements
    h2.textContent = item.title;
    p.textContent = item.reflection;

    // Create a new article element
    const article = document.createElement('article');
    article.classList.add('entry');

    // Add h2 and p elements to the article
    article.appendChild(h2);
    article.appendChild(p);

    // Add the article to the entry list
    div.appendChild(article);
  });
}

// Display saved entries
displayEntries();


/* Burger */
const menuIcon = document.querySelector(".icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});