



mkdir backend
cd backend
npm init -y

npm install --save-dev @types/node @typescript-eslint/eslint-plugin \
@typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-import \
eslint-plugin-prettier prettier ts-node typescript

npm install --save-dev nodemon
npm install --save express body-parser
npm install --save-dev @types/express

cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es5", "es6", "dom"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "baseUrl": "src/",
    "typeRoots": ["./src/types", "./node_modules/@types"],
    "resolveJsonModule": true,
    "outDir": "./dist",
    "removeComments": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true
  },
  "include": ["./src/**/*.tsx", "./src/**/*.ts"],
  "exclude": ["node_modules", "test/**/*.ts"]
}
EOF

cat > .eslintrc << EOF
{
  "parser": "@typescript-eslint/parser",
  "extends": [
      "plugin:@typescript-eslint/recommended",
      "prettier"
  ],
  "plugins": ["prettier"],
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
      "prettier/prettier": "error"
  }
}
EOF

cat > .prettierrc << EOF
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "printWidth": 120
}
EOF

#  "scripts": {
# "build": "npx tsc",
#     "start": "TZ='UTC' node dist/index.js",
#     "dev": "TZ='UTC' nodemon src/index.ts",
#     "lint": "eslint src/**/*.ts",
#     "format": "eslint src/**/*.ts --fix",
#     "test": "jest --watchAll",
#     },

mkdir src
cat > src/index.ts << EOF
console.log("Hello World");
EOF

cat > nodemon.json << EOF
{
    "ext": ".ts, .js, .yaml"
}
EOF



cat > src/index.ts << EOF
import express, { Express, Request, Response } from 'express'
import bodyParser from 'body-parser'

const app: Express = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.listen(8080, async () => {
  console.log('Server is running at http://localhost:8080')
})
EOF


npm i -D jest @types/jest ts-jest
jest --init


cat > jest.config.js << EOF
import type { Config } from 'jest';

const config: Config = {
	clearMocks: true,
	roots: ['<rootDir>/src'],
	testEnvironment: 'node',
	preset: 'ts-jest'
};

export default config;
EOF

cat > .editorconfig << EOF
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = tab
insert_final_newline = true
trim_trailing_whitespace = true
quote_type = single
EOF

npm run test
npm run dev
