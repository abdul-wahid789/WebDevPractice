class Game{
    static showChance(chance) {
        document.getElementById("chance").innerHTML=chance
    }
    static feedback(comment){
        document.getElementById("feedback").innerHTML=comment
    }
    static disable(bol){
        document.getElementById("number").disabled = bol;
        document.getElementById("guess").disabled = bol;
    }
}