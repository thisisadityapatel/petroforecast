from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
import pickle as pk
import pandas as pd
from datetime import date

app = FastAPI()

class Metric(BaseModel):
    Open: float
    High: float
    Low: float
    Vol: float

class DateRange(BaseModel):
    StartDate: str
    EndDate: str

@app.post('/predict/')
def heating_oil_prediction(metric: Metric):
    heating_oil_model = pk.load(open("heating_oil_model.pkl", "rb"))
    testing = pd.DataFrame({'Open':[metric.Open], 'High':[metric.High], 'Low':[metric.Low], 'Vol': [metric.Vol]})
    result = heating_oil_model.predict(testing)
    return ({"prediction:" : result[0]})

@app.post('/getprices')
def heating_oil_prices(daterange: DateRange):
    return {"testing": "testing"}

@app.post('/gethighlow')
def heating_oil_highlow(daterange: DateRange):
    return {"testing": "testing"}

@app.get('/getscatterplot')
def heating_oil_scatter():
    return {"testing": "testing"}

