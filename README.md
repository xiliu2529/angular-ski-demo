# MyAngularApp

本项目使用 [Angular CLI](https://github.com/angular/angular-cli) **21.0.3 版本**生成。

## 开发服务器（Development server）

启动本地开发服务器，运行：

```bash
ng serve
```

服务器启动后，在浏览器中访问：

http://localhost:4200/

当你修改任何源代码文件时，应用会自动重新加载。

## 代码脚手架（Code scaffolding）

Angular CLI 提供了强大的代码脚手架工具。  
要生成一个新的组件，运行：

```bash
ng generate component component-name
```

如果你想查看所有可用的脚手架（例如 `components`、`directives`、`pipes` 等），可以运行：

```bash
ng generate --help
```

## 构建项目（Building）

要构建项目，运行：

```bash
ng build
```

构建完成后，生成的文件会存放在 `dist/` 目录中。  
默认情况下，生产环境构建会对应用进行性能和速度优化。

## 运行单元测试（Running unit tests）

使用 [Vitest](https://vitest.dev/) 作为测试运行器来执行单元测试：

```bash
ng test
```

## 运行端到端测试（Running end-to-end tests）

运行端到端（e2e）测试：

```bash
ng e2e
```

Angular CLI 默认不包含端到端测试框架，你可以根据项目需求自行选择合适的工具。

## 其他资源（Additional Resources）

想了解更多关于 Angular CLI 的使用方法（包括详细的命令说明），请访问：

https://angular.dev/tools/cli
