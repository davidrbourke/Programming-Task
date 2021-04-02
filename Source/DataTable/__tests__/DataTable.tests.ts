import { DataTable } from "../DataTable";

describe(('DataTable.ts'), () => {
  it('Adds columns', () => {
    // Arrange
    const tableName = "ABC";
    const columnName = "colA";
    
    // Act
    const dataTable = new DataTable(tableName);
    dataTable.AddColumn(columnName, "");
    
    // Assert
    expect(dataTable.Id).toBe(tableName);
    expect(dataTable.Columns.length).toBe(1);
    expect(dataTable.Columns[0].ColumnName).toBe(columnName);
    expect(dataTable.Columns[0].Rows.length).toBe(0);
  });

  it('Add column with empty name', () => {
    // Arrange
    const tableName = "ABC";
    
    // Act
    const dataTable = new DataTable(tableName);
    dataTable.AddColumn("", "");
    
    // Assert
    expect(dataTable.Id).toBe(tableName);
    expect(dataTable.Columns.length).toBe(1);
    expect(dataTable.Columns[0].ColumnName).toBe("");
  });

  it('Adds columns with initial row values', () => {
    // Arrange
    const tableName = "ABC";
    const columnName = "colA";
    const columnValuesAsCsv = "1,2,3";

    // Act
    const dataTable = new DataTable(tableName);
    dataTable.AddColumn(columnName, columnValuesAsCsv);
    
    // Assert
    expect(dataTable.Columns.length).toBe(1);
    expect(dataTable.Columns[0].Rows.length).toBe(3);
    expect(dataTable.Columns[0].Rows[0]).toBe("1");
    expect(dataTable.Columns[0].Rows[1]).toBe("2");
    expect(dataTable.Columns[0].Rows[2]).toBe("3");
  });

  it('Adds columns with initial row values', () => {
    // Arrange
    const tableName = "ABC";
    const columnName = "colA";
    const columnValuesAsCsv = "1,2,3";

    // Act
    const dataTable = new DataTable(tableName);
    dataTable.AddColumn(columnName, columnValuesAsCsv);
    
    // Assert
    expect(dataTable.Columns.length).toBe(1);
    expect(dataTable.Columns[0].Rows.length).toBe(3);
    expect(dataTable.Columns[0].Rows[0]).toBe("1");
    expect(dataTable.Columns[0].Rows[1]).toBe("2");
    expect(dataTable.Columns[0].Rows[2]).toBe("3");
  });

  it('Adds rows with multiple columns', () => {
    // Arrange
    const tableName = "ABC";
    const columnNameA= "colA";
    const columnNameB = "colB";
    const columnNameC = "colC";
    
    // Act
    const dataTable = new DataTable(tableName);
    dataTable.AddColumn(columnNameA, "");
    dataTable.AddColumn(columnNameB, "");
    dataTable.AddColumn(columnNameC, "");
    dataTable.AddRow("1,2,3");
    
    // Assert
    expect(dataTable.Columns.length).toBe(3);
    expect(dataTable.Columns[0].Rows.length).toBe(1);
    expect(dataTable.Columns[0].Rows[0]).toBe("1");
    expect(dataTable.Columns[1].Rows[0]).toBe("2");
    expect(dataTable.Columns[2].Rows[0]).toBe("3");
  });

  it('Adds empty row returns error message', () => {
    // Arrange
    const dataTable = new DataTable("");
    dataTable.AddColumn("", "");

    // Act
    dataTable.AddRow("");
    
    // Assert
    expect(dataTable.Messages[0]).toEqual("Enter row values");
    expect(dataTable.Columns[0].Rows.length).toBe(0);
  });

  it('Adds row with incorrect number of columns returns error message', () => {
    // Arrange
    const dataTable = new DataTable("");
    dataTable.AddColumn("", "");
    dataTable.AddColumn("", "");

    // Act
    dataTable.AddRow("1");
    
    // Assert
    expect(dataTable.Messages[0]).toEqual("Enter a row with 2 columns");
    expect(dataTable.Columns[0].Rows.length).toBe(0);
  });

  it('Gets sum of each column', () => {
       // Arrange
       const dataTable = new DataTable("");
       dataTable.AddColumn("", "");
       dataTable.AddColumn("", "");
       dataTable.AddColumn("", "");
       dataTable.AddRow("1,2,3");
       dataTable.AddRow("4,5,6");
       dataTable.AddRow("7,8,11");

       // Act
      const sumList = dataTable.GetColumnsSums();

      // Assert
      expect(sumList[0]).toBe(12);
      expect(sumList[1]).toBe(15);
      expect(sumList[2]).toBe(20);
  });

  it('Gets avg of each column', () => {
    // Arrange
    const dataTable = new DataTable("");
    dataTable.AddColumn("", "");
    dataTable.AddColumn("", "");
    dataTable.AddColumn("", "");
    dataTable.AddRow("1,2,3");
    dataTable.AddRow("4,5,6");
    dataTable.AddRow("7,8,11");

    // Act
    const avgList = dataTable.GetColumnsAverages();

    // Assert
    expect(avgList[0]).toBe(4);
    expect(avgList[1]).toBe(5);
    expect(avgList[2]).toBe(6.67);
  });

  it('Copy data table as deep clone', () => {
    // Arrange
    const dataTable = new DataTable("");
    dataTable.AddColumn("A", "1,2,3");
    
    // Act
    const copyOfDataTable = dataTable.GetCopyOfDataTable();
    copyOfDataTable.AddColumn("B","4,5,6");

    // Assert - check clone table has been independently updated
    expect(dataTable.Columns.length).toBe(1);
    expect(copyOfDataTable.Columns.length).toBe(2);
  });

  it('Does not add column with incorrect number of column values', () => {
    // Arrange
    const tableName = "ABC";
    const columnNameA= "colA";
    const columnNameB = "colB";
    
    // Act
    const dataTable = new DataTable(tableName);
    dataTable.AddColumn(columnNameA, "1,2,3");
    dataTable.AddColumn(columnNameB, "1,2,3,4");
    
    // Assert
    expect(dataTable.Columns.length).toBe(1);
    expect(dataTable.Messages[0]).toEqual("New column rows must match existing column rows: 3.");
  });

  
  it('Sorts by column index', () => {
    // Arrange
    const columnNameA= "colA";
    const columnNameB = "colB";
    
    // Act
    const dataTable = new DataTable("");
    dataTable.AddColumn(columnNameA, "7,4,1");
    dataTable.AddColumn(columnNameB, "3,2,8");
    dataTable.Sort("0", "ASC");

    // Assert
    expect(dataTable.Columns[0].Rows).toEqual(["1","4","7"]);
    expect(dataTable.Columns[1].Rows).toEqual(["8","2","3"]);
  });

});