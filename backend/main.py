from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle as pk
import pandas as pd
from datetime import date
import sqlite3 as database
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Metric(BaseModel):
    Open: float
    High: float
    Low: float
    Vol: float

class DateRange(BaseModel):
    StartDate: str
    EndDate: str

def dict_factory(cursor, row):
    d = {}
    d['Date'] = row[0]
    d['Price'] = row[1]
    d['Open'] = row[2]
    d['High'] = row[3]
    d['Low'] = row[4]
    d['Vol'] = row[5]
    return d

@app.get('/loadinitialdata/')
def heating_oil_data_initial():
    try:
        conn = database.connect('database.db')
        conn.row_factory = dict_factory
        cursor = conn.cursor()
        cursor.execute('SELECT Date, Price, Open, High, Low, Vol FROM heatingoil WHERE Date >= "2007-12-24" ORDER BY Date ASC')
        rows = cursor.fetchall()
        json_data = json.dumps(rows)
        conn.close()
        return json_data
    except Exception as e:
        print(e)
        return {"failed"}

@app.post('/predict/')
def heating_oil_prediction(metric: Metric):
    heating_oil_model = pk.load(open("heating_oil_model.pkl", "rb"))
    testing = pd.DataFrame({'Open':[metric.Open], 'High':[metric.High], 'Low':[metric.Low], 'Vol': [metric.Vol]})
    result = heating_oil_model.predict(testing)
    return ({"prediction" : result[0]})

