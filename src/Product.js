function Product(props) {
  function handleBuyClick() {
    console.log(`Купили ${props.title}`, `Цена ${props.price}`)
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      <button onClick={handleBuyClick}>Купить</button>
    </div>
  )
}
export default Product
