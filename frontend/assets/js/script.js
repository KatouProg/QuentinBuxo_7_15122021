// DB provisoire

const posted = [
  { id: 1, description: "Looool", img: 'assets/img/cc_t387d4a0e.webp'},
  { id: 2, description: 'Mdrrr', img: 'assets/img/cc_t552b7c3c.webp'},
  { id: 3, description: 'Trop drole wallah !!!', img: 'assets/img/cc_t387d4a0e.webp'},
  { id: 4, description: 'Ahahahah', img: 'assets/img/cc_t552b7c3c.webp'},
  { id: 5, description: 'Ohohohoh', img: 'assets/img/cc_t387d4a0e.webp'},
  { id: 6, description: 'Xptdrrrrrr', img: 'assets/img/cc_t552b7c3c.webp'},
  { id: 7, description: 'Ptdrrrr', img: 'assets/img/cc_t387d4a0e.webp'},
  { id: 8, description: 'Pfffffffff...', img: 'assets/img/cc_t552b7c3c.webp'},
];

// set little red dot above icons nav
window.addEventListener("load", () => {
  let checkbox = document.getElementsByTagName('input'); 
  let notif = document.getElementById('nav-notif');

  // check if at least one of the checkboxes on the DOM is checked
  const checkboxCheck = () => { 
    for (let i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked) {
        return true;
      }
    }
    return false;
  }

  // set red dot
  const setNotif = () => {
    if (checkboxCheck()){
      // console.log('true');
      notif.style.visibility = 'visible';
      notif.style.opacity = '1';
    } else {
      // console.log('false');
      notif.style.visibility = 'hidden';
      notif.style.opacity = '0';
    }
  }
  
  // check once if red dot is needed
  setNotif();

  // watch any change
  document.addEventListener('click', setNotif);

});

