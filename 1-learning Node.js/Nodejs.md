# Learning about Node.js !

### What is Node.js ?
- Node.js is an open source, cross-platform JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. 
- Node.js is a back-end JavaScript runtime environment, runs on the chroimum's V8 JavaScript Engine, and executes JavaScript code outside a web browser.

### Node REPL -> Read-Eval-Print-Loop
- It just takes the users input and evalaute and return the results.
- Type node in your terminal, and it will show welcome to node and when you write any javascript code in the terminal it will read it, evalulate it and run the code and print the result in the terminal using node's js runtime.
if you have js file, type ` node filename.js ` and then enter it will run the js code.

### Native Node modules
-  native Node.js modules refer to modules written in C, C++, or other compiled languages that are bundled with the Node.js runtime. These modules are not written in JavaScript like regular Node.js modules but are instead compiled binaries. They can be used in Node.js applications to access low-level system resources or to perform computationally intensive tasks that might be more efficient in a compiled language.
- Native Node.js modules are distributed as precompiled binary files, so you don't need to compile them from source when installing them via npm (Node Package Manager). Node.js provides a C/C++ API that developers can use to create native modules. These modules can be loaded using the require() function just like regular JavaScript modules.
- To clarify, when you install an npm package, it can contain both JavaScript modules and native modules if it requires low-level interactions with the operating system or has performance-critical functionalities.

### File System !

file system is the native node module that allow us to access the local storage.
- For more imformation always take reference from offical documentation [Node File System](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html).

### What is NPM (Node pacakage manager) ?
- place which collects open-source modules that people built for node and it is created by GitHub org.
- Node comes pre bundled with Node, so if you have node installed, you will also have npm installed.
- Offical documentation [NPM](https://docs.npmjs.com/).  
  
> how to initialize the npm in your project and how to use npm modules ?
- Just like you initilalize git in your directory -> ` git init `, you can intilialize npm using the command ` npm init `, hit enter and it will ask you some question like package name, version, lisence etc.
- To install npm packages -> use command ` npm install <package-name1> <package-name2> <>...`, short hand is ` npm i <package name>`
- Now you have installed the npm package and it will show the node modulue(someone's js code) of that package in your code editor, to use that module in your js you have to include it in your file -> use ` require("package-name") ` CJS(common javascript) or you can use ` import <method/var/anything> from "package-name" ` ECMAScript6 module to use import keyword you have to add the ` "type": module ` in your ` package.json ` which is created by npm, by default "type" is CJS, you can fruther check the docs of that package you installed like how to use it, to stadardize js in both frontend and backend "import" is used.