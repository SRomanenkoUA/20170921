'use strict';
// модель сущности - заполнение
    const essencePoint = new essenceCreate(
        'Справочник П8',
        'DBP8.sqlite3',
        'CREATE TABLE IF NOT EXISTS DBP8 (nameActive TEXT,dateIn TEXT, qty INT, price INT)',
        'INSERT INTO DBP8 VALUES ("@Param1", @Param2, @Param3, @Param4)',
        'SELECT nameActive, dateIn, qty, price FROM DBP8',
        'DELETE FROM DBP8 WHERE (nameActive="@Param1")',
        '',
        'sqlite3');

function essenceCreate(vname, vdatabaseName, vSQLCreate, vSQLInsert, vSQLSelect, vSQLDelete, vBlock, vDriver) {
        this.name = vname;
        this.database = vdatabaseName;
        this.SQLCreate = vSQLCreate;
        this.SQLInsert = vSQLInsert;
        this.SQLSelect = vSQLSelect;
        this.SQLDelete = vSQLDelete;
        this.SQLBlock = vBlock;
        this.dbDriverModel = vDriver
    } // модель сущности - создание структуры
function runSQLToDBDriver(SQLText, typeDB) {
    switch (typeDB){
        case 'sqlite3':
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
} // (КТ.001) модель сущности - SQL - выполнение запроса без параметров
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
} // (КТ.002) модель сущности - SQL - выполнение запроса с параметрами (запрос, кол.параметров, массив с параметрами)


switch (essencePoint.dbDriverModel){
    case 'sqlite3':
        const sqlite3  = require('sqlite3').verbose();
        const db = new sqlite3.Database(essencePoint.database);
        break;
    case 'orecale12':
        break;
} // создаю драйвер базы данных
