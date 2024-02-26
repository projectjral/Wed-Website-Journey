const wedMonth = document.querySelector('.monthNum');
const wedDays = document.querySelector('.daysNum');
const wedHours = document.querySelector('.hoursNum');
const wedMinutes = document.querySelector('.minutesNum');
const wedSeconds = document.querySelector('.secondsNum');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.btn--show-modal');

function updateCountdown() {
    const now = new Date();
    const wedDate = new Date(2024, 8 - 1, 8, 15, 23); // Corrected the month index

    const timeDifference = wedDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update HTML elements with two digits
    wedMonth.textContent = (wedDate.getMonth() + 1).toString().padStart(2, '0');
    wedDays.textContent = days.toString().padStart(2, '0');
    wedHours.textContent = hours.toString().padStart(2, '0');
    wedMinutes.textContent = minutes.toString().padStart(2, '0');
    wedSeconds.textContent = seconds.toString().padStart(2, '0');
}

// Initial update
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);



//////////////////////// Modal Window
const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

