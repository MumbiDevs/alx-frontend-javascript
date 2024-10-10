/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Suave",
  lastName: "Maina",
};

const newRowID: RowID = CRUD.insertRow(row);
const UpdatedRow: RowElement = { age: 34, ...row };

CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);
