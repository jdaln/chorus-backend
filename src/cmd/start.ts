import * as path from "path";
import * as fs from "fs";
import express from "express";
import OpenAPIBackend from "openapi-backend";
import type { Request } from 'openapi-backend';
import { config as dotenvConfig } from "dotenv";
import yargs from "yargs";
const { hideBin } = require('yargs/helpers')
import { provideConfig } from "../internal/cmd/provider/config";
import { provideDb } from "../internal/cmd/provider/db";
import { provideControllers, RegisterAll } from "../internal/cmd/provider/controllers";

// Load environment variables
dotenvConfig();

// Command-line arguments
const argv = yargs(hideBin(process.argv))
  .option("env", {
    describe: "Runtime environment, e.g. int, acc, prod...",
    type: "string",
  })
  .option("config", {
    describe: "Config file path",
    type: "string",
    default: "./configs/dev/template_backend.yml",
  })
  .help()
  .alias("help", "h")
  .parseSync();

// Main function
const main = async () => {
  await runServer();
};

const runServer = async () => {
  const conf = provideConfig(argv.config);
  provideDb("template_backend");

  const api = new OpenAPIBackend({ definition: "../internal/api/server_template/openapi/openapi.yaml" });
  const controllers = provideControllers();
  RegisterAll(api, controllers);

  api.init();

  const app = express();
  app.use(express.json());

  app.use((req, res) => api.handleRequest(req as Request, req, res));

  app.listen(conf.daemon.http.port, () => {
    console.log(`Server running on port ${conf.daemon.http.port}`);
  });
};

// Equivalent to Python's `if __name__ == '__main__':`
if (require.main === module) {
  main();
}
