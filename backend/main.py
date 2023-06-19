from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle as pk
import pandas as pd

app = FastAPI()

class Metric(BaseModel):
    Open: float
    High: float
    Low: float
    Vol: float

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post('/heatingoil/')
def heating_oil_prediction(metric: Metric):
    heating_oil_model = pk.load(open("heating_oil_model.pkl", "rb"))
    testing = pd.DataFrame({'Open':[metric.Open], 'High':[metric.High], 'Low':[metric.Low], 'Vol': [metric.Vol]})
    result = heating_oil_model.predict(testing)
    return ({"prediction:" : result[0]})
