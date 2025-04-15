    const selectorBtn = document.querySelector('.selector__btn');
    const selector = document.querySelector('.successes__selector');

    selectorBtn.addEventListener("click", () => {
        console.log('click');
        selector.classList.toggle('active');
    })
