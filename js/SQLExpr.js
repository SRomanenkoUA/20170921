// https://www.npmjs.com/package/mssql

const sql = require('mssql');

const config = {
    user: 'sa',
    password: '12101976',
    server: 'localhost',
    database: 'CYLINDERS',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

function connectSQL(SQLText) {
    sql.connect(config, function (err) {
        if (err) console.log(err.message);
        var request = new sql.Request();
        request.query(SQLText, function (err, recordset) {
            if (err) console.log(err);
            else console.dir(recordset);
        });
    });
}

connectSQL('select * from DocInfo');
console.log('Ok');
