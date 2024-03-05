<p align="center">
  <kbd>
    <img src="./petroforecast.png" alt="Alt Text" width="500" style="border: 2px solid gray">
  </kbd>
  <kbd>
    <img src="./edverdo.gif" alt="Alt Text" width="310" style="border: 2px solid gray">
  </kbd>
</p>

Eduardo Saverin (facebook co-founder) made 300k during his summer at harvard betting on heating oil futures, crazy! Built this full stack machine learning project to visualize and predict the data and to understand his bet from a prespect of smart analytics.

## Technologies Used

- Backend: Python FastAPI, NumPy, SQLite3 database
- Machine Learning: Scikit library MultiVariable Regression Model
- Time Series: Prophet Library by Facebook (Meta)
- Frontend: React.js, Recharts.js, JavaScript
- Other: Docker, Docker-Compose

## Installation

The applicstion uses Docker Compose to containerize everthing and make it easier for anyone to setup. One prerequisite includes having docker on the device. You can install docker and docker-compose from [here.](https://www.docker.com/products/docker-desktop/)

```shell
docker-compose up
```

The application should be up and running on [http://localhost:3000](http://localhost:3000)
