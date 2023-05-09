const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach(tab => {
  tab.addEventListener('click', setNewTab);
});

function setNewTab(e) {
  const activeTab = document.querySelector('.tabs__item--active');
  if (activeTab) {
  activeTab.classList.remove('tabs__item--active');
  
  }
  e.target.classList.add('tabs__item--active');  
  
  const activeText = document.querySelector('.tabs__text--active');
  if (activeText) {
    activeText.classList.remove('tabs__text--active');   
  }
  document.querySelector('#tabs__hide' + e.target.id).classList.add('tabs__text--active');
}