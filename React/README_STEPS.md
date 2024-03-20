This is created to understand achieve "absolute path imports" in Vite + React + ts.

1. Setup your Vite + React + ts project.
2. Install "npm i vite-tsconfig-paths"
3. Import and use "vite-tsconfig-paths" in vite.congig.ts file
4. in tsconfig.json file, create a baseUrl which points to the src folder.
5. Create a path object, which contains { "Custom*Folder_Name/*" : ["./path/*"]}
6. Now import the components and use them.
7. If the steps are followed correctly and still error occurs, kill the app, close the tab in browser, start the server & open the url.

SOURCE:

- https://www.youtube.com/watch?v=ooDjol-t8X0
- https://www.npmjs.com/package/vite-tsconfig-paths
