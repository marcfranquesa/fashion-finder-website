import os
from dotenv import load_dotenv
import pymongo
import pandas as pd

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
df = pd.DataFrame(df.values.reshape(-1, 1), columns=["link"])
df = df.dropna()
df = df.reset_index()

print(df)



data_to_upload = df.to_dict(orient="records")
result = collection.insert_many(data_to_upload)

print("Data uploaded successfully")