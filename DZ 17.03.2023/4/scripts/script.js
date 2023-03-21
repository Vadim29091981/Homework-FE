const products = [
  {
      id: "1",
      product: "Product 1",
      price: 150,
      quantity: 10,
      country: "USA"
  },{
      id: "2",
      product: "Product 2",
      price: 150,
      quantity: 4,
      country: "France"
  },{
      id: "3",
      product: "Product 3",
      price: 150,
      quantity: 100,
      country: "Germany"
  },{
      id: "4",
      product: "Product 4",
      price: 150,
      quantity: 50,
      country: "Italy"
  },
]
const productsDiv = document.querySelector(".products_container")
for (let index = 0; index < products.length; index++) {
  if (products[index].quantity < 10) continue

  const {id, product, price, quantity, country} = products[index]
  const div = document.createElement("div")
  const pId = document.createElement("p")
  pId.innerText = `Номер продукта: ${id}`
  const pName = document.createElement("p")
  pName.innerText = `Продукт: ${product}`
  const pPrice = document.createElement("p")
  pPrice.innerText = `Цена продукта: ${price}`
  const pQuantity = document.createElement("p")
  pQuantity.innerText = `Количество: ${quantity}`
  const pCountry = document.createElement("p")
  pCountry.innerText = `Страна производства: ${country}`
  div.append(pId, pName, pPrice, pQuantity, pCountry)
  productsDiv.append(div)
}
