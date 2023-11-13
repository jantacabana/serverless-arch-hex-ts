import { EmpresaModelDB } from '../../domain/entity/Empresa'

export interface EmpresaDto extends EmpresaModelDB {

};

export interface RegistrarEmpresaDto {
  payload: EmpresaDto
}
