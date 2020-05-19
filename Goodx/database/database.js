import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("data.db");

const queryHelper = (query, args) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        query,
        args,
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const init = () => {
  queryHelper(
    "CREATE TABLE IF NOT EXISTS  product (id INTEGER PRIMARY KEY NOT NULL,category TEXT NOT NULL , title TEXT NOT NULL , description TEXT NOT NULL , price INTEGER NOT NULL , phoneNumber INTEGER NOT NULL ,type TEXT NOT NULL );",
    []
  );
};

export const AddProducts = (
  category,
  title,
  description,
  price,
  phoneNumber,
  type
) => {
  return queryHelper(
    "INSERT INTO product (category,title,description,price,phoneNumber,type) VALUES(?,?,?,?,?,?)",
    [category, title, description, price, phoneNumber, type]
  );
};

export const FetchProducts = (type) => {
  return queryHelper(`SELECT * FROM product WHERE type = '${type}'`, []);
};

export const DeleteProducts = (title, description, type) => {
  return queryHelper(
    `DELETE FROM product WHERE title='${title}' AND description= '${description}' AND type ='${type}'`,
    []
  );
};
