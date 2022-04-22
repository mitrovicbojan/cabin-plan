const cabins = [
    {
        id: 1,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "double",
        category: "a",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 2,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "double",
        category: "a",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 3,
        guestOne: "Spiderman",
        guestTwo: "Mitsos",
        bed: "flex",
        category: "a",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 4,
        guestOne: "John Doe",
        guestTwo: "Koula",
        bed: "double",
        category: "b",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 5,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "twin",
        category: "b",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 6,
        guestOne: "Ignjat",
        guestTwo: "Zombi",
        bed: "double",
        category: "c",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 7,
        guestOne: "Jesus",
        guestTwo: "Lebowski",
        bed: "twin",
        category: "c",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 8,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "triple",
        category: "p",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 9,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "double",
        category: "p",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 10,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "double",
        category: "p",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
    {
        id: 11,
        guestOne: "John Doe",
        guestTwo: "Milenko",
        bed: "double",
        category: "p",
        remarks: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, animi.",
        photo: "./pics/rangers.png",
    },
]

const cabinContainer = document.querySelector('.container');
const filterBtn = document.querySelectorAll('.cabin-btn');

window.addEventListener('DOMContentLoaded', function() {
    showCabinItems(cabins)
})

filterBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.id

        const cabinCategory = cabins.filter(function(cabinItem) {
            if(cabinItem.category === category) {
                return cabinItem
            }
        })
        if (category === 'all') {
            showCabinItems(cabins)
        }
        else {
            showCabinItems(cabinCategory)
        }
    })
})

function showCabinItems(cabinItems) {
    let showCabin = cabinItems.map(function(item) {
        return `<div class="cabin-item">
        <img src=${item.photo} class="cabin-img" alt="pic" />
        <div class="cabin-details">
            <div class="cabin-pax">
                <h1>${item.category}</h1>
                <h3>${item.guestOne}</h3>
                <h3>${item.guestTwo}</h3>
            </div>
            <p>Remarks: ${item.remarks}</p>
        </div>
    </div>`
    });
    showCabin = showCabin.join('');
    cabinContainer.innerHTML = showCabin
}