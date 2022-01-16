# from random import betavariate
# import requests,json,os
# from bs4 import BeautifulSoup
# a=requests.get('https://www.imdb.com/india/top-rated-indian-movies/')
# b=BeautifulSoup(a.text,"html.parser")
# def scrape_top_list():
#     lister=b.find('div',class_="lister")
#     tboday=lister.find('tbody',class_="lister-list")
#     trs=tboday.find_all('tr')
#     movies_name,movies_url=[],[]
#     for tr in trs:
#         c=tr.find('td',class_="titleColumn").get_text()
#         title=tr.find('td',class_="titleColumn").a.get_text()
#         movies_name.append(title)
#         l=tr.find('td',class_="titleColumn").a['href']
#         link='https://www.imdb.com/'+l
#         movies_url.append(link)
#     def scrape_movie_cast():
#         for i in range(len(movies_name)):
#             print(i+1,':-',movies_name[i])
#         iput=int(input('enter which movies full cast do you want:- '))
#         print(movies_name[iput-1])
#         fi=movies_url[iput]
#         file=fi[-10:-1:]+'_cast.json'
#         if os.path.exists(file):
#             opn=open(file)
#             c=json.load(opn)
#             print(c)
#         else:
#             cast={}
#             from bs4 import BeautifulSoup
#             rquest=requests.get(movies_url[iput]+'fullcredits?ref_=tt_cl_sm#cast')
#             st=BeautifulSoup(rquest.text,'html.parser')
#             div=st.find('div',id="fullcredits_content")
#             table=div.find('table',class_="cast_list").find('tbody')
#             trs=table.find('tr').find('td')
#             print(trs            # trs=table.find_all('tr'
#             # for tr in trs:
#             #     ve=tr.find('td',class_="castlist_label")
#                 # print(ve)
#     scrape_movie_cast()
# scrape_top_list()



a=[12,345,234,42,56,44,65]
for n in a:
    while(n>0):
        n=n//10
        print(n)