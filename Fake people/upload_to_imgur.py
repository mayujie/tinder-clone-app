import requests

url = "https://api.imgur.com/3/image"

payload={'image': 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
files=[

]
headers = {
  'Authorization': 'Client-ID {{f723359bb1f1fe7}}'
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)