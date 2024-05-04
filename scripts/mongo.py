import os
from dotenv import load_dotenv
import pymongo
import pandas as pd
import torch
import ast
import numpy as np

load_dotenv()

connection_string = os.getenv("CONNECTION_STRING")
df_path = os.getenv("DF_PATH")

client = pymongo.MongoClient(connection_string)

database_name = "hackupc"
collection_name = "clothings"


db = client[database_name]
collection = db[collection_name]
db.drop_collection(collection_name)
new_collection = db.create_collection(collection_name)

df = pd.read_csv(df_path)
df = df.reset_index()
cols = ["link_1", "link_2", "link_3"]
df = df[cols]
df = df.reset_index()
data_to_upload = df.to_dict(orient="records")

print(df)

result = collection.insert_many(data_to_upload)

print("Data uploaded successfully")