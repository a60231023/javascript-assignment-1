let first = document.createElement("h3")
first.innerText = "My New FAQ"

let second = document.createElement("section")
second.classList.add("Parent")
second.appendChild(first)


document.querySelector(".accordion-homepage").appendChild(second)
