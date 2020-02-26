const cursor = document.querySelector('.cursor');

document.addEventListener('mouseover', e => {
    // console.log(e);
    cursor.setAttribute("style", "top: "+(e.pageY-16)+"px; left:"+(e.pageX-16)+"px;")
})