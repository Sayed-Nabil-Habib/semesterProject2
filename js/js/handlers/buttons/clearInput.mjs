export function clearInputListeners() {
    function clearInput(input) {
        input.value = '';
        console.log('Input cleared');
    }

    document.addEventListener('DOMContentLoaded', function() {
        const clearButtons = document.querySelectorAll('.btn-clear');
        clearButtons.forEach(button => {
            button.addEventListener('click', event => {
                const inputGroup = event.target.closest('.input-group');
                const input = inputGroup.querySelector('input');
                clearInput(input);
                console.log('Clear button clicked');
            });
        });
    });
}
