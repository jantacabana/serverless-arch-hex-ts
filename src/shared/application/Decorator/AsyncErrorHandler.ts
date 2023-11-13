import emit from "./RetryManager"

export function AsyncErrorHandler(processName: string = "") {
    return function (target: any, propertyName: any, descriptor: any) {
        const method = descriptor.value;
        descriptor.value = async function (...args: any) {
            try {
                this.currentMethod = propertyName;
                const numReintento = args[0].numReintento;
                // Significa que es la primera vez que se va a ejecutar
                // Y al ser asíncrono, debo "simular" un error para que 
                // lo mande al Event Bridge y lo ejecute en el siguiente intento
                // Si retorno una respuesta de inmediato y dejo que el lambda se quede
                // procesando en background, si pasa algún error, eso provoca que el
                // lambda se detenga y ya no pueda procesar las siguientes solicitudes.
                // Si hay una mejor solución, cambiar esta lógica :)
                if (numReintento === undefined || numReintento === null) {
                    const message = 'Primer error ficticio para eventos asíncronos. Al siguiente intento se debería procesar el request';
                    const error = { code: 500, message };
                    await emit(args, error, processName, this.currentMethod);
                    return {
                        codigoError: 0,
                        mensaje: 'Se está realizando el proceso de manera asíncrona. Se enviará el detalle del proceso según la configuración suministrada.',
                    }
                }
                return await method.apply(this, args);
            } catch (error) {
                console.log('catch error: ', error);
            }
        };
    }
}


