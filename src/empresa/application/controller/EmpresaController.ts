import { RegistrarEmpresaRequest } from "../request/RegistrarEmpresaRequest";
import { ConsultarEmpresaRequest } from "../request/ConsultarEmpresaRequest";
import { EmpresaDomainService } from "../../domain/service/EmpresaService";
import { RequestValidation } from "../../../shared/application/Decorator/RequestValidation";
import { ErrorHandler } from "../../../shared/application/Decorator/ErrorHandler";

export class EmpresaController {

  constructor(
    private readonly empresaDomainService: EmpresaDomainService
  ) {
  }

  @ErrorHandler()
  @RequestValidation(RegistrarEmpresaRequest)
  async registrarEmpresa(event) {
    const {payload} = event;
    console.log('*** payload: ', payload);
    try {
      const empresa = await this.empresaDomainService.registrarEmpresaService(payload);
      return {
        ok: true,
        data: empresa
      }
    } catch(e) {
      throw  {
        ok: false,
        data: e
      }
    }
  }

  @ErrorHandler()
  @RequestValidation(ConsultarEmpresaRequest)
  async consultarEmpresa(event) {
    const {path: {id}} = event;
    console.log('*** id: ', id);
    try {
      const empresa = await this.empresaDomainService.consultarEmpresaService(id);
      return {
        ok: true,
        data: empresa.toData()
      }
    } catch(e) {
      throw  {
        ok: false,
        data: e
      }
    }
  }

  @ErrorHandler()
  async obtenerEmpresas(event) {
    try {
      const empresas = await this.empresaDomainService.obtenerEmpresasService();
      return {
        ok: true,
        data: empresas.map((e) => e.toData())
      }
    } catch(e) {
      return {
        ok: false,
        data: e
      }
    }
  }

}
