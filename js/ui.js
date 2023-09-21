class Search {
    constructor() {
        this.search = document.getElementById("search")
        this.button = document.getElementById("search-btn")
    }
}

class User {
    constructor() {
        this.parent = document.querySelector("#search-container").parentNode
        this.searchDiv = document.querySelector("#search-container")

    }

    showUser(user, userRepo) {
        this.clearUser()
        let contentDiv = document.createElement("div")
        contentDiv.className = "user-info container row mt-5"
        contentDiv.id = "userInfo"
        let userInformationSummery = `
        <div class="card col-lg-3">
            <img class="card-image-top" src=${user.avatar_url} alt="user avater">
            <div class="card-body">
                <h5 class="card-title text-center">${user.name}</h5>
                <p class="card-text"><i class="fa-sharp fa-solid fa-location-pin me-2" style="color: #292929;"></i>${user.location}</p> 
                <p class="card-text">Account Created: ${this.customDate(user.created_at)}</p> 
                <a href=${user.html_url} class="btn btn-primary w-100 " target="_blank" rel="noopener">Profile</a>
            </div>
        </div>

        <div class="col-lg-9" id="user-repo-info">
            <!-- git repo numbers -->
            <div class="row justify-content-evenly mt-5">
                <span class="col-6 col-lg-2 p-2 badge bg-primary">Public Repo ${user.public_repos}</span>
                <span class="col-6 col-lg-2 p-2 badge bg-secondary">Public Gist ${user.public_gists}</span>
                <span class="col-6 col-lg-2 p-2 badge bg-success">Followers ${user.followers}</span>
                <span class="col-6  col-lg-2 p-2 badge bg-danger">Following ${user.following}</span>
            </div>
            <!-- public repo -->
        </div>`
        contentDiv.innerHTML = userInformationSummery
        this.parent.insertBefore(contentDiv, this.searchDiv.nextSibling)

        if (user.public_repos > 0) {
            this.publicReposMaker(userRepo)
        }

    }


    customDate(dateTime) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date(dateTime)
        let newDate = `${date.getDate()}-${months[date.getMonth()]}-${date.getFullYear()}`
        return newDate

    }

    publicReposMaker(repos) {
        let userRepoInfo = document.getElementById("user-repo-info")
        let publicReposDiv = document.createElement("div")
        publicReposDiv.className = "mt-5 table-responsive"
        var tableRow = ""
        repos.forEach(item => {
            tableRow += `
            <tr>
                <th scope="row">${item.name}</th>
                <td>${this.customDate(item.created_at)}</td>
                <td>${this.customDate(item.updated_at)}</td>
                <td><a href=${item.html_url} class="btn btn-outline-primary btn-sm btn-repo" target="_blank" rel="noopener">Visit Repo</a></td>
              </tr>`

        })

        let publicRepos = `
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="row" colspan="4" class="text-center fs-3">Public repositories</th>
                </tr>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Created</th>
                <th scope="col">Updated</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              ${tableRow}
        
            </tbody>
          </table>
      `
        publicReposDiv.innerHTML = publicRepos
        userRepoInfo.insertBefore(publicReposDiv, userRepoInfo.lastChild)
    }

    showAlert(bol) {
        let warningText = document.getElementById("searchHelperBlock")
        if (bol){
            warningText.classList.remove("d-none")
            warningText.classList.add("d-block")
        }
        else{
            warningText.classList.remove("d-block")
            warningText.classList.add("d-none")
        }
            

    }

    clearUser() {
        let content = document.getElementById("userInfo")
        if (content !== null)
            content.remove()
    }

    static loader(bol){
        let loaderSearch=document.getElementById("searchLoader")
        let searchIcon=document.getElementById("searchIcon")
        if(bol){
            loaderSearch.classList.add("d-block")
            loaderSearch.classList.remove("d-none")

            searchIcon.classList.add("d-none")
            searchIcon.classList.remove("d-block")
        }else{
            loaderSearch.classList.add("d-none")
            loaderSearch.classList.remove("d-block")

            searchIcon.classList.add("d-block")
            searchIcon.classList.remove("d-none")
        }
    }
}