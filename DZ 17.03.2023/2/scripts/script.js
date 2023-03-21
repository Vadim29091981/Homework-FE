const strArray = ['Lorem', 'ipsum', 'dolor', 'sitamet', 'consectetur', 'adipisicing', 'Numquam']
const stringsDiv = document.querySelector(".strings_container")

for (let index = 0; index < strArray.length; index++) {
    const p = document.createElement("p")
    
    p.innerText = strArray[index] // <p>{strArray[index]}</p>
    // stringsDiv.innerHTML += `<p>${strArray[index]}</p>`


    stringsDiv.append(p)
}