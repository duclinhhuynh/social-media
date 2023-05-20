const menuItems = document.querySelectorAll('.menu-item');

// remove active class from all menu item
const changActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }
        else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notification .notification-count').style.display = 'none';
        }
    })
})