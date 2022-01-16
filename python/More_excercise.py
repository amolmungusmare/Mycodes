# #Q1
# # for i in range(1001):
# #     if i%3==0:
# #         print('nav')
# #     elif i%7==0:
# #         print('gurukul')
# #     elif i%21==0:
# #         print('navgurukul')
# #     else:
# #         print(i)



# #Q2
# # a=int(input('enter no of students;- '))
# # b=int(input('enter expention of a student '))
# # c=a*b
# # if c<=5000:
# #     print('Hum budget ke andaar hai...')
# # else:
# #     print('Hum budget ke bahar hai...')


# #Q3
# # a=input('enter your password ')

# # if len(a)>=8 and len(a)<=16:
# #     if '$' in a and (2 or 8) in a and ('A' or 'B') in a:
# #         print('strong')
# # else:
# #     print('weak')


# #Q4
# # a=int(input('enter no. '))
# # b=int(input('enter no. '))
# # c=int(input('enter no. '))
# # if a>b and a<c:
# #     print(a)
# # elif b>a and b>c:
# #     print(b)
# # else:
# #     print(c)


# #Q5
# # ipt=int(input('enter no..'))
# # fact=1
# # for i in range(1,ipt+1):
# #     fact*=i
# # print(fact)


# #Q6
# # a=["Rishabh", "Rishabh", "Abhishek", "Rishabh", "Divyashish", "Divyashish"]
# # b=[]
# # for i in a:
# #     if i not in b:
# #         b.append(i)
# # print(b)



# #Q7
# # list1 = [1, 342, 75, 23, 98]
# # list2 = [75, 23, 98, 12, 78, 10, 1]
# # n=[]
# # for i in list2:
# #     if i in list1 and list2:
# #         n.append(i)
# # print(n)


# #Q8
# # list1 = [1, 5, 10, 12, 16, 20]
# # list2 = [1, 2, 10, 13, 16]
# # n=[]
# # for i in list1:
# #     if i not in n:
# #         n.append(i)
# # for j in list2:
# #     if j not in n:
# #         n.append(j)
# # print(n)


# #Q9
# # def harshad(is_harshad_number):
# #     n=list(str(is_harshad_number))
# #     har=0
# #     for i in n:
# #         har+=int(i)
# #     if is_harshad_number%har==0:
# #         print(j)
# # for j in range(1,1001):
# #     harshad(j)


# #Q10
# # def max_marks(marks):
# #         max=0
# #         for i in marks:
# #             if i>max:
# #                 max=i
# #         print(max)
# # a=marks = [[45, 21, 42, 63], [12, 42, 42, 53], [42, 90, 78, 13], [94, 89, 78, 76], [87, 55, 98, 99]]
# # for marks in a:
# #     max_marks(marks)



# #Q11 debugging part
# #1
# # def numbers_less_than_twenty(list):
# #     counter = 0
# #     while counter < len(list):
# #         item = list[counter]
# #         if item > 20:
# #             list.remove(item)
# #         else:
# #             counter += 1
# #     return list

# # num_list = [12, 312, 42, 123, 5, 12, 53, 75, 123, 62, 9]
# # a=num_list.copy()

# # num_list_sub_20 = numbers_less_than_twenty(a)

# # print ("Initial list", num_list)
# # print ("List that doesn't contain numbers greate than 20", num_list_sub_20)




# #2
# # from random import randint

# # def win():
# #     print ('You win!')

# # def lose():
# #     print ('You lose!')

# # while True:
# #     player_choice = input('What do you pick? (rock, paper, scissors)')
# #     player_choice.strip()
# #     random_move = randint(0, 2)
# #     moves = ['rock', 'paper', 'scissors']
# #     computer_choice = moves[random_move]
# #     if player_choice == computer_choice:
# #         print ('Draw!')
# #     elif player_choice  == 'rock' and computer_choice == 'scissors':
# #         win()
# #     elif player_choice == 'paper' and computer_choice == 'scissors':
# #         lose()
# #     elif player_choice == 'scissors' and computer_choice == 'paper':
# #         win()
# #     elif player_choice == 'scissors' and computer_choice == 'rock':
# #         lose()
# #     elif player_choice == 'paper' and computer_choice == 'rock':
# #         win()
# #     elif player_choice == 'rock' and computer_choice == 'paper':
# #         lose()
# #     aGain = input('Do you want to play again? (y or n)').strip()
# #     if aGain == 'n':
# #         break




# #3
# # Cipher wheel with a function for finding an element in a list

# # find_in_list function defined here but not called
# def find_in_list(query, mainlist):
# # this function is used to find the position of the "query" in the "mainlist". If "query" is in the list then it returns its position, otherwise it returns None
#     mainlist_len = len(query)
#     range_for_loop = range(mainlist_len)
#     index = None
#     for i in range_for_loop:
#         element = mainlist[i]
#         if element == query:
#             index = i
#     return i
# # this should return the position of the "query" in the "mainlist"


# chars =         ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
# shifted_chars = ['c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b']

# # encrypt_message function defined here but not called
# def encrypt_message(plain_msg):
# # this fucnction takes "plain_msg" as an argument and print/return the encrypted message. The "plain_msg" is tranfered into "encrypted_msg" using "shifted_chars" list. Example, if plain_msg = "ng" then n => p, g => i  and hence encrypted_msg = "pi"
#     encrypted_msg = ""
#     for character in encrypted_msg:
#       # for character in msg
#         if character in chars:
#             char_index = find_in_list(character, chars)
#             new_char = shifted_chars[char_index]
#             encrypted_msg = encrypted_msg + new_char
#         else:
#             encrypted_msg = encrypted_msg + character

# # decrypt_message function defined here but not called
# def decrypt_message(encrypted_msg):
# # this fucnction takes "encrypted_msg" as an argument and print/return the encrypted message. The "encrypted_msg" is tranfered into "decrypted_msg" using "shifted_chars" list. Example, if encrypted_msg = "pi" then p => n, i => g  and hence decrypted_msg = "ng"
#     decrypted_msg = ""
#     for character in decrypted_msg:
#         if character in shifted_chars:
#             char_index = find_in_list(character, shifted_chars)
#             new_char = chars[char_index]
#             decrypted_msg = decrypted_msg + new_char
#         else:
#             decrypted_msg = decrypted_msg + character


# # methods should return or print the new messages.
# ############################################### Code starts from here ##################################################
# flag = True
# while flag == True:
#     choice = input("What do you want to do? 1. Encrypt a message 2. Decrypt a message  Enter `e` or `d` respectively!")
#     if choice == 'e':
#         plain_message = input("Enter message to encrypt??")
#         encrypt_message(plain_message)
#     elif choice == 'd':
#         encrypted_msg = input("Enter message to decrypt?")
#         decrypt_message(encrypted_msg)
#     else:
#         play_again = input("Do you want to try agian or Do you want to exit? (Y/N)")
#         if play_again == 'Y':
#             continue
#         elif play_again == 'N':
#             break



a=lambda d,s,f:d+f+s
print(a(2,4,6))