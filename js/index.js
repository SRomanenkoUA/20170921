'use strict';
// модель сущности - заполнение
  const essencePoint = new essenceCreate(
        'TR_StarterWebApp',
        'DBP8.sqlite3',
        'CREATE TABLE IF NOT EXISTS DBP8 (nameActive TEXT,dateIn TEXT, qty INT, price INT)',
        'INSERT INTO DBP8 VALUES ("@Param1", @Param2, @Param3, @Param4)',
        'SELECT nameActive, dateIn, qty, price FROM DBP8',
        'DELETE FROM DBP8 WHERE (nameActive="@Param1")',
        'WHERE (nameActive="@Param1")',
        'sqlite3',
        {items: [
            {nameActive: "1", dateIn: '22.09.2017', qty: 0, price: 0}]}
            );

let dbDriver;
const configSQLExpress = {
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
function essenceCreate(vname, vdatabaseName, vSQLCreate, vSQLInsert, vSQLSelect, vSQLDelete, vBlock, vDriver, vdata) {
        this.name = vname;
        this.database = vdatabaseName;
        this.SQLCreate = vSQLCreate;
        this.SQLInsert = vSQLInsert;
        this.SQLSelect = vSQLSelect;
        this.SQLDelete = vSQLDelete;
        this.SQLBlock = vBlock;
        this.dbDriverModel = vDriver;
        this.dataJSON = vdata;
        this.db;
    } // модель сущности - создание структуры
function runSQLToDBDriver(SQLText, typeDB) {
    switch (typeDB){
        case 'sqlite3': //https://www.w3resource.com/node.js/nodejs-sqlite.php
           db.run(SQLText);
        break;
        case 'orecale12':
            db.run(SQLText);
            break;
    }
} // Выполняю запрос в зависимости от драйвера БД
function dbRunSQL(SQLText) {
    try {
        runSQLToDBDriver(SQLText, essencePoint.dbDriverModel);
    }
    catch (e)
        {
            console.log('(КТ.001) Ошибка при выполнении запроса к БД ['+SQLText+']: '+e.message);
        }
} // (КТ.001) [SQL] - выполнение запроса без параметров
function dbRunSQLParam(SQLText, ParamCount, Params) {
        let paramName="@Param";
        for (let cntParam=0; cntParam<=ParamCount; cntParam++){
        paramName = paramName + cntParam.toString();
        SQLText.replace(paramName,Params[cntParam]);
    }
    console.log('(КТ.002) Окончательный запрос для выполнения: '+SQLText);

    try {
        runSQLToDBDriver(SQLText, essencePoint.dbDriverModel);
    }
    catch (e)
    {
        console.log('(КТ.001) Ошибка при выполнении запроса к БД ['+SQLText+']: '+e.message);
    }
} // (КТ.002) [SQL] - выполнение запроса с параметрами (запрос, кол.параметров, массив с параметрами)
function clearDataJSON(){
    essencePoint.dataJSON.items.splice(0,essencePoint.dataJSON.items.length); // обнуляю полностью
}
function pushToJSON(nameActive,dateIn, qty, price) {
    let item = {nameActive: nameActive, dateIn: dateIn, qty: qty, price: price};
    essencePoint.dataJSON.item.push(item);
}
function dbSelect(SQLText) {
    let addRowCount=0;
    switch (essencePoint.dbDriverModel) {
        case 'sqlite3':
            dbDriver.all(SQLText, (err, allRows) => {
                allRows.forEach(({first, last, address}) => {
                    pushToJSON({nameActive}, {dateIn}, {qty}, {price});
                    addRowCount++;
                })
            });
            break;
        case 'SQLExpress':
            dbDriver.connect(configSQLExpress, function (err) {
                if (err) console.log(err.message);
                var request = new dbDriver.Request();
                request.query(SQLText, function (err, recordset) {
                    if (err) console.log(err.message);
                    else
                        recordset.forEach(({first, last, address}) => {
                            pushToJSON({nameActive}, {dateIn}, {qty}, {price});
                            addRowCount++;
                        })
                });
            });
            break;
    }
    Console.log('Количество добавленный строк в JSON: '+addRowCount.toString());
}
switch (essencePoint.dbDriverModel){
    case 'sqlite3':
        dbDriver  = require('sqlite3').verbose();
        essencePoint.db = new dbDriver.Database(essencePoint.database);
        clearDataJSON();
        break;
    case 'SQLExpress':
        dbDriver = require('mssql');
        break;
} // (Process_001) создаю драйвер базы данных

