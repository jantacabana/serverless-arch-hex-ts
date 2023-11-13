import { EmpresaController } from "../application/controller/EmpresaController";
import { EmpresaDomainService } from "../domain/service/EmpresaService";
import DynamoDBEmpresaRepository from "./repository/DynamoDBEmpresaRepository";

let container: any = null;

const buildContainer = () => {

    if (container) {
        return container;
    }

    const empresaRepository = new DynamoDBEmpresaRepository();
    const empresaDomainService = new EmpresaDomainService(empresaRepository)


    const empresaController = new EmpresaController(empresaDomainService);

    container = {
        registrarEmpresa: empresaController.registrarEmpresa.bind(empresaController),
        consultarEmpresa: empresaController.consultarEmpresa.bind(empresaController),
        obtenerEmpresas: empresaController.obtenerEmpresas.bind(empresaController),
    }
    return container;
  }
  export default buildContainer();