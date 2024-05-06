import datetime
import pymongo
from dotenv import load_dotenv
import os

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")

# connect to your Atlas cluster
client = pymongo.MongoClient(MONGODB_URI)

coll = client["hackupc"]["clothings"]

doc = coll.find_one()

print(doc["link_1"])

embedding = doc["embedding"]

# define pipeline
pipeline = [
  {
    '$vectorSearch': {
      'index': 'vector_index', 
      'path': 'embedding', 
      'queryVector': embedding, 
      'numCandidates': 150, 
      'limit': 10
    }
  }
]

# run pipeline
result = coll.aggregate(pipeline)

# print results
for i in result:
    print(i["link_1"])
 