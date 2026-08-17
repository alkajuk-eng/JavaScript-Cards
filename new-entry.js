//Constant declarations
const title = document.getElementById("title");
const reflection = document.getElementById("reflection");
const savebtn = document.querySelector(".save-btn");

// Get existing entries from localStorage or create an empty array
let entries = JSON.parse(localStorage.getItem("entriesArray"));
let entriesArray = entries ? entries : [];

//Event creation
savebtn.addEventListener("click", (event) => {

  event.preventDefault();

  if (title.value.trim() && reflection.value.trim()) {
    //Creation of the object
    const entry = {
      title: title.value.trim(),
      reflection: reflection.value.trim(),
    };
    //Push entry to array
    entriesArray.push(entry);
    // Save array to localStorage
    localStorage.setItem("entriesArray", JSON.stringify(entriesArray));
    // Clear inputs
    title.value = "";
    reflection.value = "";
    console.log(entriesArray);
    
  } else if (!title.value.trim() && !reflection.value.trim()) {
    alert("Please fill title and reflection!");
    return;
  } else if (!title.value.trim() && reflection.value.trim()) {
    alert("Please fill title!");
    return;
  } else {
    alert("Please reflection!");
    return;
  }
});

/* Burger */
const menuIcon = document.querySelector(".icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", (event) => {
  nav.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});
