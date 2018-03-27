'use strict';
import React,{ PureComponent } from 'react';
import Viewer from 'viewerjs';
import "../css/viewer.min.css";

import imageDefault from '../img/imageDefault.png';
import img01 from '../img/01.jpg';
import img02 from '../img/02.jpg';
import img03 from '../img/03.jpg';
import img04 from '../img/04.jpg';
import img05 from '../img/05.jpg';
import img06 from '../img/06.jpg';

//静态图片数据
const imgData = [
    {
        src: img01,
        name:"01",
    },
    {
        src: img02,
        name:"02",
    },
    {
        src: img03,
        name:"03",
    },
    {
        src: img04,
        name:"04",
    },
    {
        src: img05,
        name:"05",
    },
    {
        src: img06,
        name:"06",
    },
];

/**
 * @author luotao
 * @date 2018-3-27 22:14:54
 * @decs 图片预览插件
 */
export default class ImgPreview extends PureComponent {
    render(){
        return(
            <ul
                className="image-list"
                id="imgPre"
            >
                {
                    imgData.map((info,i)=>{
                        return (
                            <li
                                key={i}
                                className="image"
                            >
                                <div className="img-con">
                                    <LazyLoad
                                        src={imageDefault}
                                        data-src={info.src}
                                    />
                                </div>
                                <div className="image-bottom">
                                    <sapn
                                        className="iconfont icon-chakanyanjingshishifenxi "
                                        onClick={()=>{
                                            this.imgShow(i);
                                        }}
                                    >
                                        查看大图
                                    </sapn>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        )
    }

    imgShow(i){
        let imgs = document.querySelectorAll('.img-con');
        let e = document.createEvent("MouseEvents");
        e.initEvent("click", true, true,);//这里的click可以换成你想触发的行为
        imgs[i].children[0].dispatchEvent(e);//这里的clickME可以换成你想触发行为的DOM结点
    }

    componentDidMount() {
        new Viewer(document.getElementById('imgPre'),{
            inline:false,
        });
    }
}