import {
  IsDefined,
  IsObject,
  IsString,
  ValidateNested
} from "class-validator";
import { BaseRequest } from "../../../shared/application/Request/BaseRequest";
import { Type } from "class-transformer";

export class RegistrarEmpresaRequest extends BaseRequest {
  @IsObject()
  @ValidateNested()
  @Type(() => Empresa)
  payload: Empresa;
}

class Empresa {
  @IsDefined()
  @IsString()
  razonSocial: string;
  
  @IsDefined()
  @IsString()
  direccion: string;
}

