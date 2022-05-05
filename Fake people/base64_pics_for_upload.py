import code
import os
import base64
import json
from aiohttp import Payload
from time import sleep

words = []
import requests

url = "https://api.imgur.com/3/image"

payload={}

headers = {
  'Authorization': 'Client-ID 7b52ce2156a7399'
}

directory = 'E:/Tinder/tinder-clone-app/Fake people'
for filename in os.listdir(directory):
    if filename.endswith(".jpg"): 
        with open(os.path.join(directory, filename), "rb") as image_file:
            print("Uploading: " + filename)
            files=[('image',(filename,open('E:/Tinder/tinder-clone-app/Fake people/'+filename,'rb'),'image/jpeg'))]
            response = requests.request("POST", url, headers=headers, data=payload, files=files)
            print(response.text)#debug
            #get the "link" from the response
            if response.status_code == "400":
                print("Too many requests. Waiting...")
                sleep(3600)
            else:
              link = json.loads(response.text)["data"]["link"]
              print("Link: " + link)
    else:
        continue