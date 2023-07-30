import json
import datetime
from pymongo import MongoClient

cluster = MongoClient("mongodb+srv://test_user_si:fJIpx0aWU3jmxoX0@cluster0.e3hnp7s.mongodb.net/?retryWrites=true&w=majority")
db = cluster["Test"]
collection = db["announcements"]

with open('bse_announcements_data.json') as file:
    file_data = json.load(file)

for data in file_data:
    d = {}
    for key, value in data.items():
        if key in ("DT_TM","NEWS_DT","News_submission_dt","DissemDT"):
            d[key] = datetime.datetime.strptime(value.split(".")[0], '%Y-%m-%dT%H:%M:%S')
        else:
            d[key] = value
    collection.insert_one(d)
