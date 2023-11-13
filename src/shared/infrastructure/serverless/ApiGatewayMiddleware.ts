
// const ValidationException = require('../exceptions/validation.exception');
import HttpConstant from './exception/ExceptionConstantes';

let isApiGatewayRestEvent;

interface Payload {
  headers?: string,
  path?: string,
  body?: string,
  query?: string,
  httpMethod?: string
}

async function getPayload(event) {
  const {body: {payload}, query, path} = event;
  return {
    payload,
    query,
    path,
  };
}

function getAction(event) {
  return event.action;
}

const ApiGatewayMiddleware = () => {
  return {
    async before(handler) {
      const { event, context } = handler;
      // console.log('context: ', context);
      // console.log('event: ', event);
      const action = getAction(event);
      const payload = await getPayload(event);
      handler.event = { action, payload };
      console.log('ApiGatewayEvent - Origin');
      console.log(handler.event.origin);
      console.log('ApiGatewayEvent - Action');
      console.log(handler.event.action);
      console.log('ApiGatewayEvent - Payload');
      console.log(handler.event.payload);
    },
    async after(handler) {
      const { action, payload } = handler.event;

      const data = await handler.response[action](payload);
      handler.response = { payload: data };
      console.log('ApiGatewayEvent - Success Response');
      console.log(handler.response);
    },
    async onError(handler) {
      console.error('ApiGatewayEvent - Error Response');
      console.error(handler.error);
      const error = {
        ...handler.error,
      };
      delete error.name;
      // if (handler.error instanceof ValidationException) {
      //   error.httpStatus = HttpConstant.BAD_REQUEST_STATUS.code;
      // } else {
      //   error.httpStatus = HttpConstant.INTERNAL_SERVER_ERROR_STATUS.code;
      // }
      error.httpStatus = HttpConstant.INTERNAL_SERVER_ERROR_STATUS.code;

      handler.error = JSON.stringify({ error });
      return Promise.resolve();
    },
  };
};
export default ApiGatewayMiddleware;