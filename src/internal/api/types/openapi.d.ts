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
    export interface TemplatebackendCreateHelloReply {
        identifier?: number; // int32
        title?: string;
        content?: string;
    }
    /**
     * Create Users
     */
    export interface TemplatebackendCreateUserReply {
        result?: TemplatebackendCreateUserResult;
    }
    export interface TemplatebackendCreateUserResult {
        id?: string; // uint64
    }
    export interface TemplatebackendCredentials {
        username?: string;
        password?: string;
        totp?: string;
    }
    export interface TemplatebackendDeleteUserReply {
        result?: TemplatebackendDeleteUserResult;
    }
    export interface TemplatebackendDeleteUserResult {
    }
    export interface TemplatebackendGetHelloReply {
        content?: string;
    }
    export interface TemplatebackendGetUserMeReply {
        result?: /* Get User (me) */ TemplatebackendGetUserMeResult;
    }
    /**
     * Get User (me)
     */
    export interface TemplatebackendGetUserMeResult {
        me?: TemplatebackendUser;
    }
    export interface TemplatebackendGetUserReply {
        result?: TemplatebackendGetUserResult;
    }
    export interface TemplatebackendGetUserResult {
        user?: TemplatebackendUser;
    }
    export interface TemplatebackendResetPasswordReply {
        result?: TemplatebackendResetPasswordResult;
    }
    export interface TemplatebackendResetPasswordResult {
    }
    export interface TemplatebackendUpdatePasswordReply {
        result?: TemplatebackendUpdateUserResult;
    }
    /**
     * Update User Password
     */
    export interface TemplatebackendUpdatePasswordRequest {
        currentPassword?: string;
        newPassword?: string;
    }
    export interface TemplatebackendUpdateUserResult {
    }
    export interface TemplatebackendUser {
        id?: string; // uint64
        firstName?: string;
        lastName?: string;
        username?: string;
        email?: string;
        password?: string;
        status?: string;
        roles?: string[];
        totpEnabled?: boolean;
        createdAt?: string; // date-time
        updatedAt?: string; // date-time
        passwordChanged?: boolean;
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
    namespace UserServiceCreateUser {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = Definitions.TemplatebackendUser;
        }
        namespace Responses {
            export type $200 = /* Create Users */ Definitions.TemplatebackendCreateUserReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace UserServiceDeleteUser {
        namespace Parameters {
            export type Id = string; // uint64
        }
        export interface PathParameters {
            id: Parameters.Id /* uint64 */;
        }
        namespace Responses {
            export type $200 = Definitions.TemplatebackendDeleteUserReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace UserServiceGetUser {
        namespace Parameters {
            export type Id = string; // uint64
        }
        export interface PathParameters {
            id: Parameters.Id /* uint64 */;
        }
        namespace Responses {
            export type $200 = Definitions.TemplatebackendGetUserReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace UserServiceGetUserMe {
        namespace Responses {
            export type $200 = Definitions.TemplatebackendGetUserMeReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace UserServiceResetPassword {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export interface Body {
            }
            export type Id = string; // uint64
        }
        export interface PathParameters {
            id: Parameters.Id /* uint64 */;
        }
        namespace Responses {
            export type $200 = Definitions.TemplatebackendResetPasswordReply;
            export type Default = Definitions.RpcStatus;
        }
    }
    namespace UserServiceUpdatePassword {
        export interface BodyParameters {
            body: Parameters.Body;
        }
        namespace Parameters {
            export type Body = /* Update User Password */ Definitions.TemplatebackendUpdatePasswordRequest;
        }
        namespace Responses {
            export type $200 = Definitions.TemplatebackendUpdatePasswordReply;
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
  /**
   * UserService_CreateUser - Create a user
   * 
   * This endpoint creates a user
   */
  'UserService_CreateUser'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserServiceCreateUser.Responses.$200>
  /**
   * UserService_GetUserMe - Get my own user
   * 
   * This endpoint returns the details of the authenticated user
   */
  'UserService_GetUserMe'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserServiceGetUserMe.Responses.$200>
  /**
   * UserService_UpdatePassword - Update password
   * 
   * This endpoint updates the password of the authenticated user
   */
  'UserService_UpdatePassword'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserServiceUpdatePassword.Responses.$200>
  /**
   * UserService_GetUser - Get a user
   * 
   * This endpoint returns a user
   */
  'UserService_GetUser'(
    parameters?: Parameters<Paths.UserServiceGetUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserServiceGetUser.Responses.$200>
  /**
   * UserService_DeleteUser - Delete a user
   * 
   * This endpoint deletes a user
   */
  'UserService_DeleteUser'(
    parameters?: Parameters<Paths.UserServiceDeleteUser.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserServiceDeleteUser.Responses.$200>
  /**
   * UserService_ResetPassword - Reset password
   * 
   * This endpoint resets a user's password
   */
  'UserService_ResetPassword'(
    parameters?: Parameters<Paths.UserServiceResetPassword.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UserServiceResetPassword.Responses.$200>
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
  ['/api/rest/v1/users']: {
    /**
     * UserService_CreateUser - Create a user
     * 
     * This endpoint creates a user
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserServiceCreateUser.Responses.$200>
  }
  ['/api/rest/v1/users/me']: {
    /**
     * UserService_GetUserMe - Get my own user
     * 
     * This endpoint returns the details of the authenticated user
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserServiceGetUserMe.Responses.$200>
  }
  ['/api/rest/v1/users/me/password']: {
    /**
     * UserService_UpdatePassword - Update password
     * 
     * This endpoint updates the password of the authenticated user
     */
    'put'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserServiceUpdatePassword.Responses.$200>
  }
  ['/api/rest/v1/users/{id}']: {
    /**
     * UserService_GetUser - Get a user
     * 
     * This endpoint returns a user
     */
    'get'(
      parameters?: Parameters<Paths.UserServiceGetUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserServiceGetUser.Responses.$200>
    /**
     * UserService_DeleteUser - Delete a user
     * 
     * This endpoint deletes a user
     */
    'delete'(
      parameters?: Parameters<Paths.UserServiceDeleteUser.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserServiceDeleteUser.Responses.$200>
  }
  ['/api/rest/v1/users/{id}/password/reset']: {
    /**
     * UserService_ResetPassword - Reset password
     * 
     * This endpoint resets a user's password
     */
    'post'(
      parameters?: Parameters<Paths.UserServiceResetPassword.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UserServiceResetPassword.Responses.$200>
  }
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
