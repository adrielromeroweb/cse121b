/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Adriel Romero',
    photo: 'images/me.jpg',
    favoriteFoods: ['milanesa', 'papasFritas', 'helado'],
    hobbies: ['caminar', 'pasear', 'comer', 'peliculas'],
    placesLived:[]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place: 'Mar del Plata', length: '21'});
myProfile.placesLived.push({place: 'Chile', length: '2'});
myProfile.placesLived.push({place: 'Bahia Blanca', length: '5'});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').value = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo);
document.getElementById('photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach( (food) => {
    let html = document.createElement('li');
    html.textContent = food;
    document.getElementById('favorite-foods').appendChild(html);
})

/* Hobbies List */
myProfile.hobbies.forEach( (hobbie) => {
    let html = document.createElement('li');
    html.textContent = hobbie;
    document.getElementById('hobbies').appendChild(html);
})

/* Places Lived DataList */
myProfile.placesLived.forEach((places) => {
    let dt = document.createElement('dt');
    dt.textContent = places.place;
    document.getElementById('places-lived').appendChild(dt);
    let dd = document.createElement('dd');
    dd.textContent = places.length;
    document.getElementById('places-lived').appendChild(dd);
});

