

var list = document.getElementById("list");
var fruits = [
    {
        name: "Mango",
        title: "Phalon ka badshah",
        types: ["Chounsa", "Sindhri", "Langra", "Anwaratol", "Almaas"],
        desc: "",
        image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWFuZ298ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Watermelon",
        title: "Garmi ka dushman",
        types: ["Red Melon", "Green Melon"],
        image: "https://images.unsplash.com/photo-1621583441131-c8c190794970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBtZWxvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Peach",
        title: "Juicy Peach",
        types: ["Swat Wala", "Quetta Wala"],
        image: "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
        name: "Cherry",
        title: "Khoon banane wali",
        types: ["Black Cherry", "Red Cherry"],
        image: "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
    },
    {
        name: "BANANA",
        title: "meetha huta hai",
        types: ["kacha", "pakka"],
        image: "https://media.istockphoto.com/id/509533014/photo/raw-organic-bunch-of-bananas.webp?b=1&s=170667a&w=0&k=20&c=FqxKOZEk8Uhu6fnr9SW041-j1JFMWS7zk4BDUYbpECg=",
    },
    {
        name: "APPLE",
        title: "JUCIY HUTA HAI",
        types: ["green", "red"],
        image: "https://media.istockphoto.com/id/132027480/photo/red-apple.webp?b=1&s=170667a&w=0&k=20&c=RHxrQTnxSKSAfjJXS4ro5XvoK8wukkhmnMgg3nLyH3M=",
    },
    {
        name: "GRAPES",
        title: "KATHAI HUTAI HAI",
        types: ["BLACK", "PURPLE"],
        image: "https://media.istockphoto.com/id/606013952/photo/grapes-isolated-on-the-white.webp?b=1&s=170667a&w=0&k=20&c=b8L6B4GapJASbr3WOniNrbZ6WEPCe8D263F3EQdl-yo="
    },
    {
        name: "STRAWBERRY",
        title: "MAZAI KI HUTI HAI",
        types: ["RED ",],
        image: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "LEMON",
        title: "MAZAI KI HUTI HAI",
        types: ["YELLOW",],
        image: "https://media.istockphoto.com/id/157524538/photo/orange.webp?b=1&s=170667a&w=0&k=20&c=PzDoaLOWc1uTfjYdOkkszenalXPBTUXb0WYGCSiA6kk="
    },
    
];

fruits.forEach(function (data, ind) {
    var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
<div class="flex relative h-[250px]">
<img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
            data.image
        }">
<div  id=${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
<h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
        }</h2>
<h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.title
        }</h1>
<p class="leading-relaxed">${data.types.join(" , ")}</p>
<p class="leading-relaxed">${data.desc} </p>
<button onclick="updateDesc(this)" class="update">Update</button>
<button onclick="deleteItem(this)" class="delete-btn">Delete</button>
</div>
</div>
</div>`;
    list.innerHTML += ele;
});

function updateDesc(ele) {
    var index = ele.parentElement.id;
    fruits[index].desc = prompt("Description");
    renderList();
}

function deleteItem(ele) {
    var index = ele.parentElement.id;
    fruits.splice(index, 1);
    renderList();
}

function renderList() {
    list.innerHTML = "";
    fruits.forEach(function (data, ind) {
        var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4" >
<div class="flex relative h-[250px]">
<img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
                data.image
            }">
<div id=${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
  <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
                data.name
            }</h2>
  <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
                data.title
            }</h1>
  <p class="leading-relaxed">${data.types.join(" , ")}</p>
  <p class="leading-relaxed">${data.desc} </p>
  <button onclick="updateDesc(this)" class="update">Update</button>
  <button onclick="deleteItem(this)" class="delete-btn">Delete</button>
</div>
</div>
</div>`;
        list.innerHTML += ele;
    });
}
 