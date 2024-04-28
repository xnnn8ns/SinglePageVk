// Получаем все ссылки и блоки контента
var links = document.querySelectorAll('.user-data__nav a');
var contents = document.querySelectorAll('.user-data__content div');

// добавляем класс к первой ссылке
links[0].classList.add('active');

// Для каждой ссылки добавляем обработчик события
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Предотвращаем переход по ссылке
        event.preventDefault();

        // Удаляем класс 'active' с предыдущей активной ссылки
        document.querySelector('.user-data__nav a.active').classList.remove('active');

        // Добавляем класс 'active' к ссылке, по которой кликнули
        this.classList.add('active');

        // Получаем id блока контента, который нужно показать
        var contentId = this.id.replace('-link', '-content');

        // Для каждого блока контента
        contents.forEach(function(content) {
            // Если id блока совпадает с id, полученным из ссылки, то устанавливаем flex и удаляем класс 'hidden'
            if (content.id === contentId) {
                content.classList.remove('hidden');
                content.style.display = 'flex';
            } else {
                // Иначе устанавливаем display в 'none' и добавляем класс 'hidden'
                content.classList.add('hidden');
                content.style.display = 'none';
            }
        });
    });
});