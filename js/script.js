function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let val=Math.floor(Math.random() * (max - min + 1) + min);
    console.log(val)
    return val
}

let chance = 3
let correcr_ans = getRandom(1, 10)

function playAgain(ans) {

    if (1 <= ans && 10 >= ans) {
        if (correcr_ans < ans) {
            chance--
            return { "comment": "Correct answer is smaller!", "bol": false }
        } else if (correcr_ans > ans) {
            chance--
            return { "comment": "Correct answer is greater!", "bol": false }
        } else {
            return { "comment": "! You Win !", "bol": true }
        }
    } else {
        chance--
        return { "comment": "Correct answer range 1-10 !", "bol": false }
    }

}
document.getElementById("guess").addEventListener("click", ev => {
    let ans = parseInt(document.getElementById("number").value)
    // correcr_ans = 4

    if (chance > 0) {
        let res = playAgain(ans)
        Game.feedback(res.comment)
        if (!res.bol && chance === 0) {
            Game.feedback("You lose!")
            Game.disable(true)
        } else if (res.bol) {
            Game.feedback(res.comment)
            Game.disable(true)
        }
    }
    Game.showChance(chance)
    document.getElementById("number").value = ""

})

document.getElementById("reset").addEventListener("click", ev => {
    gameReset()
})

function gameReset() {
    document.getElementById("number").value = ""
    chance = 3
    Game.showChance(chance)
    correcr_ans = getRandom(1, 10)
    Game.feedback("")
    Game.disable(false)
}
