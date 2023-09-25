class Products {
    constructor() {
        // this.productName=document.getElementById
    }
    static addProduct(item) {
        let productDiv = document.getElementById("productDiv")
        let itemDiv = `<div class="col">
        <div class="card">
            <img src=${item.imageUrl} class="card-img-top loading product-img" alt="">
            <div class="card-body">
                <h6 class="card-title">${item.name}</h6>
                <p class="card-text">Price: <span>${item.price}</span></p>
                <button class="btn btn-primary" id="addToCart"><i class="fa-solid fa-cart-plus"
                        style="color: #ffffff;"></i>
                    Add to cart</button>
            </div>
        </div>
    </div>`
        productDiv.innerHTML += itemDiv
    }
    static getCartItem(product) {
        let productParent = product.parentElement
        let imgUrl = productParent.parentElement.children[0].getAttribute("src")
        let name = productParent.children[0].textContent
        let price = productParent.children[1].firstElementChild.textContent
        let productInfo = {
            "name": name,
            "imgUrl": imgUrl,
            "price": price
        }
        return productInfo
    }
    static addProductToCart(product) {
        let cartItemsDiv = document.getElementById("cartItemsDiv")
        let item = `<div class="cart-item row px-1">
        <div class="col-sm-12 col-lg-5">
        <img src=${product.imgUrl} alt="" class="img-fluid cart-product-img">
    </div>
    <div class="col-sm-12 col-lg-6">
        <p>${product.name}</p>
        <div class="row">
            <div class="col-4">
                <i class="fa-solid fa-minus"  id="less-qt" style="color: #000000;"></i>
            </div>
            <div class="col-4">
                <p><span>${product.price}</span> x <span>1</span></p>
            </div>
            <div class="col-4">
                <i class="fa-solid fa-plus"  id="more-qt" style="color: #000000;"></i>
            </div>
        </div>
    </div>

    <div class="col-12 col-lg-1 my-auto p-0 d-grid">
        <button class="btn btn-danger btn-sm" id="cartItemDelete">
            X
        </button>
        </div>
    </div>`
        cartItemsDiv.innerHTML += item
    }
    static removeFromCart(item) {
        item = item.parentElement.parentElement
        item.remove()
        let price = (item.
            children[1].
            children[1].
            children[1].
            firstElementChild.
            firstElementChild.textContent)
        let quantity = (item.
            children[1].
            children[1].
            children[1].
            firstElementChild.
            children[1].textContent)
        return { "price": price, "quantity": quantity }
    }
    static updateBill(num) {
        let billElement = document.getElementById("total-bill")
        billElement.textContent = parseFloat(num) + this.getBill()
    }
    static getBill() {
        let bill = document.getElementById("total-bill").textContent
        return parseFloat(bill)
    }
    static getCartItemPrice(cartItem) {
        return parseFloat(cartItem.parentElement.
            parentElement.
            children[1].
            children[1].
            children[1].
            firstElementChild.
            firstElementChild.textContent)

    }
    static cartItemQuantityMore(cartItem) {

        let quantity = cartItem.parentElement.
            previousElementSibling.
            firstElementChild.
            children[1]

        quantity.textContent = parseInt(quantity.textContent) + 1

        quantity = cartItem.parentElement.
            previousElementSibling.
            firstElementChild.
            children[1].textContent

        let price = cartItem.parentElement.
            previousElementSibling.
            firstElementChild.
            children[0].textContent

        this.updateBill(price)

    }
    static cartItemQuantityLess(cartItem) {

        let quantity = cartItem.
            parentElement.
            parentElement.
            children[1].
            firstElementChild.
            children[1]

        let price = cartItem.
            parentElement.
            parentElement.
            children[1].
            firstElementChild.firstElementChild.textContent

        let n = parseInt(quantity.textContent) - 1
        if (n > 0) {
            quantity.textContent = n
            quantity = cartItem.
                parentElement.
                parentElement.
                children[1].
                firstElementChild.
                children[1].textContent

            this.updateBill(-price)
            // return { "price": price, "quantity": quantity }
        }
        else {
            this.removeFromCart(cartItem.parentElement.parentElement)
            this.updateBill(-price)
        }

    }



}
