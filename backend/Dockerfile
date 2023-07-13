FROM python:3.8

RUN mkdir /code

WORKDIR /code

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY ./heating_oil_model.pkl .
COPY ./database.db .
COPY ./main.py .

CMD ["uvicorn", "main:app", "--host=0.0.0.0", "--port=80"]