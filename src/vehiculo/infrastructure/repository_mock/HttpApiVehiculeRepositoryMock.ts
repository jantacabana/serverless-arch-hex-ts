import { VehiculoRepository } from '../../domain/repository/VehiculoRepository';
import { Vehiculo, VehiculoModelDB } from '../../domain/entity/Vehiculo';

export default class HttpApiVehiculeRespositoryMock
    implements VehiculoRepository {

    urlBase = process.env.API_ENDPOINT;

    toEntity(model: VehiculoModelDB): Vehiculo {
        return Vehiculo.create(model)
    }

    async consultarVehiculoRepository(id: string): Promise<Vehiculo> {
        return Vehiculo.create({
            name: "AT-ST",
            model: "All Terrain Scout Transport",
            passengers: "0",
            vehicle_class: "walker"
        })
    }

    async obtenerVehiculosRepository(): Promise<Vehiculo[]> {
        return [{
            name: "AT-ST",
            model: "All Terrain Scout Transport",
            passengers: "0",
            vehicle_class: "walker"
        },{
            name: "AT-ST",
            model: "All Terrain Scout Transport",
            passengers: "0",
            vehicle_class: "walker"
        }].map(this.toEntity)
    }
    
}
