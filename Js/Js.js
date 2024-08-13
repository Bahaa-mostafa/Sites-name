


const sitename =document.getElementById("sitename");
const url=document.getElementById("Url");
const btn=document.getElementById("btn");


const siteList=[]

function isValidURL(url) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}
btn.addEventListener("click" , function (){
    let isUrlValid = isValidURL(url.value)
    console.log(isUrlValid);
    if (isUrlValid === false){
        alert("Please Write URL")
        tocleaninput()
        return;
    }
    var Site={
        sites:sitename.value,
        urlName: url.value
    }
    if(siteList.sites==" "){
        alert("Enter Data")
    }
    siteList.push(Site)
    todisplay()
    tocleaninput()
})
// function to display contant ;
function todisplay(){
    var container='';
    for(var i =0; i<siteList.length;i++){
        container+=`<tr>
        <td> ${i+1} </td>
        <td> ${siteList[i].sites} </td>
        <td> <button class="btn btn-success" onclick="toVisitsite(${i})"> <i class="fa-regular fa-eye"></i> Visit </button> </td>
        <td> <button class=" btn btn-danger" onclick="toDeleteRow(${i})" ><i class="fa-solid fa-trash-can "></i> Delete </button> </td>
        </tr>`
    }
    document.getElementById("tbody").innerHTML=container
}


// function To Delete Row
function toDeleteRow(i){
    siteList.splice(i,1);
    todisplay()
}

// function To Visite Site
function toVisitsite(i){
    location.href=siteList[i].urlName
    console.log(location.href)
}

// function to clean input;
function tocleaninput(){
    sitename.value=" ";
    url.value=" ";
}






