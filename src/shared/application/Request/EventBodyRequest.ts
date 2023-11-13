import {
    IsNumberString,
    IsObject,
    IsOptional,
    IsString,
    IsUUID,
} from "class-validator";

export abstract class EventBodyRequest {

    @IsObject()
    protected orden: object;

    @IsObject()
    protected resultado: object;

    @IsObject()
    protected tarjeta: object;

    @IsObject()
    @IsOptional()
    protected dataAdicional: object;

    @IsObject()
    @IsOptional()
    protected titular: object;

    @IsUUID()
    protected transaccionId: string;

    @IsString()
    protected fechaTransaccion: string;

    @IsUUID()
    protected hashCargo: string;

    @IsString()
    protected numRefDoc: string;

    @IsNumberString()
    @IsOptional()
    protected codigoComercio: string;
}
