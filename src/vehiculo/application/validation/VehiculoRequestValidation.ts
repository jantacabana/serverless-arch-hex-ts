import { Injectable } from '@nestjs/common';

import { validate } from '../../../shared/application/validation/Validator';
import { ConsultarVehiculoRequest } from '../dto/VehiculoRequest';
import { ConsultarVehiculoSchema } from './schemas/ConsultarVehiculoSchema';

@Injectable()
export class VehiculoRequestValidation {
  public async consultarVehiculoValidacion(vehiculoRequest: ConsultarVehiculoRequest): Promise<void> {
    await validate(ConsultarVehiculoSchema(), vehiculoRequest)
  } 
}

