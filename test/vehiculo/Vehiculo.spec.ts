import Container from "./VehiculoContainer"
import { beforeAll, describe, expect, it } from "@jest/globals";
import { DATA } from "./Stubs/VehiculoCases";

describe("{ Vehiculo } module test", () => {
    let transactionContainer;

    beforeAll(() => {
        // initEnvironment();
        transactionContainer = Container;
    })

    it("{ Vehiculo } consultar un id no válido", async () => {

        const {consultarVehiculo: {caso1: {event}}} = DATA;
        const vehiculo = await transactionContainer.consultarVehiculo(event);
        expect(vehiculo.data).toMatchObject({})
        
    })

    it("{ Vehiculo }  consultar por un id válido", async () => {
        const {consultarVehiculo: {caso2: {event}}} = DATA;
        const result = await transactionContainer.consultarVehiculo(event);
        expect(result).toHaveProperty('ok');
        expect(result.ok).toEqual(true);
        expect(result).toHaveProperty('data');
        expect(result.data).toHaveProperty('nombre');
        expect(result.data).toHaveProperty('modelo');
    })

    it("{ Vehiculo }  obtenerVehiculos", async () => {
        const {obtenerVehiculos: {caso1: {event}}} = DATA;
        const result = await transactionContainer.obtenerVehiculos(event);
        expect(result).toHaveProperty('ok');
        expect(result).toHaveProperty('data');
        for (const detailResult of result.data) {
            expect(detailResult).toHaveProperty('nombre');
            expect(detailResult).toHaveProperty('modelo');
        }
    })
});

