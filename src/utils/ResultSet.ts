interface IResultSet {
    columns: [];
    rows: [];
}

export default class ResultSet 
{
    resultSet: IResultSet;

    constructor(resultSet: IResultSet){
        this.resultSet = resultSet;
        }
}