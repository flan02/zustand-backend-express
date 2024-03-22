// type definitions includes .d.ts files 

// TODO añadimos un dato extra a una interfaz
declare namespace Express {
  interface Request {
    user: any
  }
}

// ! transpile-only: don't run the build command so we don't create a dist folder. Avoiding we can set extra props to req.user (type Response)
// * "dev": "ts-node-dev --respawn --transpile-only index.ts", 