export interface EmpresaRepository {
  registrarEmpresaRepository(empresa);
  consultarEmpresaRepository(id: string);
  consultarEmpresasRepository();
}