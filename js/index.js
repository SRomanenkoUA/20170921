'use strict';
// модель сущности - заполнение
    const essencepoint = new essenceCreate(
        'Справочник П8',
        'DBP8.sqlite3',
        'CREATE TABLE IF NOT EXISTS DBP8 (nameActive TEXT,dateIn TEXT, qty INT, price INT)',
        'INSERT INTO DBP8 VALUES ("@Param1", @Param2, @Param3, @Param4)',
        'SELECT nameActive, dateIn, qty, price FROM DBP8',
        'DELETE FROM DBP8 WHERE (nameActive="@Param1")',
        '');

function essenceCreate(vname, vdatabaseName, vSQLCreate, vSQLInsert, vSQLSelect, vSQLDelete, vBlock) {
        this.name = vname;
        this.database = vdatabaseName;
        this.SQLCreate = vSQLCreate;
        this.SQLInsert = vSQLInsert;
        this.SQLSelect = vSQLSelect;
        this.SQLDelete = vSQLDelete;
        this.SQLBlock = vBlock;
    } // модель сущности - создание структуры
function dbRunSQL(SQLText) {
    try {
    db.run(SQLText);
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
        db.run(SQLText);
    }
    catch (e)
    {
        console.log('(КТ.001) Ошибка при выполнении запроса к БД ['+SQLText+']: '+e.message);
    }
} // (КТ.002) модель сущности - SQL - выполнение запроса с параметрами

const sqlite3  = require('sqlite3').verbose();
const db = new sqlite3.Database(essencepoint.database);