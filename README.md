# Jackblog Vue 版

Jackblog 是使用 Node.js + MongoDB + 其它客户端框架开发的个人博客系统,前后端分离,仿简书模板.此为客户端 Vue版  
服务端有:  
[express 版](https://github.com/jackhutu/jackblog-api-express)  
[koa 版](https://github.com/jackhutu/jackblog-api-koa)         
客户端有:  
[angular1.x 版](https://github.com/jackhutu/jackblog-angular1)   
[angular2.x 版](https://github.com/jackhutu/jackblog-angular2)   
[react redux 版](https://github.com/jackhutu/jackblog-react-redux)  
[vue 版](https://github.com/jackhutu/jackblog-vue)    
移动端有:   
[react native 版](https://github.com/jackhutu/jackblog-react-native-redux)


## 开发

```
$ npm install
$ gulp serve
```

## 打包  
 
```
$ gulp build 或 gulp serve:dist
```

## 线上布署
```
$ pm2 start process.json
```
可参考[利用git和pm2一键布署项目到vps](http://angular1.jackhu.top/article/55cd8e00c6e998b817a930c7)

## License
MIT
