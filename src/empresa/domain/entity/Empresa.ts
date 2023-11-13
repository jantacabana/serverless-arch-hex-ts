import { BaseEntity } from "../../../shared/domain/entity/BaseEntity"

export interface EmpresaModelDB {
  id?: string,
  razonSocial: string,
  direccion: string
}

export class Empresa extends BaseEntity<EmpresaModelDB> {
  private _id: string;
  private _razonSocial: string;
  private _direccion: string;

  constructor(data: EmpresaModelDB) {
    super();
    this._id = data.id || this.uuidV4();
    this._razonSocial = data.razonSocial;
    this._direccion = data.direccion;
  }

  public static create(data: EmpresaModelDB): Empresa {
      return new Empresa(data)
  }

  public toData(): EmpresaModelDB {
    return {
      id: this._id,
      razonSocial: this._razonSocial,
      direccion: this._direccion
    }
  }

  get id(): string {
    return this._id;
  }
}