// authentication-service-controller.ts
import type { AuthenticationServiceAuthenticateParams, AuthenticationServiceAuthenticateRequest, AuthenticationServiceAuthenticateReply } from "../types/authentication-service-types";
import type { Request, Response } from "express";
import type { Context } from "openapi-backend";

class AuthenticationServiceController {
  async AuthenticationService_Authenticate(
    c: Context<AuthenticationServiceAuthenticateRequest, AuthenticationServiceAuthenticateParams>,
    _req: Request,
    res: Response
  ): Promise<Response> {
    const requestBody = c.request.requestBody;

    const result: AuthenticationServiceAuthenticateReply = { result: {token: "hello"} };

    return res.status(200).json(result);
  }
}

export default AuthenticationServiceController;
