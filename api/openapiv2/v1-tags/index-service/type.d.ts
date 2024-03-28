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
    export interface TemplatebackendCreateHelloReply {
        identifier?: number; // int32
        title?: string;
        content?: string;
    }
    export interface TemplatebackendGetHelloReply {
        content?: string;
    }
}
declare namespace Paths {
    namespace IndexServiceCreateHello {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
                title?: string;
                content?: string;
            }
            export type Identifier = number; // int32
        }
        export interface PathParameters {
            identifier: Parameters.Identifier /* int32 */;
        }
        namespace Responses {
            export type $200 = Definitions.TemplatebackendCreateHelloReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace IndexServiceGetHello {
        namespace Responses {
            export type $200 = Definitions.TemplatebackendGetHelloReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace IndexServiceGetHelloo {
        namespace Responses {
            export type $200 = Definitions.TemplatebackendGetHelloReply;
            export type Default = Definitions.RpcStatus;
        }
    }
}

export interface OperationMethods {
  /**
   * IndexService_GetHello - Get a hello
   * 
   * This endpoint returns a hello
   */
  'IndexService_GetHello'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.IndexServiceGetHello.Responses.$200>
  /**
   * IndexService_CreateHello - Get a hello
   * 
   * This endpoint returns a hello
   */
  'IndexService_CreateHello'(
    parameters?: Parameters<Paths.IndexServiceCreateHello.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.IndexServiceCreateHello.Responses.$200>
  /**
   * IndexService_GetHelloo - Get a hello
   * 
   * This endpoint returns a hello
   */
  'IndexService_GetHelloo'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.IndexServiceGetHelloo.Responses.$200>
}

export interface PathsDictionary {
  ['/api/v1/hello']: {
    /**
     * IndexService_GetHello - Get a hello
     * 
     * This endpoint returns a hello
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.IndexServiceGetHello.Responses.$200>
  }
  ['/api/v1/hello/{identifier}']: {
    /**
     * IndexService_CreateHello - Get a hello
     * 
     * This endpoint returns a hello
     */
    'post'(
      parameters?: Parameters<Paths.IndexServiceCreateHello.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.IndexServiceCreateHello.Responses.$200>
  }
  ['/api/v1/helloo']: {
    /**
     * IndexService_GetHelloo - Get a hello
     * 
     * This endpoint returns a hello
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.IndexServiceGetHelloo.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
