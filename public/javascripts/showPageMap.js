mapboxgl.accessToken='pk.eyJ1IjoibWl0dGFsLTEyMyIsImEiOiJja3k5eHlzNmUwMDV4Mm9vZmR4YjJxZnB2In0.C_9N2cWfuUOX-47qi3a52A';
const map= new mapboxgl.Map({
    container:'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:campground.geometry.coordinates,
    zoom:10
});
map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)