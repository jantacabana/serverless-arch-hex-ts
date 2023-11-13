export const ERROR = Object.seal({
    400: {
        TYPE: "BAD_REQUEST",
        MESSAGE: "Petición incorrecta"
    },
    403: {
        TYPE: "FORBIDDEN",
        MESSAGE: "El cliente no está autorizado a realizar la petición"
    },
    422: {
        TYPE: "UNPROCESSABLE_ENTITY",
        MESSAGE: "No se pudo procesar el request"
    },
    500: {
        TYPE: "INTERNAL_SERVER_ERROR",
        MESSAGE: "Se ha producido un error inesperado en el servidor"
    },
})

