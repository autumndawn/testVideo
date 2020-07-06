# testVideo

# 在编译之前

CocosCreator_2.2.0\resources\static\build-templates\shares\main.js 目录下

```
cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
//在此之前插入
cc.game.run(option, onStart);
```

然后build之后再run就可以播放了

# 问题

## 错误
在mate 20 pro 版本号 EMUI 10.1.0.160 微信版本 7.0.16的 环境下 点击play按钮播放视频，在微信浏览器里会出现进度条，并且挡住后面的按钮。如下图所示：
![error](/png/error.jpg)

点 **小窗口播放** 字样还出现广告或者是视频推荐
![error1](/png/error1.jpg)

## 正确
在 华为 p9 EMUI 8.0.0, 微信版本7.0.16的 环境下，点击播放视频，不会出现进度条，且不会挡住按钮。

在 OPPO FIND X2 PRO COLOROSV7.1 微信版本7.0.16的 环境下，也正常。
如下图所示： ![ok](/png/ok.jpg) 
