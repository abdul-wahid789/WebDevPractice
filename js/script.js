let totalPrice = 0
document.addEventListener("DOMContentLoaded", ev => {
    fetch("assets/data.json")
        .then(res => (res.json()))
        .then(res => {
            res.forEach(item => {
                Products.addProduct(item)
            })
        })
        .catch(res => {
            console.log(res)
        })
})

document.addEventListener("click", ev => {
    let product = ev.target
    if (product.id === "addToCart") {
        let productInfo = Products.getCartItem(product)
        Products.updateBill(productInfo.price)
        Products.addProductToCart(productInfo)
    }
    else if (product.id === "cartItemDelete") {
        let item=Products.removeFromCart(product)
        
        Products.updateBill(
            -Products.getCartItemPrice(product)*item.quantity
        )
        
        

    } else if (product.id === "less-qt") {

        let item=Products.cartItemQuantityLess(product)

    } else if (product.id === "more-qt") {
        
        Products.cartItemQuantityMore(product)
    }
    else {

        // console.log(product)
    }

})
