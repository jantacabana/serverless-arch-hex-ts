import 'reflect-metadata';

import bootstrap from '../../shared/infrastructure/serverless/AppFactory';
import Container from "./EmpresaContainer";

export const handler = bootstrap(Container);
// export const consultarVehiculo =  Container.consultarVehiculo;
// export const obtenerVehiculos =  Container.obtenerVehiculos;