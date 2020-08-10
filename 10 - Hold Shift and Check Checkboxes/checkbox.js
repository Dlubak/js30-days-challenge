const checkboxes = Array.from(document.querySelectorAll('.item'));
let lastCheckedBox = null;

function handleClick(e) {
    if(!lastCheckedBox) {
        lastCheckedBox = e.target.parentElement;
        return
    }
    if(e.shiftKey) {
        const first = checkboxes.indexOf(lastCheckedBox);
        const last = checkboxes.indexOf(e.target.parentElement);
        checkboxes.slice(Math.min(first, last), Math.max(first, last) + 1)
        .forEach(checkbox => checkbox.children[0].checked = true);
    }
    lastCheckedBox = e.target.parentElement;
    }


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick));
