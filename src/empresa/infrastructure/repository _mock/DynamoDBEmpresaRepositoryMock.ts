import { EmpresaRepository } from '../../domain/repository/EmpresaRepository';
import { Empresa, EmpresaModelDB } from '../../domain/entity/Empresa';

export default class DynamoDBEmpresaRespositoryMock
    implements EmpresaRepository {

    tableName = process.env.AWS_DYNAMODB_EMPRESA;

    toEntity(model: EmpresaModelDB): Empresa {
        return Empresa.create(model)
    }

    async consultarEmpresaRepository(id: string): Promise<Empresa> {
        return Empresa.create({
            "id": "486006ef-5f16-4651-9672-631991043103",
            "razonSocial": "Enotria 2",
            "direccion": "Santa Anita"
        });
    }

    async registrarEmpresaRepository(body: Empresa) {
        return '123456465465465';
    }

    async consultarEmpresasRepository(): Promise<Empresa[]> {
        const params = {
        }
        return [
            {
                "id": "32702d51-d6f4-4951-83ad-1bf47f6708d5",
                "razonSocial": "Enotria",
                "direccion": "Santa Anita"
            },
            {
                "id": "bea4c485-e778-49b1-a14d-902d1efd2da5",
                "razonSocial": "Rimac 2",
                "direccion": "San Isidro"
            },
            {
                "id": "486006ef-5f16-4651-9672-631991043103",
                "razonSocial": "Enotria 2",
                "direccion": "Santa Anita"
            }
        ].map(this.toEntity);
    }
    
}
