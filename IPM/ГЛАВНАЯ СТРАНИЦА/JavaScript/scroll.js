function scrollSlider() {
    const slider = document.querySelector('.slider-wrap');
    const sliderWidth = slider.scrollWidth;
    const windowWidth = window.innerWidth;

    let animationFrameId;

    function step(timestamp) {
        const scrollStep = (timestamp / 11) % (sliderWidth - windowWidth);
        slider.scrollLeft = scrollStep;
        animationFrameId = window.requestAnimationFrame(step);
    }

    function start() {
        animationFrameId = window.requestAnimationFrame(step);
    }

    function stop() {
        window.cancelAnimationFrame(animationFrameId);
    }

    slider.addEventListener('mouseover', stop);
    slider.addEventListener('mouseout', start);

    start();
}

scrollSlider();