const middy = require('@middy/core');
import ApiGatewayMiddleware from "./ApiGatewayMiddleware";


function bootstrap(controller) {
  const handler = middy(async () => controller);
  handler.use(ApiGatewayMiddleware());
  return handler;
}

export default bootstrap;

