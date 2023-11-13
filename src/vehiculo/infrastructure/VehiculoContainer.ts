import { VehiculoController } from "../application/controller/VehiculoController";
import { VehiculoDomainService } from "../domain/service/VehiculoService";
import HttpApiVehiculeRespository from "./repository/HttpApiVehiculeRepository";

let container: any = null;

const buildContainer = () => {

    if (container) {
        return container;
    }

    const vehiculeRepository = new HttpApiVehiculeRespository();
    const vehiculoDomainService = new VehiculoDomainService(vehiculeRepository)


    const Vehiculo = new VehiculoController(vehiculoDomainService);

    container = {
        consultarVehiculo: Vehiculo.consultarVehiculo.bind(Vehiculo),
        obtenerVehiculos: Vehiculo.obtenerVehiculos.bind(Vehiculo),
    }
    return container;
  }
  export default buildContainer();