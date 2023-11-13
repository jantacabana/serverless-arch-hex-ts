import {
  IsDefined,
  IsNumberString,
  IsObject,
  IsString,
  ValidateNested
} from "class-validator";
import { BaseRequest } from "../../../shared/application/Request/BaseRequest";
import { Type } from "class-transformer";

export class ConsultarEmpresaRequest extends BaseRequest {
  @IsObject()
  @ValidateNested()
  @Type(() => EmpresaPath)
  path: EmpresaPath;
}

class EmpresaPath {
  @IsDefined()
  @IsString()
  id: string;
}

