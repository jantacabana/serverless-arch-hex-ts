import {
  IsDefined,
  IsNumberString,
  IsObject,
  ValidateNested
} from "class-validator";
import { BaseRequest } from "../../../shared/application/Request/BaseRequest";
import { Type } from "class-transformer";

export class ConsultarVehiculoRequest extends BaseRequest {
  @IsObject()
  @ValidateNested()
  @Type(() => VehiculoPath)
  path: VehiculoPath;
}

class VehiculoPath {
  @IsDefined()
  @IsNumberString()
  id: string;
}

