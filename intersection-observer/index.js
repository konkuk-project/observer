import "./style.css";

const root = document.getElementById("app");
const fetch = document.getElementById("fetchMore");

const config = {};

function createRandomText(n) {
  let Random = Math.random().toString(36).slice(2);
  let long_Random = Math.random().toString(36).slice(2);
  for (let i = 0; i < Math.random() * 100; i++) {
    if (Math.floor(Math.random() * 10) % 2 == 0) {
      long_Random += " ";
    }
    long_Random += Math.random().toString(36).slice(2);
  }
  createRandomElement(Random, long_Random, n);
}

function createRandomElement(text, long_text, n) {
  let main = document.createElement("div");
  main.className = "main";

  let number = document.createElement("div");
  number.className = "number";
  let title = document.createElement("h3");
  title.className = "title";
  let content = document.createElement("p");
  content.className = "content";

  number.append(n);
  title.append(text);
  content.append(long_text);

  main.appendChild(number);
  main.appendChild(title);
  main.appendChild(content);

  document.getElementById("list").appendChild(main);
}

let start = 0;
let end = 20;

const observer = new IntersectionObserver((entries) => {
  const [{ isIntersecting }] = entries;

  if (isIntersecting) {
    for (let i = start; i < end; i++) {
      createRandomText(i + 1);
    }
    start += 20;
    end += 20;
  }
}, config);

observer.observe(fetch);
