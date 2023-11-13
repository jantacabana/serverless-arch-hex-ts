import 'reflect-metadata';
import { EmpresaController } from "../../src/empresa/application/controller/EmpresaController";
import { EmpresaDomainService } from "../../src/empresa/domain/service/EmpresaService";
import DynamoDBEmpresaRepositoryMock from "../../src/empresa/infrastructure/repository _mock/DynamoDBEmpresaRepositoryMock";

let container: any = null;

const buildContainer = () => {

    if (container) {
        return container;
    }

    const empresaRepository = new DynamoDBEmpresaRepositoryMock();
    const empresaDomainService = new EmpresaDomainService(empresaRepository)


    const Empresa = new EmpresaController(empresaDomainService);

    container = {
        consultarEmpresa: Empresa.consultarEmpresa.bind(Empresa),
        obtenerEmpresas: Empresa.obtenerEmpresas.bind(Empresa),
        registrarEmpresa: Empresa.registrarEmpresa.bind(Empresa),
    }
    return container;
  }
  export default buildContainer();