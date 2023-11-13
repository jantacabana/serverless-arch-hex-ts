import BaseDynamoDbRepository from '../../../shared/infrastructure/repository/DynamoBaseRepository';
import { EmpresaRepository } from '../../domain/repository/EmpresaRepository';
import { Empresa, EmpresaModelDB } from '../../domain/entity/Empresa';

export default class DynamoDBEmpresaRespository
    extends BaseDynamoDbRepository<Empresa, EmpresaModelDB>
    implements EmpresaRepository {

    tableName = process.env.AWS_DYNAMODB_EMPRESA;

    toEntity(model: EmpresaModelDB): Empresa {
        return Empresa.create(model)
    }

    async consultarEmpresaRepository(id: string): Promise<Empresa> {
        const params = {
            KeyConditionExpression: 'id = :id',
            ExpressionAttributeValues: {
                ':id': id
            },
        }
        return this.query(params)
            .then(result => result[0] || result);
    }

    async registrarEmpresaRepository(body: Empresa) {
        await this.put(body.toData())
        return body.id;
    }

    async consultarEmpresasRepository(): Promise<Empresa[]> {
        const params = {
        }
        return this.scan({params});
    }
    
}
