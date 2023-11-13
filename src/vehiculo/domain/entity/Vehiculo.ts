import { BaseEntity } from "../../../shared/domain/entity/BaseEntity"

export interface VehiculoModelDB {
  id?: string,
  name?: string,
  model: string,
  passengers: string,
  vehicle_class: string,
  detail?: 'Not found'
}
interface VehiculoTranslateModelDB {
  id?: string,
  nombre?: string,
  modelo: string,
  pasajeros: string,
  claseVehiculo: string
}

export class Vehiculo extends BaseEntity<VehiculoModelDB> {
  private _id?: string;
  private _name?: string;
  private _model: string;
  private _passengers: string;
  private _vehicle_class: string;

  constructor(data: VehiculoModelDB) {
    super();
    this._id = data.id;
    this._name = data.name;
    this._model = data.model;
    this._passengers = data.passengers;
    this._vehicle_class = data.vehicle_class;
  }

  public static create(data: VehiculoModelDB): Vehiculo {
      return new Vehiculo(data)
  }

  public toData(): VehiculoModelDB {
    return {
      id: this._id,
      name: this._name,
      model: this._model,
      passengers: this._passengers,
      vehicle_class: this._vehicle_class
    }
  }

  public toDataTranslate(): VehiculoTranslateModelDB {
    return {
      id: this._id,
      nombre: this._name,
      modelo: this._model,
      pasajeros: this._passengers,
      claseVehiculo: this._vehicle_class
    }
  }
}