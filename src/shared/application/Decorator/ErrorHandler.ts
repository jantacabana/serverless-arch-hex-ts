import { ERROR } from "../Request/RequestStatus";

const util = require('util')

const allowedErrors = [422, 500]

export function ErrorHandler(processName: string = "") {
    return function (target: any, propertyName: any, descriptor: any) {
        const method = descriptor.value;
        descriptor.value = async function (...args: any) {
            try {
                this.currentMethod = propertyName;
                console.log(util.inspect(args,
                    {
                        showHidden: false,
                        depth: null,
                        colors: false
                    }));

                return await method.apply(this, args);
            } catch (error) {
                const httpStatus = error.code || 500;
                const codeDetail = error.codeDetail || `PPC-${httpStatus}`;
                const detail = error.message || error.detail;

                (allowedErrors.includes(httpStatus) && processName);

                throw new CustomException(
                    httpStatus,
                    error.messageDetail,
                    codeDetail,
                    error,
                    detail
                );
            }
        };
    }
}

class CustomException extends Error {
    private readonly httpStatus;
    private readonly type;
    private readonly code;
    private readonly details;

    constructor(
        httpStatus,
        messageDetail,
        codeDetail,
        exception,
        detail = [],
    ) {
        super();
        this.httpStatus = httpStatus;
        this.type = ERROR[httpStatus].TYPE;
        this.code = codeDetail;
        this.message = messageDetail || ERROR[httpStatus].MESSAGE;
        this.details = Array.isArray(detail) ? detail : [detail];

        if (exception) {
            console.error(util.inspect(exception,
                {
                    showHidden: false,
                    depth: null,
                    colors: true
                }));
        }
    }
}


