import { VehiculoRepository } from '../../domain/repository/VehiculoRepository';
import { Vehiculo, VehiculoModelDB } from '../../domain/entity/Vehiculo';
import HttpApiBaseRepository from '../../../shared/infrastructure/repository/HttpApiBaseRepository';

export default class HttpApiVehiculeRespository
    extends HttpApiBaseRepository<Vehiculo, VehiculoModelDB>
    implements VehiculoRepository {

    urlBase = process.env.API_ENDPOINT;

    toEntity(model: VehiculoModelDB): Vehiculo {
        return Vehiculo.create(model)
    }

    async consultarVehiculoRepository(id: string): Promise<Vehiculo> {
        return this.getOne(this.urlBase, id).then((res => res))
    }

    async obtenerVehiculosRepository(): Promise<Vehiculo[]> {
        return this.getAll(this.urlBase).then((res => res))
    }
    
}
