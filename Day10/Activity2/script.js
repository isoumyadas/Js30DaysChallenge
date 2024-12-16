//Task 3:

// const div = document.querySelector("div");

// div.addEventListener("mouseover", () => {
//   div.style.backgroundColor = "lightyellow";
// });

// div.addEventListener("mouseout", () => {
//   div.style.backgroundColor = "lightblue";
// });

// ^ You can use this approach too. and this is best methd.

const div = document.querySelector("div");

div.addEventListener("mouseover", () => {
  div.classList.add("hovered");
});

div.addEventListener("mouseout", () => {
  div.classList.remove("hovered");
});
