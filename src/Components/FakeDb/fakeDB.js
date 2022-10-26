// use local storage to manage cart data
const addToDb = id => {
    let checkOutCart = {}
  
    //get the checkOut cart from local storage
    const storedCart = localStorage.getItem('checkOut-cart')
    if (storedCart) {
      checkOutCart = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = checkOutCart[id]
    if (quantity) {
      const newQuantity = quantity + 1
      checkOutCart[id] = newQuantity
    } else {
      checkOutCart[id] = 1
    }
    localStorage.setItem('checkOut-cart', JSON.stringify(checkOutCart))
  }
  
  const getStoredCart = () => {
    let checkOutCart = {}
  
    //get the checkOut cart from local storage
    const storedCart = localStorage.getItem('checkOut-cart')
    if (storedCart) {
      checkOutCart = JSON.parse(storedCart)
    }
    return checkOutCart
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('checkOut-cart')
    if (storedCart) {
      const checkOutCart = JSON.parse(storedCart)
      if (id in checkOutCart) {
        delete checkOutCart[id]
        localStorage.setItem('checkOut-cart', JSON.stringify(checkOutCart))
      }
    }
  }
  
  const deletecheckOutCart = () => {
    localStorage.removeItem('checkOut-cart')
  }
  
  export { addToDb, getStoredCart, removeFromDb, deletecheckOutCart }
  