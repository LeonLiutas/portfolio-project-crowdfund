function setActivePledge(currentElement) {
  //remove active class from old item en set active class to clicked item
  pledgeElements = document.querySelectorAll('.pledge-item.active');          
  pledgeElements.forEach(el => el.classList.remove('active'));
  currentElement.classList.add('active');

  //uncheck radio elements
  radioElements = document.querySelectorAll('.pledge-item:not(.active) .radio-pledge');
  radioElements.forEach(el => el.checked=false);

  //check radio element of clicked item
  document.querySelectorAll('.pledge-item.active .radio-pledge')[0].checked=true
}

function openSuccessModal() {
  document.getElementById('modal-pledge').classList.remove('open');
  document.getElementById('modal-success').classList.add('open');
}