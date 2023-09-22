let input = false
document.addEventListener("click", ev => {
    switch (ev.target.id) {
        case "userName":
            showForm("Username", "text", "abdul_wahid")
            validator(/^[A-Za-z][A-Za-z0-9_]{3,29}$/,
                "Valid username", "Invalid username")
            break;
        case "email":
            showForm("Email", "email", "abdulwahid.contact@gmail.com")
            validator(/^[a-zA-Z0-9]+([\._\+-][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([\._\+-][a-zA-Z0-9]+)+$/,
                "Valid Email", "Invalid Email")
            break
        case "phoneNumber":
            showForm("Phone number", "tel", "01849450075")
            validator(/^(\+8801|01)[356789][0-9]{8}$/,
                "Valid number", "Invalid number")
            break
        case "postalCode":
            showForm("Postal Code", "number", "1340")
            validator(/^[0-9]{4}$/,
                "Valid", "Invalid")
            break
        case "custom":
            showCustomField()
            validator(/[a-z]/,
                "Valid", "Invalid")
            break
    }
})
function showCustomField() {

    parent = document.getElementById("main")

    if (input) {
        document.getElementById("inputDiv").remove()
    }
    inputDiv = `  <div class="row" id="inputDiv">
    <div class="mt-5 mb-2 row justify-content-center">
        <label for="staticEmail" class="col-3 col-lg-1 col-form-label">Expression</label>
        <div class="col-9 col-lg-3">
            <input type="text" class="form-control" id="expressionInput" placeHolder="eg. ^[0-9]{4}$">
        </div>
    </div>
    <div class="mb-3 row justify-content-center">
        <label for="inputPassword" class="col-3 col-lg-1 col-form-label">Text</label>
        <div class="col-9 col-lg-3">
            <input type="text" class="form-control" id="input">
            <span id="inputHelpInline" >
            
            </span>
        </div>
    </div>
</div>`
    input = true
    parent.innerHTML += inputDiv
}

function showForm(name, type, placeHolder) {
    parent = document.getElementById("main")

    if (input) {
        document.getElementById("inputDiv").remove()
    }
    inputDiv = `        <div class="row g-3 align-items-center justify-content-center mt-5" id="inputDiv">
    <div class="col-3 col-lg-auto">
        <label for="input" class="col-form-label" id="inputLabel">${name}</label>
    </div>
    <div class="col-8 col-lg-3">
        <input type=${type} id="input" class="form-control" placeholder="eg. ${placeHolder}">
    </div>
    <div class="col-auto">
        <span id="inputHelpInline" class="form-text">
            
        </span>
    </div>
</div>`
    input = true
    parent.innerHTML += inputDiv
}

function getExpression() {
    let re = document.getElementById("expressionInput")
    if (re != null)
        re = new RegExp(re.value);
    return re
}

function validator(re, valid, inValid) {
    document.getElementById("input").addEventListener("keyup", ev => {
        let customRe = getExpression()
        if (customRe != null) {
            re = customRe
            console.log(re)
        }
        let val = document.getElementById("input").value.trim()
        if (!re.test(val)) {
            document.getElementById("input").style.border = "1px solid red";
            document.getElementById("input").style.boxShadow = "0 0 0 0.25rem rgba(255, 0, 0, 0.617)"
            document.getElementById("inputHelpInline").innerHTML = inValid
            document.getElementById("inputHelpInline").style.color = "#dc3545"

        } else {
            document.getElementById("input").style.border = "";
            document.getElementById("input").style.boxShadow = ""
            document.getElementById("inputHelpInline").innerHTML = valid
            document.getElementById("inputHelpInline").style.color = "#198754"

        }
    })

}