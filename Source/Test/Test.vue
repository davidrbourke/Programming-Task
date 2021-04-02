<template>
    <div class="test container-fluid">
        <div class="row">
            <div class="col-12">
                <p>Table size of {{ table.Id }} is {{ table.RowCount }}x{{ table.ColumnCount }}</p>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="(col, index) in table.Columns" :key="index" class="col-sm">
                    <div class="p-1 mb-2 bg-primary text-white">
                        {{col.ColumnName}}
                    </div>
                    <div v-for="(row, index) in col.Rows" :key="index" class="col-sm">
                        {{row}}
                    </div>
                    <div class="p-1 mb-2 bg-secondary text-white">
                        Sum:{{col.SumOfRows}}
                    </div>
                    <div class="p-1 mb- bg-secondary text-white">
                        Avg:{{col.AvgOfRows}}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div v-if="table.Messages.length > 0">
                    <div class="p-3 mb-3 bg-warning text-dark">
                        {{ table.Messages }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="form-group">
                        <label for="tableId">Table Id:</label>
                        <input class="form-control form-control-sm" id="tableId" type="text" v-model="tableId">
                    </div>
                    <button class="btn btn-primary btn-sm " @click.prevent="onNewTable">New Table</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="form-group">
                        <label for="columnName">Column Name:</label>
                        <input class="form-control form-control-sm" id="columnName" type="text" v-model="columnName">
                    </div>
                    <div class="form-group">
                        <label for="columnValues">Column Values:</label>
                        <input class="form-control form-control-sm" id="columnValues" placeholder="Enter comma-separated list of values" type="text" v-model="columnValuesAsCsv"/>
                    </div>
                    <button class="btn btn-primary btn-sm " @click.prevent="onAddColumn">Add Column</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <div class="form-group">
                        <label for="rowValues">Row Values:</label>
                        <input class="form-control form-control-sm" id="rowValues" placeholder="Enter comma-separated list of values" type="text" v-model="rowValuesAsCsv"/>
                    </div>
                    <button class="btn btn-primary btn-sm " @click.prevent="onAddRow">Add Row</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <button class="btn btn-primary btn-sm " @click.prevent="onClear">Clear</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <button class="btn btn-primary btn-sm " @click.prevent="onCopy">Copy</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <button class="btn btn-primary btn-sm " @click.prevent="onSum">Sum Each Column</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                    <button class="btn btn-primary btn-sm " @click.prevent="onAverage">Average Each Column</button>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <form>
                   <div class="form-group">
                        <label for="rowValues">Sort table ascending by column index (0+):</label>
                        <input class="form-control form-control-sm" id="rowValues" placeholder="Enter column index to sort by" type="text" v-model="sortColumnIndex"/>
                    </div>
                    <button class="btn btn-primary btn-sm " @click.prevent="onSortAscending">Sort Ascending</button>
                    <button class="btn btn-primary btn-sm " @click.prevent="onSortDescending">Sort Descending</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script src="./Test.ts" />

<style lang="scss" scoped>

.test {
    margin-top: 1rem;
}

form {
    border: 1px solid gainsboro;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;

    label {
        font-size: 0.875rem;
    }
}

</style>
