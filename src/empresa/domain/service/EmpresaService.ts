import { EmpresaRepository } from '../repository/EmpresaRepository';
import { Empresa, EmpresaModelDB } from '../entity/Empresa';

export class EmpresaDomainService {
  private readonly empresaRepository: EmpresaRepository;

  constructor(empresaRepository: EmpresaRepository) {
    this.empresaRepository = empresaRepository;
  }

  public async consultarEmpresaService(idEmpresa: string): Promise<Empresa> {
    const empresaResult = await this.empresaRepository.consultarEmpresaRepository(idEmpresa);

    return empresaResult;
  }

  public async obtenerEmpresasService(): Promise<Empresa[]> {
    const empresasResult = await this.empresaRepository.consultarEmpresasRepository();
    console.log('*** empresasResult: ', empresasResult)

    return empresasResult;
  }

  public async registrarEmpresaService(empresa: EmpresaModelDB): Promise<string> {
    const registrarResult = await this.empresaRepository.registrarEmpresaRepository(
        Empresa.create(empresa)
    );
    console.log('**** registrarResult: ', registrarResult);
    return registrarResult;
  }
}