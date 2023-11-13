const dynamoDb = require('aws-sdk/clients/dynamodb')

export default abstract class BaseDynamoDbRepository<Entity, ModelDb> {

    protected tableName: string | undefined = '';

    private dynamoDbClient;

    constructor() {
        this.dynamoDbClient = BaseDynamoDbRepository.instanceDynamoClient();
    }

    public abstract toEntity(model: ModelDb): Entity

    protected async query(params) {
        const queryParams = {
            TableName: this.tableName,
            ...params
        }
        return this.dynamoDbClient.query(queryParams).promise()
            .then(({Items}) => {
                return Items.map(this.toEntity)
            })
            .catch(reason => {
                console.log({DYNAMODB: reason})
            });
    }

    async delete(params) {

        const deleteParams = {
            TableName: this.tableName,
            ...params
        }
        return this.dynamoDbClient.delete(deleteParams).promise()
            .then(response => {
                return response;
            }).catch(reason => {
                console.log({DYNAMODB: reason})
            });

    }

    async scan(params) {
        const scanParams = {
            TableName: this.tableName,
            ...params
        }
        return this.dynamoDbClient.scan(scanParams).promise()
            .then(({Items}) => {
                if (Items) {
                    return Items.map(this.toEntity)
                }
            })
            .catch(reason => {
                console.log({DYNAMODB: reason})
            });
    }

    protected async put(row) {
        const putParams = {
            TableName: this.tableName,
            Item: row
        }
        console.log('** putParams: ', putParams)
        return this.dynamoDbClient.put(putParams).promise()
            .then(response => {
                return response;
            }).catch(reason => {
                console.log({DYNAMODB: reason})
                return {Error: reason};
            });
    }

    protected buildDynamicScanParams(param) {
        const attributes = {}
        param.forEach((value, index) => {
            Object.assign(attributes, {[`:value${index}`]: +value})
        })
        const expression = Object.keys(attributes).join(',')
        return {attributes, expression}
    }

    static instanceDynamoClient() {
        return new dynamoDb.DocumentClient({apiVersion: '2012-08-10'});
    }

    protected async update(row) {

        const updateParams = {
            TableName: this.tableName,
            Key: {
                id: row.id
            },
            UpdateExpression: row.updateExpression,
            ExpressionAttributeValues: row.expresion
        };

        return this.dynamoDbClient.update(updateParams).promise()
            .then(response => {
                return response;
            }).catch(reason => {
                console.log({DYNAMODB: reason})
                return {Error: reason};
            });
    }
}
