

export interface BaseRequestSkeleton {
    payload?: object
    query?: object
    path?: object
}

export class BaseRequest  implements BaseRequestSkeleton{
    user: object;

    trace: object;

    payload?: object

    query?: object

    path?: object

}
