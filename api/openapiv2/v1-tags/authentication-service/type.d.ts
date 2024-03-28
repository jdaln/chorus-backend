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
    export interface TemplatebackendAuthenticationReply {
        result?: TemplatebackendAuthenticationResult;
    }
    export interface TemplatebackendAuthenticationResult {
        token?: string;
    }
    export interface TemplatebackendCredentials {
        username?: string;
        password?: string;
        totp?: string;
    }
}
declare namespace Paths {
    namespace AuthenticationServiceAuthenticate {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.TemplatebackendCredentials;
        }
        namespace Responses {
            export type $200 = Definitions.TemplatebackendAuthenticationReply;
            export type Default = Definitions.RpcStatus;
        }
    }
}

export interface OperationMethods {
  /**
   * AuthenticationService_Authenticate - Authenticate
   * 
   * This endpoint authenticates a user
   */
  'AuthenticationService_Authenticate'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AuthenticationServiceAuthenticate.Responses.$200>
}

export interface PathsDictionary {
  ['/api/rest/v1/authentication/login']: {
    /**
     * AuthenticationService_Authenticate - Authenticate
     * 
     * This endpoint authenticates a user
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AuthenticationServiceAuthenticate.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
