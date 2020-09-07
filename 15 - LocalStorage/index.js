const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function displayList() {
  itemsList.innerHTML = items
    .map(
      (item, i) => `
    <li>
        <input type="checkbox" value="${i}" ${item.completed ? 'checked' : ''}>
        <label for="${i}">${item.name}</label>
    </li>`
    )
    .join('');
}
function markCompleted(event) {
  const item = items[event.target.getAttribute('for')];
  item.completed = !item.completed;
  displayList();
  localStorage.setItem('items', JSON.stringify(items));
}
function addItem(event) {
  event.preventDefault();
  if (!event.target.item.value) return;
  const itemData = {
    name: event.target.item.value,
    completed: false,
  };
  items.push(itemData);
  event.target.reset();
  displayList();
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', markCompleted);

displayList();
