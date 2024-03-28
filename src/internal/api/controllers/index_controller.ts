// index-service-controller.ts
import type { Context } from 'openapi-backend';
import type { Request, Response } from 'express';
import {
  CreateHelloParams,
  CreateHelloRequest,
  CreateHelloResponse,
  GetHelloResponse,
} from '../types/index-service-types';

async function indexServiceCreateHello(
  c: Context<CreateHelloRequest, CreateHelloParams>,
  _req: Request,
  res: Response
): Promise<Response<CreateHelloResponse>> {
  const { identifier } = c.request.params;
  const requestBody = c.request.requestBody;

  const response: CreateHelloResponse = {
    identifier,
    title: requestBody.title,
    content: requestBody.content,
  };

  return res.status(200).json(response);
}

async function indexServiceGetHello(
  _c: Context,
  _req: Request,
  res: Response
): Promise<Response<GetHelloResponse>> {
  const response: GetHelloResponse = {
    content: 'hello',
  };

  return res.status(200).json(response);
}

async function indexServiceGetHelloo(
  _c: Context,
  _req: Request,
  res: Response
): Promise<Response<GetHelloResponse>> {
  const response: GetHelloResponse = {
    content: 'hello',
  };

  return res.status(200).json(response);
}

export {
  indexServiceCreateHello,
  indexServiceGetHello,
  indexServiceGetHelloo,
};
