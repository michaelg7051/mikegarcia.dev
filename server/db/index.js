const fs = require('fs');
const path = require('path');
const sqlite = require('better-sqlite3');

const dbFile = "w3s-dynamic-storage/database.db";

// Initialize the database
const dbFileExists = fs.existsSync(dbFile);
const db = new sqlite(path.resolve(dbFile), {fileMustExist: false});

const dbSetup = () => {
  const stmt = db.prepare(`CREATE TABLE Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, subject TEXT, message TEXT, createdAt INTEGER)`);
  stmt.run();
};
if (!dbFileExists) {
  dbSetup();
}

const saveMessage = async (entry) => {
  let status = false;

  try {
    const { name, email, subject, message } = entry;
    const stmt = db.prepare('INSERT INTO Messages (name, email, subject, message, createdAt) VALUES (?, ?, ?, ?, ?)');
    stmt.run(name, email, subject, message, Date.now());
    status = true;
  } catch (e) {
    console.error(e);
  }

  return status;
};

module.exports = {
  saveMessage,
};
