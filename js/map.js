var map = L.map('contact-map').setView([25.562243211253612, -100.23600310052022], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([25.562243211253612, -100.23600310052022]).addTo(map);
