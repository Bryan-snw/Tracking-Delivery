import ConnectDB from "../../../lib/db";

export default async function handler(req, res) {
  const dbConnection = ConnectDB();

  try {
    dbConnection.query("SELECT * FROM resi", function (err, result) {
      res.status(200).json({ resi: result });
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ name: err });
  }
}
