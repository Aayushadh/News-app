const news= document.querySelector("#news");
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
fetch(`/news`).then((response)=>{
    response.json().then((data)=>{
        shuffle(data.articles);
       for(let i=0;i<5;i++)
       {
           if(data.articles[i])
           {
               const inst = document.createElement("div");
               const link = document.createElement("a");
               link.href= data.articles[i].url;
               link.target="_blank";
               const pic = document.createElement("img");
               pic.src=data.articles[i].urlToImage;
               const para = document.createElement("p");
               const text = document.createTextNode(data.articles[i].title);
               
               const detail = document.createElement("div");
               detail.innerHTML=data.articles[i].description + `<a href=${data.articles[i].url} style="color:blue">Read More..</a><br>`;
               para.appendChild(text);
               para.style.fontWeight="bolder";
               link.appendChild(para);
               inst.appendChild(link);
               inst.appendChild(detail);
               inst.appendChild(pic);
               
               inst.style.border="1px solid";
               news.appendChild(inst);

           }
           else
           break;
       }
    });
});
