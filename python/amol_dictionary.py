############ meraki  questions
#  q1
#a={1:10, 2:20}
# b={3:30,2:40}
# c={5:50,6:60}
# a.update(b)
# a.update(c)
# print(a)


##### Q2
# dict={'name':'amol','age':21}
# a=input('')
# if a in dict:
#     print('exist')
# else:
#     print('not exist')



##### q3
# my_dict = {
#         'data1':100,
#         'data2': -54,
#         'data3': 247
#        } 
# a=0
# for i in my_dict.values():
#     a+=i
# print(a)


######### q8

# a=[]
# b=[]
# for i in range(10):
#         c=str(input('Enter student name  '))
#         d=int(input('enter student marks  '))
#         a.append(c)
#         b.append(d)
# e=dict(zip(a,b))
# print(e)


############### Q9
# a="MISSISSIPPI"
# keys=[]
# values=[]
# for i in a:
#         b=a.count(i)
#         values.append(b)
#         keys.append(i)
# c=dict(zip(keys,values))
# print(c)

# a="MISSISSIPPI"
# V = {}
# for i in a:
#         V[i] = a.count(i)
# print(V)


############### Q10
# a=  {
#    'Alex': ['subj1', 'subj2', 'subj3'], 
#    'David': ['subj1', 'subj2']}
# b=a.values()
# print(len(b))


############## Q11

# a = {
#     'a':50, 
#     'b':58, 
#     'c':56,
#     'd':40, 
#     'e':100, 
#     'f':20
#     }
# b=[]
# max=[]
# for i in a.values():
#         b.append(i)
# for i in range(3):
#         max(b)
#         max.append(c)
#         b.pop(c)
# print(max)


# ################# Q14
# ascending of values
# a={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50}
# b=sorted(a.items(),key=lambda x:x[1])
# c=dict(b)
# print(c)

# # ascending of keys
# a={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50}
# b=dict(sorted(a.items()))
# print (b)
# c=dict(b)
# print(c)


# a,b={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50},{}
# for i in a:
#     b[a[i]]=i
# print(b)

################ ########################      w3 resources ###############
# Q2
#  a={0: 10, 1: 20}
# a[2]=30
# print(a)


# a.update({3:40})
# print(a)


# Q3
# dic1={1:10, 2:20}
# dic2={3:30, 4:40}
# dic3={5:50,6:60}
# dic1.update(dic2)
# dic1.update(dic3)
# print(dic1)



#Q6
# n=int(input("Input a number "))
# d = dict()
# for x in range(1,n+1):
#     d[x]=x*x
# print(d)



#Q7
# a=dict()
# for i in range(16):
#         a[i]=i*i
# print(a)


#Q12
# a={'a':1,'b':2,'c':3,'d':4}
# a.pop('a')
# print(a)

# del a['b']
# print(a)


#Q13
# keys = ['red', 'green', 'blue']
# values = ['#FF0000','#008000', '#0000FF']
# a=dict(zip(keys,values))
# print(a)



#Q14
# a={'red':'#FF0000',
# 'green':'#008000',
# 'black':'#000000',
# 'white':'#FFFFFF'# for i in sorted(a):
#     print(i,a[i])



#Q24
# a='w3resource'
# b={}
# for i in a:
#     c=a.count(i)
#     b[i]=c
# print(b)


#Q


# Number to roman
# a={1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',40:'XL',50:'L',90:'XC',100:'C',400:'CD',500:'D',900:'CM',1000:'M'}
# b=int(input("enter a int num: "))
# d=[1000,900,500,400,100,90,50,40,10,9,8,7,6,5,4,3,2,1]
# for i in d:
#     if b!=0:
#         c=b//i
#         if c!=0:
#             for j in range(c):
#                 print(a[i],end="")
#         b%=i






# all questions of meraki once again
# #q1
# dic1={1:10, 2:20}
# dic2={3:30,2:40}
# dic3={5:50,6:60}
# dic1.update(dic2)
# dic1.update(dic3)
# print(dic1)

#Q2
# dict={'name':'Raju','marks':56}
# input=input()
# if input in dict:
#     print('exist')
# else:
#     print('not exist')

#Q3
# a= {
#         'data1':100,
#         'data2': -54,
#         'data3': 247
#        }
# v_sum=0
# for i in a.values():
#     v_sum+=i
# print(v_sum)


#Q4
# Dic= {
#         1: 'NAVGURUKUL',
#         2: 'IN',  
#   	    3:{    
#              'A' : 'WELCOME',
#              'B' : 'To',
#              'C' : 'DHARAMSALA'
#             }
#         }
# for i in Dic:
#     if i==3:
#         del Dic[i] ['A']
# print(Dic)


#Q5
# a=['one','two','three','four','five']
# b=[1,2,3,4,5,]
# n_dic={}
# for i in range(len(a)):
#     n_dic[a[i]]=b[i]
# print(n_dic)

#Q6
# dic={
#     'ball':'red',
#     'bat':4,
#     'wickets':8,
#     'ball':'green',
#     'bat':3
#     } 
# print(dic)

#Q7
# a=[
#      {"first":"1"}, 
#      {"second": "2"}, 
#      {"third": "1"}, 
#      {"four": "5"}, 
#      {"five":"5"}, 
#      {"six":"9"},
#      {"seven":"7"}
# ] 
# b=[]
# for i in a:
#     for j in i.values():
#         if j not in b:
#             b.append(j)
# print(b)

#Q8
# a={}
# for i in range(10):
#     b=str(input('Enter name of student '))
#     c=int(input('Enter marks '))
#     a[b]=c
# print(a)

#Q9
# a="MISSISSIPPI"
# b={}
# for i in a:
#     b[i]=a.count(i)
# print(b)


#Q10
# dict =  {
#    'Alex': ['subj1', 'subj2', 'subj3'], 
#    'David': ['subj1', 'subj2']}
# count=0
# for i in dict.values():
#     for j in i:
#         count+=1
# print(count)


#Q11
# a = {
#     'a':50, 
#     'b':58, 
#     'c':56,
#     'd':40, 
#     'e':100, 
#     'f':20
#     }
# b=a.values()
# print(b)

#Q12
# a={}
# for i in range(1,16):
#     a[i]=i*i
# print(a)

# a={'bijender':45,'deepak':60,'param':20,'anjili':30,'roshini':50}
# b=sorted(a.items(),key=lambda x:x[1])
# c=dict(b)