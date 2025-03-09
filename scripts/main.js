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
  if (mySrc === "64566BD8-68C9-4CA3-9DC9-B67A94D4269F.jpeg") {
    myImage.setAttribute("src", "47F79361-8EAB-462D-BDD4-DB14B0D292EE_1_201_a.jpeg");
  } else {
    myImage.setAttribute("src", "64566BD8-68C9-4CA3-9DC9-B67A94D4269F.jpeg");
  }
});

