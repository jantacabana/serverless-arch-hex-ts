import 'reflect-metadata';
import { VehiculoController } from "../../src/vehiculo/application/controller/VehiculoController";
import { VehiculoDomainService } from "../../src/vehiculo/domain/service/VehiculoService";
import HttpApiVehiculeRespositoryMock from "../../src/vehiculo/infrastructure/repository_mock/HttpApiVehiculeRepositoryMock";

let container: any = null;

const buildContainer = () => {

    if (container) {
        return container;
    }

    const vehiculeRepository = new HttpApiVehiculeRespositoryMock();
    const vehiculoDomainService = new VehiculoDomainService(vehiculeRepository)


    const Vehiculo = new VehiculoController(vehiculoDomainService);

    container = {
        consultarVehiculo: Vehiculo.consultarVehiculo.bind(Vehiculo),
        obtenerVehiculos: Vehiculo.obtenerVehiculos.bind(Vehiculo),
    }
    return container;
  }
  export default buildContainer();