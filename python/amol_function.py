# print ("NavGurukul")

# def say_hello():                          #difining to the function
#     print ("Hello!")
#     print ("Aap kaise ho?")

# say_hello()                               #calling to the function
# print ("Python is awesome")
# say_hello()
# print ("Hello…")
# say_hello() 


# def definition_say_hello():
#     print ("NavGurukul")
#     print ("NavGurukul mei humein apni learning ki responsibility leni padti hai.")

# definition_say_hello()

# print ("NavGurukul mei hum sab logo ko ek tarah se treat karte hai.")

# definition_say_hello() 


# def definition_hello_again():
#     print ("Firse Hello :)")
#     print ("Aap kaise ho?") 
# definition_hello_again() 


# def ask_question():
#     print('ek baar')
# a=0
# while a<100:
#     ask_question()
#     a+=1



# a = [3, 5, 7, 34, 2, 89, 2, 5]
# print(max(a))
# a = [1, 2, 3, 4, 5]
# print(sum(a))

# a = [6, 8, 4, 3, 9, 56, 0, 34, 7, 15] 
# a.sort()
# print(a)

# a = ["Z", "A", "A", "B", "E", "M", "A", "R", "D"] 
# a.reverse()
# print(a)

# a = [8, 6, 4, 8, 4, 50, 2, 7]
# print(min(a))

# def say_hello(name):
#     print ("Hello ", name)
#     print ("Aap kaise ho?")
# say_hello("Aatif")

# def add_numbers(number1, number2):
#     print ("Main do numbers ko add karunga.")
#     print (number1 + number2)
# add_numbers(120, 50)
# num_x = 134
# name = "Rinki"
# add_numbers(num_x, name)


# def add(a,b,c=5):
#     print()
# # add(1,2)      # first way to write because c have already default value
# add(1,2,3)  




# Meraki Questions
#Q1
# def ask_question():
#     print('ek baar')
# a=0
# while a<100:
#     ask_question()
#     a+=1



#Q2
# def function_print_lines():
#     print('Mera naam Rishabh hai.')
#     print('Main NavGurukul ka co-founder hun.')
# function_print_lines()


#Q3
# def students(list_of_students_name):
#     pass


# def isGreaterThen20(a=20,b=0):
#     print(a)
# isGreaterThen20()
# isGreaterThen20(23)



#Q4
#part 1
# def add_numbers(num1,num2):
#     print(num1+num2)
# add_numbers(56,12)

# part 2
# def add_numbers_list(a,b):
#     for i in range(len(a)):
#         print(a[i]+b[i])
# add_numbers_list([50, 60, 10],[10, 20, 13])



#Q5
#part 1
# def check_numbers(a,b):
#     if a%2==0 and b%2==0:
#         print('dono even number hai')
#     else:
#         print('dono even nhi hai')
# check_numbers(5,9)


#part 2
# def check_number_list(a,b):
#     for i in range(len(a)):
#         if a[i]%2==0 and b[i]%2==0:
#             print('dono even hai')
#         else:
#             print('dono even nhi hai')
# check_number_list([2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87])




#Q6
# def calculator(numx,numy,operation):
#     if operation=='add':
#         a=(numx+numy)
#         return a
#     elif operation=='sub':
#         a=(numy-numx)
#         return a
#     elif operation=='multi':
#         a=(numy*numx)
#         return a
#     elif operation=='divide':
#         a=(numy/numx)
#         return a
# b=calculator(2,2,'multi')
# print(b)



#part2
# def calculator(numx,numy,operation):
#     if operation=='add':
#         a=(numx+numy)
#         return a
#     elif operation=='sub':
#         a=(numy-numx)
#         return a
#     elif operation=='multi':
#         a=(numy*numx)
#         return a
#     elif operation=='divide':
#         a=(numy/numx)
#         return a
# numy=int(input('enter numy= '))
# numx=int(input('enter numx= '))
# operation=str(input('enter which operation do you want= '))
# b=calculator(numy,numx,operation)
# print(b)


#part3
# def list_change(a,b):
#     b=[]
#     for i in range(len(a)):
#         c=(a[i])*(b[i])
#         b.append(c)
#     print(b)
# list_change([5,10,50,20],[2,20,3,5])



#inner function

#Q1
# def eligiblr_for_vote(age):
#     if age>=18:
#         print('you can vote')
#     else:
#         print("you can't vote")
# age=int(input('enter your ege= '))
# eligiblr_for_vote(age)

#Q2  perfect number
# for a in range(1,1001):
#     def perfect(a):
#         sum=0
#         for i in range(1,a):
#             if a%i==0:
#                 sum+=i
#         if sum==a:
#             print(a)
#     perfect(a)



#Q3
# def sum_average(a,b,c):
#     print('sum= ',a+b+c)
#     print('average= ',(a+b+c)/3)
# a=int(input('enter st number= '))
# b=int(input('enter nd number= '))
# c=int(input('enter rd number= '))
# sum_average(a,b,c)



#Q4
# def showNumber(limit):
#     for i in range(1,limit+1):
#         if i%2==0:
#             print(i,' is even')
#         else:
#             print(i,' is odd')
# limit=int(input('enter limit= '))
# showNumber(limit)


#Q5
# def amol(limit):
#     sum=0
#     for i in range(1,limit+1):
#         if i%3 and i%5==0:
#             sum+=i
#     print(sum)
# limit=int(input('enter limit= '))
# amol(limit)


#Q6
# def check_speed(speed):
#     if speed<70:
#         print('okay')
#     elif speed>70:
#         a=speed-70
#         b=a//5
#         if speed>70 and b>=12:
#             print('your liscense has been suspended')
# speed=int(input('enter speed= '))
# check_speed(speed)



#Q7
#def str_lenght():
#	a=str(input('enter name '))
#	b=str(input('enter name '))
#	if (len(a))>(len(b)):
#		print(a)
#	elif (len(b))>(len(a)):
#		print(b)
#	else:
#		print(a,b)
#str_lenght()



#Q8
#def num_dict(a):
#	b={}
#	for i in range(1,a+1):
#		b[i]=i*i
#	print(b)
#a=int(input('enter number'))
#num_dict(a)







#W3 resources Question
#Q4
def bhopu(a):
	for i in range(-1,(a[0]),):
		print(a)
bhopu('1234abcd')