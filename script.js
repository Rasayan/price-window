let mainContent = document.querySelector('#main_content');
let secondaryContent = document.querySelector('#secondary_content');
let annually = document.querySelector('#annually');
let monthly = document.querySelector('#monthly');

annually.style.color = 'transparent';
annually.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.9)';
document.querySelector('.switch input').addEventListener('change', e => { 
  mainContent.style.display = e.target.checked ? 'block' : 'none';
  annually.style.color = e.target.checked ? 'transparent' : 'black';
  annually.style.textShadow = e.target.checked ? '0 0 5px rgba(0, 0, 0, 0.9)' : 'none';
  
  secondaryContent.style.display = e.target.checked ? 'none' : 'block';
  monthly.style.color = e.target.checked ? 'black' : 'transparent';
  monthly.style.textShadow = e.target.checked ? 'none' : '0 0 5px rgba(0, 0, 0, 0.9)';
});