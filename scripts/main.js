let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `欢迎来到我的网站, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `欢迎来到我的网站, ${storedName}`;
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `欢迎来到我的网站, ${myName}`;
      
    }
  }
  const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "5BF5D140-4747-4ED2-B60A-25D73A708D22_1_201_a.jpeg") {
    myImage.setAttribute("src", "B4E9B81B-3702-49BC-8535-1FA77DC34D54_1_105_c.jpeg");
  } else {
    myImage.setAttribute("src", "5BF5D140-4747-4ED2-B60A-25D73A708D22_1_201_a.jpeg");
  }
});

