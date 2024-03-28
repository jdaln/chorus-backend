// authentication-service-types.ts
import type { Definitions, Paths } from "./openapi.d.ts";

export type AuthenticationServiceAuthenticateParams = Paths.AuthenticationServiceAuthenticate.BodyParameters;
export type AuthenticationServiceAuthenticateRequest = Paths.AuthenticationServiceAuthenticate.Parameters.Body;
export type AuthenticationServiceAuthenticateReply = Definitions.TemplatebackendAuthenticationReply;
