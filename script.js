// Use querySelector() to return the node that represents the first element with the specific css selector of pick-me.
const firstParagraph = document.querySelector(".pick-me");
const body = document.querySelector("body");
const container = document.querySelector(".container");

// Use console.dir to check out all the properties of the node (object)
console.dir(firstParagraph);

// modify the color property of the specified node
// firstParagraph.style.color = "green";

// change the background color to black
firstParagraph.style.backgroundColor = "black";

const unicornParagraphs = document.querySelectorAll("p.unicorn");
console.dir(unicornParagraphs);

unicornParagraphs.forEach((paragraph) => (paragraph.style.fontSize = "32px"));

// Creates an instance of the node for the specified tag
const newDiv = document.createElement("div");

// Add an attribute to a node
newDiv.setAttribute("data-index", 5);
newDiv.textContent = "Hell yeah";

console.dir(newDiv);
container.append(newDiv);

const test = () => {
  firstParagraph.classList.toggle("pink");
};

firstParagraph.addEventListener("click", test);
firstParagraph.removeEventListener("click", test);
