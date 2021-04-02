import { DataColumn } from "./DataColumn";
import * as _ from "lodash";

export class DataTable {

  public Messages: string[];

  private _id: string;
  public get Id(): string {
    return this._id;
  }

  private _columns: DataColumn[];
  public get Columns(): DataColumn[] {
    return this._columns;
  }

  public get ColumnCount(): number {
    return this._columns.length;
  }

  public get RowCount(): number {
    return this._columns.length > 0 ? this._columns[0].Rows.length : 0;
  }

  constructor(id: string) {
    this._id = id;
    this.Messages = [];
    this._columns = [];
  }

  public AddColumn(columnName: string, columnValuesAsCsv: string) {
    this.Messages = [];

    if (this._columns.length > 0) {
      const expectRows = this._columns[0].Rows.length;

      let splitLength = 0
      if (columnValuesAsCsv !== "") {
        splitLength = columnValuesAsCsv.split(',').length;
      } 
      
      if (splitLength !== expectRows) {
        this.Messages.push(`New column rows must match existing column rows: ${expectRows}.`);
        return;
      }
    }

    const dataColumn = new DataColumn(columnName, columnValuesAsCsv);
    this._columns.push(dataColumn);
  }

  public AddRow(rowValuesAsCsv: string) {
    this.Messages = [];
    if (!rowValuesAsCsv) {
      this.Messages.push("Enter row values");
      return;
    }

    const rowsSplit = rowValuesAsCsv.split(',');
    if (rowsSplit.length !== this._columns.length) {
      this.Messages.push(`Enter a row with ${this._columns.length} columns`);
      return;
    }

    rowsSplit.forEach((rowValue: string, index: number) => {
      this._columns[index].AddRow(rowValue);
    })
  }

  public GetColumnsSums(): number[] {
    const sumList: number[] = [];
    this._columns.forEach((column: DataColumn) => {
      sumList.push(column.SumOfRows);
    });

    return sumList;
  }

  public GetColumnsAverages(): number[] {
    const avgList: number[] = [];
    this._columns.forEach((column: DataColumn) => {
      avgList.push(column.AvgOfRows);
    });

    return avgList;
  }

  public GetCopyOfDataTable() {
    return _.cloneDeep(this);
  }

  public ClearTable() {
    this._columns = [];
    this.Messages = [];
  }

  public Sort(columnIndexToSortOn: string, order: string): void {
    this.Messages = [];

    if(this.RowCount < 1) {
      this.Messages.push("There is no data to sort")
      return;
    }

    if (columnIndexToSortOn === ""  || +columnIndexToSortOn > this.Columns.length-1 || +columnIndexToSortOn < 0) {
      this.Messages.push(`Sort index must be between 0 and ${this.Columns.length-1}.`)
      return;
    }

    let columnsToRows: string[][]=[];
    columnsToRows = this.MapColumnsToRowsForSort();
    columnsToRows = this.PerformSort(columnsToRows, columnIndexToSortOn, order);

    // Update columns with sorted results
    columnsToRows.forEach((row, i) => {
      row.forEach((columnValue, j) => {
        this.Columns[j].Rows[i] = columnValue;
      });
    });
  }

  private MapColumnsToRowsForSort(): string[][] {
    const columnsToRows: string[][]=[];
    this._columns.forEach((columns: DataColumn) => {
      columns.Rows.forEach((row: string, index: number) => {
        if(columnsToRows.length < index+1) {
          columnsToRows.push([])
        };
        columnsToRows[index].push(row);
      });
    });

    return columnsToRows;
  }

  private PerformSort(columnsToRows: string[][], columnIndexToSortOn: string, order: string): string[][] {
    columnsToRows.sort((rowA: string[], rowB: string[]) => {
      if(rowA[columnIndexToSortOn] > rowB[columnIndexToSortOn]) {
        return order === "DESC" ? -1 : 1;
      }
      if(rowA[columnIndexToSortOn] < rowB[columnIndexToSortOn]) {
        return order === "DESC" ? 1: -1;
      }
      return 0;
    });

    return columnsToRows;
  }
}
