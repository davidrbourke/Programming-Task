import { DataTable } from "../DataTable/DataTable"

export default
{
    data() 
    {
        return {
            table: new DataTable("ABC"),

            tableId: "",

            columnName: "",

            columnValuesAsCsv: "",

            rowValuesAsCsv: "",

            sortColumnIndex: "",

            sortedTimes: 0
        }
    },

    methods:
    {
        onNewTable()
        {
            console.log(`New Table: ${this.tableId}`);
            this.table = new DataTable(this.tableId)
        },

        onAddColumn()
        {
            console.log(`AddColumn: ${this.columnName} = ${this.columnValuesAsCsv}`);
            this.table.AddColumn(this.columnName, this.columnValuesAsCsv);
        },

        onAddRow()
        {
            // Check number of columns being added
            // Check data types of columns being added
            console.log(`Add Row: ${this.rowValuesAsCsv}`);
            this.table.AddRow(this.rowValuesAsCsv);
        },

        onClear()
        {
            this.table.ClearTable();
            this.columnName = "";
            this.columnValuesAsCsv = "",
            this.rowValuesAsCsv = "";
        },

        onCopy()
        {
            let tableCopy: DataTable = Object.assign({}, this.table);
        },

        onSum()
        {
            const columnsSums = this.table.GetColumnsSums();
            console.log(`Sums: ${columnsSums}`);
        },

        onAverage()
        {
            const columnsAvgs = this.table.GetColumnsAverages();
            console.log(`Averages: ${columnsAvgs}`);
        },

        onPrint() {
            this.table.PrintTableToConsole();
        },

        onSortAscending() {
            this.table.Sort(this.sortColumnIndex, "ASC");
            this.sortedTimes++;
        },

        onSortDescending() {
            this.table.Sort(this.sortColumnIndex, "DESC");
            this.sortedTimes++;
        }

    }
}