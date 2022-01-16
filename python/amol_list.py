# #heart pattern
# for r in range(0,5):
# 	for c in range(0,7): 
# 		if (r==0 and (c==1 or c==2 or c==4 or c==5) or (r==1 and (c==0 or c==3 or c==6)) or (r==2 and (c==1 or c==5)) or (r==3 and (c==2 or c==4)) or (r==4 and c==3)):
# 			print("*",end=" ")
# 		else:
# 			print(" ",end=" ")	
# 	print()


# for perfect number
# a=int(input(""))
# b=1
# sum=0
# while b<a:
# 	if a%b==0:
# 		sum+=b
# 	b+=1
# if a==sum:
# 	print('This is perfect number')
# else:
# 	print("This is not perfect number")


# pyramid pattern
# for r in range(0,4):
# 	for c in range(1,6):
# 		if (r==0 and c==3) or (r==1 and (c==2 or c==4)) or (r==2 and (c==1 or c==3 or c==5)):
# 			print('*',end="")
# 		else:
# 			print(' ',end="")
# 	print()


#amol
# for r in range(1,15):
#  for c in range(1,50):
#   if (r==1 and (c==4 or c==5 or c==6 or c==7 or c==8 or c==16 or c==24 or c==34 or c==39 or c==41)) or (r==2 and (c==2 or c==6 or c==10 or c==13 or c==17 or c==23 or c==27 or c==32 or c==36 or c==39 or c==41)) or (r==3 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==18 or c==22 or c==24 or c==27 or c==30 or c==34 or c==38 or c==39 or c==41)) or (r==4 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==19 or c==21 or c==23 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==5 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==18 or c==20 or c==22 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==6 and (c==2 or c==4 or c==5 or c==6 or c==7 or c==8 or c==10 or c==13 or c==15 or c==19 or c==21 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==7 and (c==2 or c==10 or c==13 or c==15 or c==20 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==8 and (c==2 or c==4 or c==5 or c==6 or c==7 or c==8 or c==10 or c==13 or c==15 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==9 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==24 or c==27 or c==30 or c==32 or c==36 or c==39 or c==41)) or (r==10 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==11 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41)) or (r==12 and (c==2 or c==4 or c==8 or c==10 or c==13 or c==15 or c==24 or c==27 or c==30 or c==32 or c==36 or c==38 or c==39 or c==41 or c==47 or c==49)) or (r==13 and (c==1 or c==2 or c==4 or c==8 or c==10 or c==11 or c==12 or c==13 or c==15 or c==24 or c==27 or c==28 or c==32 or c==36 or c==39 or c==41 or c==43 or c==44 or c==45 or c==46 or c==47 or c==49)) or (r==14 and (c==1 or c==2 or c==3 or c==4 or c==8 or c==10 or c==11 or c==12 or c==13 or c==14 or c==15 or c==24 or c==25 or c==26 or c==27 or c==28 or c==34 or c==39 or c==41 or c==42 or c==43 or c==44 or c==45 or c==46 or c==47 or c==48 or c==49)):
#    print("* ",end=" ")
#   else:
#    print(" ",end=" ")
#  print()


#reverse the items
# a=["delhi", "gujrat", "rajasthan", "punjab", "kerala"]
# print(a[-1::-1])


# a=int(input())
# b=0
# e=a
# c=101
# d=900
# x=" "
# y=0
# z=1
# r=a
# while a>b or y<z:
#     if y<z:
#         print(x*e+str(y)+r*x)
#         y+=1
#     else:
#         f=x*e+str(c)+r*x
#         c+=d
#         d*=10
#         b+=1
#         print(f)
#     e-=1
#     r-=1


###################palendrome 
# a = ['n','a','y','a','n']
# sum=[]
# for i in range(-1,(-len(a)-1),-1):
#     sum.append(a[i])
# if sum==a:
#     print("palendrom")
# else:
#     print('not palendrome')


# a = ['n','a','y','a','n']
# b=a.reverse()
# if a==b:
#     print('palendrome')
# else:
#     print('not palendrome')




# a = [1, 0, 0, 1, 1, 0, 1, 1]
# sum=2
# for i in range(-1,(-len(a)-1),-1):
#     if (a[i])==1:
#         sum*=(a[i])
# print(sum)

# ############################ sum of the nested list
# a = [
#     [78, 76, 94, 86, 88],
#     [91, 71, 98, 65, 76],
#     [95, 45, 78, 52, 49]
# ]
# sum=0
# for i in a:
#     for i in a:
#         sum=i+sum
# print(sum)


########################### average of nested list
# a = [
#     [78, 76, 94, 86, 88],
#     [91, 71, 98, 65, 76],
#     [95, 45, 78, 52, 49]
# ] 
# sum=0
# total=0
# for i in a:
#     for j in i:
#         sum+=j
#         total+=1
# print(sum/total)




####################################### Total sum
# a = 30
# Output=[]
# n = [10, 11, 12, 13, 14, 17, 18, 19] 
# for i in n:
#     for j in n:
#         if i+j==a:
#             Output.append([i,j])
# print(Output)



# a = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
# b=a.split('over')
# print(b)


####################### list sum of all elements 
# a=[1,1,1,1,1,1,1,1,1,1,]
# total=0
# for i in a:
#     total+=i
# print(total)


#################### list multiplication
# a=[5,5]
# total=1
# for i in a:
#     total*=i
# print(total)



############## largest from list
# a=[2,3,4,5,1,8,9]
# greatest=0
# for i in a:
#     if i>greatest:
#         greatest=i
# print(greatest)



######################## list smallest
# a=[2,3,4,5,3,8,9]
# smallest=a[0]
# for i in a:
#     if i<smallest:
#         smallest=i
# print(smallest)



#################################### ascending of  tuple

# a=[(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]
# for i in a:
#     b=i[-1]
# print(a)



# ################### removing duplicate from the list
# a=[1,2,1,21,2,3,4,3,4,3,4,5,6,7,8,7,6,5,8,9,5,4,3,5]
# b=[]
# for i in a:
#     if i not in b:
#         b.append(i)
# print(b)



# ########################  check is list empty or not
# a=[]
# b=0
# for i in a:
#     b+=1
# if b==0:
#     print('given list is empty')
# else:
#     print('given list is not empty')



################################ coping to the list
# a=[1,2,1,21,2,3,4,3,4,3,4,5,6,7,8,7,6,5,8,9,5,4,3,5]
# b=a
# print(b)



# a="The quick brown fox jumps over the lazy dog"
# b=a.split()
# for i in b:
#     if (len(i)) >= 3:
#         print(i,end='')



##################3 Resource Q11
# a=[1,6,7]
# b=[4,2,4,8]
# c=0
# for i in a:
#     if i in b:
#         c+=1
# if c==(1 or c>=1):
#     print('true')
# else:
#     print('None')



################################################################ removing special elements from a list
# a=['Red', 'Green', 'White', 'Black', 'Pink', 'Yellow']
# b=[]
# c=0
# for i in a:
#     if c==(0 or 4 or 5):
#         continue
#     else:
#         b.append(i)
#     c+=1
# print(b)


# #################################################### removing even number from the list
# a=[1,2,3,4,5,6,7,8,9,11,22,33,44,55,66,77,88,99,12]
# for i in a:
#     if i%2==0:
#         a.remove(i)
# print(a)



###################### code dope      taking input and adding them in list
# a=[]
# for i in range(1,11):
#     b=int(input(''))
#     a.append(b)
# print(a)



# Take 10 integer inputs from user and store them in a list. Again ask us tell user whether that number is present in list or not.
# a=[]
# for i in range(1,11):
#     b=int(input())
#     if b in a:
#         print('i is already in list')
#     else:
#         print('it is not in list')
#     a.append(b)
# print(a)



#take input from the user copy all the elements in another list but in reverse order.
# a=[]
# for i in range(1,11):
#     b=int(input())
#     a.append(b)
# c=a.reversed
# print(c)



########################## sum of list
# a=[1,2,3,4,5,6,7,8,9,10]
# sum=0
# for i in a:
#     sum+=i
# print(sum)



###################### product of list
# a=[5,5,5]
# product=1
# for i in a:
#     product*=i
# print(product)



####################   smallest and gretest number
# a=[1,2,3,4,5,6,7,6,5,88,44,33,66,55,34,23]
# b=0
# for i in a:
#     if i>b:
#         b=i
# print(b,'This is greatest nmber')
# a=[1,2,3,4,5,6,7,6,5,88,44,33,66,55,34,23]
# c=7
# for i in a:
#     if i<b:
#         b=i
# print(c,'is smallest')




############################  converting nested list into flat lis




# a = [1, 1, 1, 2, 2, 3, 3, 4, 4]
# for i in a:
#   if a.count(i)>1:
#     a.remove(i)
# for i in a:
#   if a.count(i)>1:
#     a.remove(i)
# print(a)


a=int(input(''))
b=int(input(''))
c=int(input(''))
asd=a
for i in range(b):
  asd+=b
print(asd)