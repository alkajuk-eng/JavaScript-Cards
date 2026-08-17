//Creating displayEntries
function displayEntries() {

  // Get existing entries from localStorage
  const entriesArray = JSON.parse(localStorage.getItem("entriesArray"));
  console.log(entriesArray);
  //Select all cards
  const cards = document.querySelectorAll('.card');

  //Checking if there are any entries in localStorage.
  if (!entriesArray || entriesArray.length === 0) {
    alert("No records found. Please fill in the title and reflection first!");
    return;
  } else if (entriesArray.length === 1) {
    const value = entriesArray.length;
    alert(`Insufficient records. You have ${value} record. ` +
      `Please fill in the title and reflection for ${cards.length - value} more cards.`);
    return;
  } else if (entriesArray.length < 5) {
    const value = entriesArray.length;
    alert(`Insufficient records. You have ${value} records. ` +
      `Please fill in the title and reflection for ${cards.length - value} more cards.`);
    return;
  }
  
  //Writing data from localStorage into the cards.
  entriesArray.slice(0, 5).forEach((item, index) => {

    const h2 = cards[index].querySelector("h2");
    const p = cards[index].querySelector("p");

    h2.textContent = item.title;
    p.textContent = item.reflection;
  });
}
//Display saved entries in the cards.
displayEntries();

/* Burger */
const menuIcon = document.querySelector(".icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});