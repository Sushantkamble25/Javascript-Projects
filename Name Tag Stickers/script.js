//values will be created using let keyword because we need to 
//change the color multiple times soi thats why

let wrapper = document.getElementsByClassName("wrapper")[0];

let template = document.getElementsByTagName("template")[0];

let names = ["viajy", "shaurays", "Sushant"]

let color = [
    "#ff0000" , "#00ff00", "#00ff00", 
     "#ff0000" , "#3492efff", "#6014edff",
      "#ff0000" , "#086a0891", "#f4b106ff",
       "#ff0000" , "#d3e014ff", "#ae28d3ff",
    

]

let sticker = function(name){
    let div = template.content.querySelector("div");
    let nameofStick = div.querySelector(".name");

    nameofStick.innerHTML = name;

    div.style.background = color[Math.floor(Math.random()* color.length)];

    div.style.transform = "rotate(" + (Math.random() * 40 -20) + "deg)";

    let node = document.importNode(div,true)
    //Make a real copy of this element and everything inside it (children, styles, etc.) so I can put it into the page
    //div → the blueprint card
    // importNode(div, true) → creates a fresh, separate card every time
    // true → means “deep copy” → include all children inside it (.heading, .name, etc.)


    wrapper.appendChild(node)
}    

setTimeout((refreshPage)=>{
  location.reload()
  //reload() function reloads the url like a refresh button

},1000);



names.forEach(sticker)