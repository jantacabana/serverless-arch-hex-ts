import { ConsultarVehiculoRequest } from "../request/ConsultarVehiculoRequest";
import { VehiculoDomainService } from "../../domain/service/VehiculoService";
import { RequestValidation } from "../../../shared/application/Decorator/RequestValidation";
import { ErrorHandler } from "../../../shared/application/Decorator/ErrorHandler";

export class VehiculoController {

  constructor(
    private readonly vehiculoDomainService: VehiculoDomainService
  ) {
  }

  @ErrorHandler()
  @RequestValidation(ConsultarVehiculoRequest)
  async consultarVehiculo(event) {
    const {path: {id}} = event;
    try {
      const vehiculo = await this.vehiculoDomainService.consultarVehiculoService(id);
      return {
        ok: true,
        data: vehiculo.toDataTranslate()
      }
    } catch(e) {
      throw  {
        ok: false,
        data: e
      }
    }
  }

  @ErrorHandler()
  async obtenerVehiculos(event) {
    try {
      const vehiculos = await this.vehiculoDomainService.obtenerVehiculosService();
      return {
        ok: true,
        data: vehiculos.map((v) => v.toDataTranslate())
      }
    } catch(e) {
      return {
        ok: false,
        data: e
      }
    }
  }

}
