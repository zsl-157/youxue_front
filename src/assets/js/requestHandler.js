import { reject } from "core-js/fn/promise";


export default function httpHandler(
    {//参数请求方式,
    //请求地址，
    //请求数据
        method='get',
        url,
        data = {}
    }
){
    baseUrl = "http://localhost/";
    let http = null;
    if(window.XMLHttpRequest){
        http = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        http = new ActiveXObject();
    }
    var promise = new Promise((resolve,reject)=>{
        http.open(method,baseUrl+url);
        http.onload = function(){
            resolve(JSON.parse(http.response));
        }
        http.onerror(()=>{
            if(http.status == 0){//响应成功
                
            }
        })
        http.send(JSON.stringify(data));//发送数据
    })

}