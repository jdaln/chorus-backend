// userservice-controller.ts
import type { Request, Response } from 'express';
import type {
  CreateUserParams,
  DeleteUserParams,
  GetUserParams,
  GetUserMeParams,
  ResetPasswordParams,
  UpdatePasswordParams,
  TemplatebackendCreateUserReply,
  TemplatebackendDeleteUserReply,
  TemplatebackendGetUserReply,
  TemplatebackendGetUserMeReply,
  TemplatebackendResetPasswordReply,
  TemplatebackendUpdatePasswordReply
} from '../types/user-service-types';

import { UserService } from '../../../pkg/user/service/user'; // Import UserService from the appropriate path

class UsersController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(req: Request<{}, {}, CreateUserParams>, res: Response<TemplatebackendCreateUserReply>) {
    try {
      const user = await this.userService.createUser(req.body);
      const response: TemplatebackendCreateUserReply = {
        result: { id: user.id.toString() }
      };
      res.status(200).json(response);
    } catch (e) {
      console.error('Error:', e);
      res.status(500).send(e.message);
    }
  }

  async deleteUser(req: Request<DeleteUserParams>, res: Response<TemplatebackendDeleteUserReply>) {
    res.status(501).send('Not implemented');
  }

  async getUser(req: Request<GetUserParams>, res: Response<TemplatebackendGetUserReply>) {
    res.status(501).send('Not implemented');
  }

  async getUserMe(_req: Request<GetUserMeParams>, res: Response<TemplatebackendGetUserMeReply>) {
    res.status(501).send('Not implemented');
  }

  async resetPassword(req: Request<ResetPasswordParams>, res: Response<TemplatebackendResetPasswordReply>) {
    res.status(501).send('Not implemented');
  }

  async updatePassword(req: Request<{}, {}, UpdatePasswordParams>, res: Response<TemplatebackendUpdatePasswordReply>) {
    res.status(501).send('Not implemented');
  }
}

export default UsersController;
