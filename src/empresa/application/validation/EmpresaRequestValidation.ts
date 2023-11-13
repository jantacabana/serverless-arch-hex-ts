import { Injectable } from '@nestjs/common';
import Joi from 'joi';

import { validate } from '../../../shared/application/validation/Validator';
import { EmpresaDto } from '../dto/EmpresaRequest';
import { RegistrarEmpresaSchema } from './schemas/RegistrarEmpresaSchema';

@Injectable()
export class EmpresaRequestValidation {
  public async registrarEmpresaValidacion(empresaDto: EmpresaDto): Promise<void> {
    await validate(RegistrarEmpresaSchema(), empresaDto)
  } 
}

