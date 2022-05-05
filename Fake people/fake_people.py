import requests
from time import sleep

url = "https://thispersondoesnotexist.com/image"

for i in range(51,200):
    response = requests.get(url)
    with open('E:/Tinder/tinder-clone-app/Fake people/fake_people-{}.jpg'.format(i), "wb") as file:
        file.write(response.content)
        file.close()
    print("fake_people-{}.jpg downloaded".format(i))
    sleep(1)

