# import json
# from os import path
# while True:
#     iput=str(input('a or u or d or g'))
#     if iput=='a':
#         data_file={}
#         name=str(input('enter your name '))
#         mail=str(input('enter your Mail '))
#         no=int(input('enter number '))
#         dict={}
#         dict["Name"]=name
#         dict["Mail"]=mail
#         dict['Number']=no
#         data_file[name]=dict
#         a=open("data.json","a")
#         a=json.dump(data_file,a,indent=2)




#     elif iput=='u':
#         a=open("data.json")
#         b=json.load(a)
#         # print(b)u
#         iput=input('enter your mail ')
#         for x in b.values():
#             nam_change=input("Enter your updated name :- ")
#             for y in x:
#                 if x.get(y)==iput:
#                     store=x
#                     store["Name"]=nam_change

                    
        
#         a=open("data.json","a")
#         a=json.dump(b,a,indent=2)
#         # for i in b:
#         #     print(i)
#             # if iput==b[i]["Mail"]:
#             #     data_file={}
#             #     isafd=str(input('enter your updated name '))
#             #     name=isafd
#             #     mail=iput
#             #     no=b[i]["Number"]
#             #     dict={}
#             #     dict["Name"]=name
#             #     dict["Mail"]=mail
#             #     dict['Number']=no
#                 # data_file
#             # a=open("data.json","a")
#             # a=json.dump(store,a,indent=2)



        


    
    
    
    
    
#     # elif iput=='g':
#     #     a=open("data.json")
#     #     b=json.load(a)
#     #     print(b)






import json
iput=input()
if iput=='a':








    
    with open("data.json","r") as obj:
        d=json.load(obj)
    print("Check your Bio Data or not?")
    user=input("Enter your Username :- ")
    Pass=input("Enter your Password :- ")
    flag = 0
    for x in d.values():
        for y in x.values():
            for z in y:
                if y.get(z) == user or y.get(z) == Pass:
                    print("Success")
                    flag +=1               
        if flag == 2:
            break
        else:
            print("Your username or password does not exist please try again ")
            break