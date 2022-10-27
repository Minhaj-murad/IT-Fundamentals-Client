// use local storage to manage cart data
const addToDb = id => {
    let checkOut = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('checkOut')
    if (storedCart) {
      checkOut = JSON.parse(storedCart)
    }
  
    // add quantity
    const quantity = checkOut[id]
    if (quantity) {
      const newQuantity = quantity + 1
      checkOut[id] = newQuantity
    } else {
      checkOut[id] = 1
    }
    localStorage.setItem('checkOut', JSON.stringify(checkOut))
  }
  
  const getStoredCart = () => {
    let checkOut = {}
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('checkOut')
    if (storedCart) {
      checkOut = JSON.parse(storedCart)
    }
    return checkOut
  }
  
  const removeFromDb = id => {
    const storedCart = localStorage.getItem('checkOut')
    if (storedCart) {
      const checkOut = JSON.parse(storedCart)
      if (id in checkOut) {
        delete checkOut[id]
        localStorage.setItem('checkOut', JSON.stringify(checkOut))
      }
    }
  }
  
  const deletecheckOut = () => {
    localStorage.removeItem('checkOut')
  }
  
  export { addToDb, getStoredCart, removeFromDb, deletecheckOut }
  