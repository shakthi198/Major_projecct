let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const delta = scrollPosition - lastScrollTop;

    // Reset clouds to original position when at the top
    if (scrollPosition === 0) {
        document.getElementById('c1').style.transform = `translate(-120px, -120px)`;
        document.getElementById('c2').style.transform = `translate(-300px, -220px)`;
        document.getElementById('c3').style.transform = `translate(850px, -550px)`;
        document.getElementById('c4').style.transform = `translate(460px, -690px)`;
        document.getElementById('c5').style.transform = `translate(-440px, -820px)`;
        document.getElementById('c6').style.transform = `translate(650px, -880px)`;
        document.getElementById('c7').style.transform = `translate(-100px, -1080px)`;
    } 
    // Move clouds to the right when scrolling down
    else if (delta > 0) {
        document.getElementById('c1').style.transform = `translate(${scrollPosition * 0.1}px, -190px)`;
        document.getElementById('c2').style.transform = `translate(${scrollPosition * 0.1 + 5}px, -220px)`;
        document.getElementById('c3').style.transform = `translate(${scrollPosition * 0.1 + 450}px, -550px)`;
        document.getElementById('c4').style.transform = `translate(${scrollPosition * 0.1 + 350}px, -690px)`;
        document.getElementById('c5').style.transform = `translate(${scrollPosition * 0.1 + 150}px, -820px)`;
        document.getElementById('c6').style.transform = `translate(${scrollPosition * 0.1 - 50}px, -880px)`;
        document.getElementById('c7').style.transform = `translate(${scrollPosition * 0.1 - 150}px, -1080px)`;
    } 
    // Move clouds to the left when scrolling up
    else {
        document.getElementById('c1').style.transform = `translate(${scrollPosition * 0.1}px, -120px)`;
        document.getElementById('c2').style.transform = `translate(${scrollPosition * 0.1 - 10}px, -220px)`;
        document.getElementById('c3').style.transform = `translate(${scrollPosition * 0.1 - 250}px, -550px)`;
        document.getElementById('c4').style.transform = `translate(${scrollPosition * 0.1 - 250}px, -690px)`;
        document.getElementById('c5').style.transform = `translate(${scrollPosition * 0.1 + 450}px, -820px)`;
        document.getElementById('c6').style.transform = `translate(${scrollPosition * 0.1 + 650}px, -880px)`;
        document.getElementById('c7').style.transform = `translate(${scrollPosition * 0.1 + 50}px, -1080px)`;
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // For Mobile or negative scrolling
});