import mysql from "mysql2/promise";

export default async function ConnectDB() {
  const dbConnection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "tracking_web",
  });
  return dbConnection;
}

export async function SpesifikData(column, table, condition, value) {
  const db = await ConnectDB();
  try {
    const data = await db.execute(
      `SELECT ${column} FROM ${table} WHERE ${condition}= '${value}'`
    );
    return data[0];
  } catch (error) {
    return error.message;
  }
}

export async function CariAll(column, table) {
  const db = await ConnectDB();
  try {
    const data = await db.execute(`SELECT ${column} FROM ${table}`);
    return data[0];
  } catch (error) {
    return error.message;
  }
}
