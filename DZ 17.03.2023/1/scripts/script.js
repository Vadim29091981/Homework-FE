const numbersDiv = document.querySelector(".numbers")

for (let index = 100; index >= 50; index -= 10) {
    const p = document.createElement("p")
    
    p.innerText = index // <p>{index}</p>

    numbersDiv.append(p)
}
