import AuthenticationServiceController from "../../api/controllers/authentication-controller";

let authenticationServiceController: AuthenticationServiceController | null = null;

export function provideAuthenticationServiceController(): AuthenticationServiceController {
  if (authenticationServiceController === null) {
    authenticationServiceController = new AuthenticationServiceController();
  }

  return authenticationServiceController;
}
