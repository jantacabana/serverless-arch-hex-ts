import { VehiculoRepository } from '../repository/VehiculoRepository';
import { Vehiculo } from '../entity/Vehiculo';

export class VehiculoDomainService {
  private readonly vehiculoRepository: VehiculoRepository;

  constructor(vehiculoRepository: VehiculoRepository) {
    this.vehiculoRepository = vehiculoRepository;
  }

  public async consultarVehiculoService(idVehiculo: string): Promise<Vehiculo>{
    const vehiculoResult = await this.vehiculoRepository.consultarVehiculoRepository(idVehiculo);

    return vehiculoResult;
  }

  public async obtenerVehiculosService(): Promise<Vehiculo[]> {
    const vehiculosResult = await this.vehiculoRepository.obtenerVehiculosRepository();
    console.log('vehiculosResult: ', vehiculosResult);

    return vehiculosResult;
  }
}