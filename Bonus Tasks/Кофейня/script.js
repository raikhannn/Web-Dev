document.addEventListener('DOMContentLoaded', function() {
    const coffeeMenu = {
        "Кофе №1": 3.50,
        "Кофе №2": 4.00,
        "Кофе №3": 4.50,
    };

    const snacksMenu = {
        "Вкусность №1": 1.50,
        "Вкусность №2": 2.00,
        "Вкусность №3": 2.50,
        "Вкусность №4": 3.00,
        "Вкусность №5": 3.50,
    };

    const coffeeMenuElement = document.getElementById('coffee-menu');
    const snacksMenuElement = document.getElementById('snacks-menu');
    const orderButton = document.getElementById('order-btn');

    function createMenuItem(menu, container) {
        for (let item in menu) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            menuItem.innerHTML = `<input type="checkbox" name="items[]" value="${item}:${menu[item]}"> ${item} - ${menu[item]} руб.`;
            container.appendChild(menuItem);
        }
    }

    createMenuItem(coffeeMenu, coffeeMenuElement);
    createMenuItem(snacksMenu, snacksMenuElement);

    orderButton.addEventListener('click', function() {
        const selectedItems = document.querySelectorAll('input[name="items[]"]:checked');
        let totalCost = 0;
        selectedItems.forEach(item => {
            totalCost += parseFloat(item.value.split(':')[1]);
        });
        alert(`Заказ принят! Общая сумма: ${totalCost.toFixed(2)} руб.`);
    });
});
