import Container from "./EmpresaContainer"
import { beforeAll, describe, expect, it } from "@jest/globals";
import { DATA } from "./Stubs/EmpresaCases";

describe("{ Empresa } module test", () => {
    let transactionContainer;

    beforeAll(() => {
        // initEnvironment();
        transactionContainer = Container;
    })

    it("{ Empresa } consultar un id no válido", async () => {

        const {consultarEmpresa: {caso1: {event}}} = DATA;
        const empresa = await transactionContainer.consultarEmpresa(event);
        expect(empresa.ok).toEqual(true);
        expect(empresa).toHaveProperty('data');
    })

    it("{ Empresa }  obtenerEmpresas", async () => {
        const {obtenerEmpresas: {caso1: {event}}} = DATA;
        const result = await transactionContainer.obtenerEmpresas(event);
        expect(result).toHaveProperty('ok');
        expect(result).toHaveProperty('data');
        for (const detailResult of result.data) {
            expect(detailResult).toHaveProperty('id');
            expect(detailResult).toHaveProperty('razonSocial');
            expect(detailResult).toHaveProperty('direccion');
        }
    })

    it("{ Empresa }  registrar una empresa", async () => {
        const {registrarEmpresa: {caso1: {event}}} = DATA;
        const result = await transactionContainer.registrarEmpresa(event);
        expect(result).toHaveProperty('ok');
        expect(result.ok).toEqual(true);
        expect(result).toHaveProperty('data');
    })
});

