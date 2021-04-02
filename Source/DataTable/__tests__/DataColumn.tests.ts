import { DataColumn } from "../DataColumn";

describe(('DataColumn.ts'), () => {
  it('Add row', () => {
    // Arrange
    const dataColumn = new DataColumn("", "");
    // Act
    dataColumn.AddRow("1");
    
    // Assert
    expect(dataColumn.Rows.length).toBe(1);
    expect(dataColumn.Rows[0]).toBe("1");
  });

  it('Sums all rows with numbers', () => {
    // Arrange
    const dataColumn = new DataColumn("", "");
    dataColumn.AddRow("1");
    dataColumn.AddRow("2");
    dataColumn.AddRow("3");    
    dataColumn.AddRow("Chars");

    // Act
    const sumOfRows = dataColumn.SumOfRows;

    // Assert
    expect(sumOfRows).toBe(6);
  });

  it('Averages all rows with numbers', () => {
    // Arrange
    const dataColumn = new DataColumn("", "");
    dataColumn.AddRow("1");
    dataColumn.AddRow("2");
    dataColumn.AddRow("4");    
    dataColumn.AddRow("Chars");

    // Act
    const avgOfRows = dataColumn.AvgOfRows;

    // Assert
    expect(avgOfRows).toBe(2.33);
  });
});
