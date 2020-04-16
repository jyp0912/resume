/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
ScrollReveal().reveal('.widget', { interval: 200 ,reset:true,distance: '70px'});
ScrollReveal().reveal('.skills', { interval: 2000 ,reset:true,distance: '70px'});
ScrollReveal().reveal('.portfolio', {interval: 2000 ,reset:true,distance: '70px'});
ScrollReveal().reveal('.message', { interval: 2000 ,reset:true,distance: '70px'});
