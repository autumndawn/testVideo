/*
 * @Author: your name
 * @Date: 2020-07-06 23:38:47
 * @LastEditTime: 2020-07-07 00:04:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \TestVideo\assets\GameMain.ts.ts
 */ 
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    @property(cc.VideoPlayer)
    public videoPlayer: cc.VideoPlayer = null;

    start () {
        cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
        cc.Camera.main.backgroundColor = cc.color(0, 0, 0, 0);

        // let video0 = document.getElementsByClassName('cocosVideo')[0];
        // video0.style.zIndex = -1;

        let video0 = document.getElementsByClassName('video')[0];
        video0.style.zIndex = -20;
        // video0.style.display = 'inline';
        // video0.style
        // video0.setAttribute('playsinline', 'true');
        // video0.setAttribute('webkit-playsinline', 'true');
        // video0.setAttribute('x-webkit-airplay', 'true');
        video0.setAttribute('x5-video-player-type', 'h5-page');
        video0.setAttribute('x5-video-player-fullscreen', 'true');
        video0.setAttribute('x5-video-orientation', 'landscape');

    }
    
    public play():void{
        // let video0 = document.getElementsByClassName('cocosVideo')[0];
        // video0.play();
        this.videoPlayer.play();
    }

    // update (dt) {}
}
