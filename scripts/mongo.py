import os
from dotenv import load_dotenv
import pymongo
import pandas as pd
import torch
import ast
import numpy as np

load_dotenv()


df_path = os.getenv("DF_PATH")
df = pd.read_csv(df_path)
df = df.reset_index()

embedding_cols = [col for col in df.columns if col[:10] == "embedding_" ]

df["embedding"] = df[embedding_cols].values.tolist()

cols = ["link_1", "link_2", "link_3", "embedding"]
df = df[cols]
for col in cols:
    df = df.drop_duplicates(subset=[col])
df = df.reset_index(drop=True)
df = df.reset_index()
data_to_upload = df.to_dict(orient="records")

print(len(df))
print(df.head())


MONGODB_URI = os.getenv("MONGODB_URI")
client = pymongo.MongoClient(MONGODB_URI)

database_name = "hackupc"
collection_name = "clothings"


db = client[database_name]
collection = db[collection_name]
db.drop_collection(collection_name)
new_collection = db.create_collection(collection_name)

result = collection.insert_many(data_to_upload)

print("Data uploaded successfully")


# MongoDB search index
# {
#   "fields": [
#     {
#       "numDimensions": 512,
#       "path": "embedding",
#       "similarity": "cosine",
#       "type": "vector"
#     }
#   ]
# }