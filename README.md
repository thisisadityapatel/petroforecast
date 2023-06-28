# PetroForecast

<p align="center">
  <kbd>
    <img src="./edverdo.gif" alt="Alt Text" width="300" style="border: 2px solid gray">
  </kbd>
</p>

Eduardo Saverin (context: mark zuckerberg's friend) made 300k during his summer at harvard betting on heating oil futures, crazy! Built this full stack machine learning project to visualize and predict the data and to understand his bet from a prespect of smart analytics.

## Features

- Accessing over 5000 data points of US heating oil futures for precise analytics.
- Regression model to predict future heating oil prices.
- Time-Series Analysis for future predictions
- Interactive highly scalable dashboard for data visualization and analysis.
- Input open, high, low, and potential volume estimates to fine-tune your predictions.

## Technologies Used

- Backend: Python FastAPI, SQLite3 database for seamless data management.
- Machine Learning: Scikit library for training accurate prediction models.
- Time Series: Prophet Library by Facebook (Meta)
- Frontend: React and Recharts for a captivating and intuitive user interface.

## Installation

Still working on dockerdizing everything to make it easier to install and run this project, but till then if you have the right dependencies, feel free to install.

Clone & Open the repository:
```shell
git clone https://github.com/your-username/petroforecast.git
cd petroforecast
```

Initiate Backend
```shell
cd backend
python3 -m uvicorn main:app --reload
```

Initiate Frontend
```shell
cd frontend/pretroforecast
npm run dev
   ```

Then Open application @ [http://localhost:5173](http://localhost:5173)

