export function closeBidModal() {
    const reloadPage = () => {
        window.location.reload();
    };

    const closeModalButtons = document.querySelectorAll('#bidModal .btn-closeModal');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', reloadPage);
    });
}
