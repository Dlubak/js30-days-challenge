const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function displayList() {
  itemsList.innerHTML = items
    .map(
      (item, i) => `
    <li>
      <input type="checkbox" id="${i}" ${item.completed ? 'checked' : ''}/>
      <label for="${i}">${item.name}</label>
    </li>`
    )
    .join('');
}
function markCompleted(event) {
  if (event.target.matches('input')) {
    const { id } = event.target;
    items[id].completed = !items[id].completed;
    localStorage.setItem('items', JSON.stringify(items));
    displayList();
  }
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
  localStorage.setItem('items', JSON.stringify(items));
  displayList();
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', markCompleted);
displayList();
