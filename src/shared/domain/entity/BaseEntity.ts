
export abstract class BaseEntity <Model>{

  public abstract toData(): Model;


  protected uuidV4(): string {
      const uuidv4 = require('uuid/v4')
      return uuidv4();
  }

  protected static getCurrentTimeIso(): string {
      const fecha = new Date();
      const fechaString = fecha.toLocaleString('en-US', {
          timeZone: 'America/Lima'
      });
      return new Date(fechaString).toISOString().slice(0, -1);
  }

  protected maskCardDigits(cardNumber) {
      return cardNumber.replace(/.(?=.{4})/g, "*");
  }

}

export interface CreateBaseModel {
  identifier: number | null;
  lastRowid: string | null;
  rowsAffected: number | null;
}

export abstract class BaseEntityCreation {
  private readonly _identifier: number | null;
  private readonly lastRowid: string |  null;
  private readonly rowsAffected: number ;

  protected constructor(data: CreateBaseModel) {
      this._identifier = data.identifier
      this.lastRowid = data.lastRowid
      this.rowsAffected = (data.rowsAffected) ? data.rowsAffected : 0
  }

  get isSuccess(): boolean {
      return (this._identifier !== null || this.rowsAffected > 0);
  }

  get identifier(): number | null {
      return this._identifier;
  }


}
