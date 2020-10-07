
(function() {
  setEventListeners();
})();

function setEventListeners() {
  let list = document.body.classList;
  document.getElementById("hide-container").addEventListener("click", containerToggle);
}

function containerToggle(e) {
	console.log(e.target.id);
	console.log(e.target.className);

  let button = e.target;
  let container = document.getElementsByClassName("container")[0];

  if (button.className === "hide") {
	container.classList.add("hidden");

	button.classList.remove("hide")
	button.classList.add("show")
  } else {
	container.classList.remove("hidden");

	button.classList.remove("show")
	button.classList.add("hide")
	
  }

  //let color = getRandomColor();
  //off(bioType);
  //bioType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  //let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  //if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}
