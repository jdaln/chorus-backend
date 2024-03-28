// userservice-types.ts
import type { Definitions } from './openapi.d.ts';

export type TemplatebackendUser = Definitions.TemplatebackendUser;
export type TemplatebackendCreateUserReply = Definitions.TemplatebackendCreateUserReply;
export type TemplatebackendCreateUserResult = Definitions.TemplatebackendCreateUserResult;
export type TemplatebackendUpdatePasswordRequest = Definitions.TemplatebackendUpdatePasswordRequest;
export type TemplatebackendDeleteUserReply = Definitions.TemplatebackendDeleteUserReply;
export type TemplatebackendGetUserReply = Definitions.TemplatebackendGetUserReply;
export type TemplatebackendGetUserMeReply = Definitions.TemplatebackendGetUserMeReply;
export type TemplatebackendResetPasswordReply = Definitions.TemplatebackendResetPasswordReply;
export type TemplatebackendUpdatePasswordReply = Definitions.TemplatebackendUpdatePasswordReply;

export type CreateUserParams = Definitions.TemplatebackendUser;
export type DeleteUserParams = { id: string };
export type GetUserParams = { id: string };
export type GetUserMeParams = {};
export type ResetPasswordParams = { id: string, body: object };
export type UpdatePasswordParams = Definitions.TemplatebackendUpdatePasswordRequest;
