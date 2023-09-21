class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
    

}

class Ui {

    static addBook(bookInfo) {
        let bookList = document.getElementById("book-list")
        let item = `<tr scope="row">
        <td>${bookInfo.title}</td>
        <td>${bookInfo.author}</td>
        <td>${bookInfo.isbn}</td>
        <td> <button  class="btn btn-danger btn-sm" id="book-delete">Delete</button></td>
        </tr>
        `
        bookList.innerHTML += item
    }

    static feedbackAlert(txt, className) {
        let divElement = document.createElement("div")
        let pElement = document.createElement("p")
        pElement.innerHTML = txt
        divElement.className = className + " col-12 text-center"
        divElement.appendChild(pElement)

        document.querySelector(".container").insertBefore(divElement, document.querySelector("form"))

        setTimeout(() => {
            document.getElementsByClassName(className)[0].remove()
        }, 1500);
    }

    static removeFromTable(ev) {
        if (ev.target.id === "book-delete") {
            
            ev.target.parentElement.parentElement.remove()
        }
    }


}

class Store {
    static saveBook(bookInfo) {
        let oldBooks = this.getBook()
        if (oldBooks === null) {
            bookInfo = JSON.stringify([bookInfo])
            localStorage.setItem("book", bookInfo)
        }
        oldBooks.push(bookInfo)
        oldBooks=JSON.stringify(oldBooks)
        localStorage.setItem("book", oldBooks)
    }

    static getBook() {
        return JSON.parse(localStorage.getItem("book"))
    }
    
    static removeBook(isbn){
        let books=this.getBook()
        books.forEach((item,i)=>{
            if(isbn===item.isbn){
                books.splice(i,1)
                books=JSON.stringify(books)
                localStorage.setItem("book",books)
            }

        })
    }
}
document.addEventListener("submit", ev => {
    title = document.forms["book-info"]["book-title"].value
    author = document.forms["book-info"]["book-author"].value
    isbn = document.forms["book-info"]["book-isbn"].value

    if (title !== "" && author !== "" && isbn !== "") {
        newBook = new Book(title, author, isbn)
        Ui.addBook(newBook)
        Ui.feedbackAlert("Book Added Successfully", "success")
        Store.saveBook(newBook)
        document.forms["book-info"].reset()
        

    } else {
        Ui.feedbackAlert("Book can not be added!", "failed")
    }
    ev.preventDefault()
})


document.addEventListener("click", ev => {
    Ui.removeFromTable(ev)
    let isbn=ev.target.parentElement.parentElement.children[2].textContent
    Store.removeBook(isbn)

})

document.addEventListener("DOMContentLoaded",ev=>{
    if(Store.getBook()!==null){
        let books=Store.getBook()
        books.forEach(item=>{
            Ui.addBook(item)
        })
    }
})

