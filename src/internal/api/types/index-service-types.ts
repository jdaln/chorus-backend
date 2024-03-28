// index-service-types.ts
import type { Definitions, Paths } from './openapi.d.ts';

export type CreateHelloResponse = Definitions.TemplatebackendCreateHelloReply;
export type GetHelloResponse = Definitions.TemplatebackendGetHelloReply;

export type CreateHelloRequest = Paths.IndexServiceCreateHello.Parameters.Body;
export type CreateHelloParams = Paths.IndexServiceCreateHello.PathParameters;
