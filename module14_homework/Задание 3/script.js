const input = document.querySelector('input');
const button = document.querySelector('button');
const message = document.querySelector('.message');

button.addEventListener('click', () => {
  const value = input.value;
  if (value < 1 || value > 10) {
    message.textContent = 'число вне диапазона от 1 до 10';
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${value}`);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        // Далее можно использовать полученные данные для отображения на странице
      } else {
        message.textContent = 'Произошла ошибка при запросе';
      }
    };
    xhr.send();
  }
});
