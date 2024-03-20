Path aliases with TypeScript in Node.js

1. Setup the express server with typescript.
2. In the tsconfig.json file update the baseUrl pointing towards the source folder.
3. Create the paths object which contain { "custom_name":"relative path of folder from baseUrl"}
4. Install module-alias and dev-dependencies and import it in the index.ts file. (import 'module-alias/register')
5. Modify the package.json folder as done.
6. Compile and run.

Source

- https://levelup.gitconnected.com/path-aliases-with-typescript-in-node-js-230803e3f200
- https://www.npmjs.com/package/module-alias
