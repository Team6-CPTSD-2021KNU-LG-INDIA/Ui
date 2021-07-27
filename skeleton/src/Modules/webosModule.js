var bridge;
const servicename = ""

export function callAPI(method, params, callback){
    const API="luna://com.domain.txtapp.txtservice/"+method;

    bridge.onservicecallback = callback;
    bridge.call(API, params);
}

function setPathClicked(){
    callAPI('setpath',`{
        "path": "${document.getElementById("path").value}"
    }`,(msg)=>{});
    callAPI('ls',`{
    }`,(msg)=>{
        var arg = JSON.parse(msg);
        let list = document.getElementById("list");
        if (arg.returnValue) {
            arg.Response.forEach(file=>{
                let item = document.createElement("li");
                item.innerHTML=file;
                
                item.addEventListener("click",(event)=>{
                    callAPI('read',`{
                        "name":"${event.target.innerHTML}", "encode":"utf8"
                    }`,(msg)=>{
                        var arg = JSON.parse(msg);
                        document.getElementById("textarea").innerHTML = arg.Response;
                    });
                });
                list.appendChild(item);
            });
        }
    });
}