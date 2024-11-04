const gratitudeInput = document.getElementById('gratitude-input');
const addButton = document.getElementById('add-button');
const gratitudeList = document.getElementById('gratitude-list');

addButton.addEventListener('click', () => {
  const gratitudeText = gratitudeInput.value;
  if (gratitudeText !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = gratitudeText;
    gratitudeList.appendChild(listItem);
    gratitudeInput.value = '';
  }
});
