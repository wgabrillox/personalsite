import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "/build")));
const port = process.env.PORT || 8000;

const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(process.env.DB_HOST, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    const db = client.db("WarrenInfo");

    await operations(db);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

app.get("/api/data", async (req, res) => {
  withDB(async (db) => {
    const experiences = await db
      .collection("experiences")
      .find()
      .toArray()
      .then((docs) => {
        return docs;
      });

    const skills = await db
      .collection("skills")
      .find()
      .toArray()
      .then((docs) => {
        return docs;
      });

    res.status(200).send({ experiences, skills });
  }, res);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
