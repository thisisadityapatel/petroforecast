import sqlite3 as database
from sqlite3 import Error
import pandas as pd

table_name = "heatingoil"
database_file = "database.db"
heatingoil_data_file = "data.csv"


def create_connection(db_file):
    conn = None
    try:
        conn = database.connect(db_file)
        print(f"version {database.version} database installed successfully")
    except Error as e:
        print("database creation failed")
        print(e)
    finally:
        if conn:
            conn.close()


def load_heatingoil_data(db_file, data_file):
    conn = None
    try:
        conn = database.connect(db_file)
        print("initiating heating oil payload upload")
        df = pd.read_csv(data_file)
        df.drop("Change %", inplace=True, axis=1)
        df["Vol"] = df["Vol"].str.replace("K", "").astype(float)
        query = f"Create table if not Exists {table_name} (Date date, Price float, Open float, High float, Low float, Vol float)"
        conn.execute(query)
        df.to_sql(table_name, conn, if_exists="replace", index=False)
        conn.commit()

    except Error as e:
        print("unable to connect to database")
        print(e)


if __name__ == "__main__":
    create_connection(database_file)
    load_heatingoil_data(database_file, heatingoil_data_file)
