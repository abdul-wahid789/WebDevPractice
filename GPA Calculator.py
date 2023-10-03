subjects=["Bangla","English","Math","Science"]
marks=[]
totalMark=0

def calculateGPA(marks):
    sum=0
    for i in marks:
        sum+=i
    return sum/len(marks)

def calculateGrade(grade):
    if(grade>=91 and grade<=100):
        return "A+"
    elif(grade>=81 and grade <=90):
        return "A"
    elif(grade>=71 and grade <=80):
        return "B"
    elif(grade>=61 and grade <=70):
        return "C"
    elif(grade>=41 and grade <=60):
        return "D"
    else:
        return "F"

for i in subjects:
    val=True
    while(val):
        try:
            number=int(input(f"Enter mark of {i}: "))
        except:
            print("Wrong input try again")
        else:
            if(number<0 or number>100):
                print("Must be bwtween 0-100")
            else:
                val=False
    marks.append(number)
    totalMark+=number
        

print("\n\n############################\n\n")
for i in range(len(subjects)):
    print(f"{subjects[i]} | Mark: {marks[i]} | Grade: {calculateGrade(marks[i])}")

print("\n\n")

print(f"Total Marks: {totalMark}")
print(f"Average: {calculateGPA(marks)}")
print(f"Grade: {calculateGrade(calculateGPA(marks))}\n\n")