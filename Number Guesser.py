import random
low=1
high=50
chances=5
again=True
    
def feedBack(number,answer):
    if number<answer:
        return "Hint: Correct answer is greater!"
    elif number>answer:
        return "Hint: Correct answer is smaller!"
    else:
        return "\n! You Win !\n"

def getNumber():
    val=True
    while(val):
        try:
            number=int(input("Guessed number: "))
        except:
            print("Wrong input try again")
        else:
            if(number<low or number>high):
                print(f"Hint: Must be bwtween {low}-{high}")
            else:
                val=False
    return number

def restart():
    restart=input("\n\nInput Y to restart the game: ").lower()
    if(restart=="y"):
        global chances
        chances=5
        print("\n\n\n")
        return True
    else:
        return False
        


def play():
    answer=random.randint(low, high)
    global chances
    while chances>0:
        print("Chances left: ",chances)
        guess=getNumber()
        print(feedBack(guess,answer))
        if(guess==answer):
            return restart()
                
        if(chances==1 and guess!=answer):
            print("\n! You loss !\n")
            return restart()
            
        chances-=1
        print("\n")
        

while again:
    again=play()
    