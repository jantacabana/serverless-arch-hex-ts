# RETO TÉCNICO

**Versión:** 1.0.0

Este proyecto es un reto técnico de una aplicación serverless con lenguaje TypeScript en una Arquitectura Hexágonal. La funcionalidad es crear APIs (API Gateway) que ejecutaran lambdas y estas consumiran servicios los datos de una API externa y una BD no relacional (DYNAMODB). 

## Requisitos previos

Asegúrate de tener instaladas las siguientes dependencias en tu entorno de desarrollo:

- Node.js
- npm (Administrador de paquetes de Node.js)
- Serverless Framework
- TypeScript

También debe tener configurado las clave de acceso programatico de AWS (aws_access_key_id y aws_secret_access_key)

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

## Uso
## Ejecución local (modo desarrollo)
Puedes ejecutar la aplicación en tu entorno local utilizando Serverless Offline. Utiliza el siguiente comando:

```bash
npm run start
```
Esto iniciará la aplicación en un entorno local para pruebas y desarrollo.

## Implementación en AWS Lambda
Para implementar la aplicación en AWS Lambda, utiliza el siguiente comando:

```bash
npm run sls-deploy
```

Esto desplegará la aplicación en tu cuenta de AWS utilizando el servicio de Serverless Framework.

## Pruebas
Puedes ejecutar pruebas unitarias utilizando Jest. Ejecuta el siguiente comando:

```bash
npm test
```

## Autor

Jonathan Antacabana Aliaga
