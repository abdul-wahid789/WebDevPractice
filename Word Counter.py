search_words = ["Python", "C", "OOP", "Hello", "Java"]
count=[0]*len(search_words)

lw_search_words=[item.lower() for item in search_words]
          
def getIndex(word):
    try:
        return lw_search_words.index(word)
    except:
        return "null"
    
def readFile(path):
    with open(path, "r") as file:
        for lines in file:
            lines = lines.rstrip('\n')
            word = lines.split(" ")
            for x in word:
                i=getIndex(x.lower())
                if(i!="null"):
                    count[i]+=1


readFile("input.txt")

for i, value in enumerate(search_words):
    print(value, "->", count[i])
