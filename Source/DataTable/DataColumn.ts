export class DataColumn {

  private _columnName: string;
  public get ColumnName(): string {
    return this._columnName;
  }

  private _rows: string[];
  public get Rows(): string[] {
    return this._rows;
  }

  public get RowCount(): number {
    return this._rows.length;
  }

  private _sumOfRows: number = 0;
  public get SumOfRows(): number {
    return this._sumOfRows;
  }

  public get AvgOfRows(): number {
    const avg = this._sumOfRows / this._countOfRowsWithNumbers;
    return +avg.toFixed(2);
  }

  private _countOfRowsWithNumbers: number = 0;

  constructor(columnName: string, columnValuesAsCsv) {
    this._columnName = columnName;
    this._rows = [];
    this.AddRows(columnValuesAsCsv);
  }

  private AddRows(columnValuesAsCsv: string) {
    if (columnValuesAsCsv) {
      const rowList = columnValuesAsCsv.split(',');
      rowList.forEach((rowValue: string) => {
        this.AddRow(rowValue);
      });
    }
  }

  private UpdateSumOfAllRows(rowValue: string) {
    if (!isNaN(+rowValue)) {
      this._sumOfRows += +rowValue;
      this._countOfRowsWithNumbers++;
    }
  }

  public AddRow(rowValue: string) {
    this._rows.push(rowValue);
    this.UpdateSumOfAllRows(rowValue);
  }
}