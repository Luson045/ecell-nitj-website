let announcement = document.querySelector('.announcement');

function dragStart(event) {
    event.dataTransfer.setData("text/plain", null);
    announcement.style.opacity = "0.6";
}

function dragEnd(event) {
    announcement.style.opacity = "1";
    announcement.style.left = `${event.pageX}px`;
    announcement.style.top = `${event.pageY}px`;
    announcement.style.position = "fixed";
}