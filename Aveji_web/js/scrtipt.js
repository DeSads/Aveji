const burger = document.getElementsByClassName("header__burger")[0]
const headerContent = document.getElementsByClassName("header__menu-content")[0]
const aboutTitle = document.getElementsByClassName("about__title")[0]
const screenWidth = window.screen.width

burger.addEventListener('click', (e) => {
    if (screenWidth <= 375){
      e.stopPropagation();
      burger.style.display = 'none';
      headerContent.style.display = 'block';
    }
  });
  
document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && !headerContent.contains(e.target) && screenWidth <= 375) {
    burger.style.display = 'block';
    headerContent.style.display = 'none';
  }
});

if (screenWidth > 375){
  aboutTitle.textContent ='Более 5 лет создаем мебель для вашего комфорта'
} else{
  aboutTitle.textContent ='О компании'
}