import os
from dotenv import load_dotenv
import pymongo
import pandas as pd
import torch
import ast
import numpy as np

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
df_path = os.getenv("DF_PATH_FILTERS")

client = pymongo.MongoClient(MONGODB_URI)

database_name = "hackupc"
collection_name = "filters"


db = client[database_name]
collection = db[collection_name]
db.drop_collection(collection_name)
new_collection = db.create_collection(collection_name)

df = pd.read_csv(df_path)
df = df.reset_index()

embedding_cols = [col for col in df.columns if col[:10] == "embedding_" ]

df["embedding"] = df[embedding_cols].values.tolist()

cols = ["color","person","season","type","pattern", "embedding"]
df = df[cols]
df = df.reset_index()
data_to_upload = df.to_dict(orient="records")

print(data_to_upload)

result = collection.insert_many(data_to_upload)

print("Data uploaded successfully")