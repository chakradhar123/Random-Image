window.displayImage=(imageData)=>{
    let image=document.createElement("IMG");
    image.setAttribute("src", imageData.message);
    image.setAttribute("alt","random dog image");
    document.body.appendChild(image);

}

window.onload=()=>{
    fetch("https://dog.ceo/api/breeds/image/random").then(
        res=>res.json().then(res=>{
            displayImage(res)
        }
        ).catch(err=>{
            console.log(err);
        })

    )
}

