
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const itemList = document.getElementById('itemList');


addItemButton.addEventListener('click', function () {    
const newItemText = itemInput.value;   
if (newItemText.trim() !== '') {       
const listItem = document.createElement('li');       
listItem.textContent = newItemText;      
itemList.appendChild(listItem);       
itemInput.value = '';
} else {
    alert('Please enter a valid item.');
}
});
