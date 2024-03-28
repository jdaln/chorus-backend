import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Definitions {
    export interface ProtobufAny {
        [name: string]: any;
        "@type"?: string;
    }
    export interface RpcStatus {
        code?: number; // int32
        message?: string;
        details?: ProtobufAny[];
    }
}

export interface OperationMethods {
}

export interface PathsDictionary {
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
