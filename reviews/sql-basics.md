# Review 4/15/22 - SQL Fundamentals

## Queries

Create: `INSERT INTO table (columns...) VALUES (values...);`
Read: `SELECT columns... FROM table;`
Update: `UPDATE table SET column = value... WHERE column = value;`
Delete: `DELETE FROM table WHERE column = value;`

## Modifiers

### Operators

#### Comparison Operators

`=` equality
`!=` inequality
`>` greater than
`>=` greater than or equal
`<` less than
`<=` less than or equal

#### Logical Operators

`AND` logical and
`OR` logical or
`NOT` logical not

#### Null Check Operators

`IS NULL` column value is null
`IS NOT NULL` column value is not null

#### String Pattern Modifiers

`LIKE` evaluate string patterns
`%` 0 or more wildcard characters
`_`, `?` 1 wildcard character

#### Math

`ROUND()` rounds to the nearest integer; can pass a second parameter for specified decimal place
`CEIL()` rounds to the nearest _greater_ integer
`FLOOR()` rounds to the nearest _lesser_ integer

#### Other

`AS` returns column data with a specified _alias_
`DISTINCT` select distinct records by column

## Clauses

`WHERE` to specify a condition for using data/records
`ORDER BY` sort data by columns; can `ASC` or `DESC`

## Aggregate Functions

`COUNT()` returns the count of selected records
`SUM()` returns the sum from aggregated column data
`AVG()` returns the average from aggregated column data
