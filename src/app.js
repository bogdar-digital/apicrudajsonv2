const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const methodOveride = require("method-override");

const app = express();

// importing routes
const customerRoutes = require("./routes/customer");
const { urlencoded } = require("express");

//settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "123456",
      port: 3306,
      database: "crudenodejsmysql",
    },
    "single"
  )
);
app.use(express.urlencoded({ extended: false }));

//method override
app.use(methodOveride("_method"));

//for body request in api
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//routes
app.use("/", customerRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});
