import baseConf from "./env"
console.log("baseurl:"+baseConf.baseUrl);


export default async(url='',data={},type='GET',methods='fetch')=>{
    type = type.toUpperCase();
    url = baseConf.baseUrl + url;
    if(type == 'GET'){
        let baseStr = '';
        Object.keys(data).forEach((key)=>{
            baseStr += key + '=' + data[key] + '&';
        })
        if(baseStr !== ''){
            let baurl = baseStr.substr(0,baseStr.lastIndexOf('&'));
            url += baurl;
        }
    }
    if(window.fetch || methods == 'fetch'){
        let requestConfig = {
            method:type,
            credentials: 'include',
            headers:{
                'Accept': 'application/json',
				'Content-Type': 'application/json'
            },
            mode:'cors',
            cache: "force-cache"
        }
        if(type == 'POST'){
            Object.defineProperty(requestConfig,'body',{
                value:JSON.stringify(data)
            })
        }
        try{
            const response = await fetch(url,requestConfig);
            const responsejson = await response.json();
            return responsejson;
        }catch(error){
            throw new Error(error);
        }
    }else{
        return new Promise((resolve,reject)=>{
            let requestObj;
            if(window.XMLHttpRequest){
                requestObj = new XMLHttpRequest();
            }
            else{
                requestObj = new ActiveXObject;
            }
            let sendData = '';
            if (type == 'POST') {
				sendData = JSON.stringify(data);
			}
            requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

            requestObj.onreadystatechange(()=>{
                if(requestObj.readyState == 4){
                    if(requestObj.status == 200){
                        const resp = requestObj.response;
                        if(typeof resp !== 'object'){
                            let resp = JSON.parse(resp);
                        }
                        resolve(resp);
                    }else{
                        reject(requestObj);
                    }
                }
            })
        })
    }

}
