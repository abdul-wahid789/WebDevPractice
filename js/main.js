const searchUi = new Search()
searchUi.button.addEventListener("click", ev => {
    let userName = searchUi.search.value
    // userName = "a"
    user1 = new User()
    User.loader(true)
    fetch(`https://api.github.com/users/${userName}`)
        .then(userInfo => { return (userInfo.json()) })
        .then(userInfo => {
            fetch(`https://api.github.com/users/${userName}/repos`)
                .then(userRepo => { return userRepo.json() })
                .then(userRepo => {
                    User.loader(false)
                    user1.clearUser()
                    user1.showAlert(false)
                    if (userInfo.message !== "Not Found") {
                        user1.showUser(userInfo, userRepo)

                    } else {
                        user1.showAlert(true)
                    }
                })
                .catch(userRepo => {
                    user1.showAlert(true)
                    console.log(userRepo)
                })

        })
        .catch(res => {
            user1.showAlert(true)
            console.log(userInfo)
        })
})
