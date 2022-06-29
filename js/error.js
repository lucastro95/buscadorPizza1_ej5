const error = document.querySelector('.error')

export default function showError(message) {
    error.style = 'visibility:visible'
    error.innerText = message;
    setTimeout(() => {
        error.style = 'visibility:hidden'
        error.innerText = '';
    }, 5000)
}