var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var produtList;
if(localStorage.getItem("prodectContainer") == null){
    produtList=[];
}
else{
    produtList=JSON.parse(localStorage.getItem("prodectContainer"));
    disPlaydata();
}
function addProudect(){
    var prodect={
            name:siteName.value,
            site:siteUrl.value,
        }
        produtList.push(prodect);
        localStorage.setItem("prodectContainer" , JSON.stringify(produtList))
        disPlaydata();
}
function disPlaydata(){
   var temp = ""
   for(var i=0;i<produtList.length;i++){
    temp +=`<div class="d-flex bg-light p-4 mb-3">
    <h2 class="w-50">`+produtList[i].name+`</h2>
    <a class="btn btn-primary" href="`+produtList[i].site+`" target="_blank">visit</a>
    <button class="btn btn-danger btndelete ms-3" onclick="deletData(`+i+`)">delet</button>
</div>`
   }
   document.getElementById("bookmarkList").innerHTML = temp ;
}
function deletData(x){
    produtList.splice(x,1);
    //localStorage.setItem("prodectContainer" , JSON.stringify(produtList))
    disPlaydata();
}
