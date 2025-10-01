function drag(){
    //responsible for all the initall dives for drag

    let dragging = false;
    let mouseX, mouseY;
    let eleX, eleY;

    const boxes = document.querySelectorAll("[draggable]")

    boxes.forEach(box => {
        box.addEventListener('mousedown', mouseDown);
        box.style.top = "0px";
        box.style.left = "0px";
    });

function mouseDown(e){

    e.preventDefault();
    
    dragging = this;
    //specifies the particular dives  for dragging like for first divv or seven div

    mouseX = e.pageX;
    mouseY = e.pageY;
    //this is used tyo calculate the movement of the mouse so which is we have initailized it wilt mouse down event


    eleX = Number.parseInt(dragging.style.left)
    eleY = Number.parseInt(dragging.style.top)
    //to calculate the new position of the element after drag

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e){
    if(dragging){
        const deltaMouseX = e.pageX - mouseX;
        const deltaMouseY = e.pageY - mouseY;

        dragging.style.left = deltaMouseX + eleX + "px"
        dragging.style.top = deltaMouseY + eleY + "px"
    }
}

function mouseUp(e){

    dragging = false;
}


}

drag();