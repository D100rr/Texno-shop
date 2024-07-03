const product = [
    {
        id: 0,
        image: 'img/iphone-15.jpg',
        title: 'Iphone 14 Pro Max',
        price: 1120,
    },
    {
        id: 1,
        image: 'img/air.jpg',
        title: 'Air Pods Pro',
        price: 199,
    },
    {
        id: 2,
        image: 'img/tv.jpg',
        title: 'Smart TV 65',
        price: 400,
    },
    {
        id: 3,
        image: 'img/macbook.jpg',
        title: 'Apple Macbook 12',
        price: 1200,
    }
];

const categories = [...new Set(product.map((item) => item))];
let i = 0;
document.getElementById('main__root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${image} />
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>${price}$</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>
    `;
}).join('');

let cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function deElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length
    if (cart.length === 0) {
        document.getElementById('main__carItemt').innerHTML = "Your Cart is empty";
        document.getElementById('main__foot-price').innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("main__carItemt").innerHTML = cart.map((item) => {
            let { image, title, price } = item;
            total = total + price;
            document.getElementById("main__foot-price").innerHTML = "$ " + total + ".00";
            return `
                <div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowImg' src=${image}>
                    </div>
                    <p style='font-size: 12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>${price}$</h2>
                    <i class='fa-sharp fa-solid fa-trash' onclick='deElement(${j++})'></i>
                </div>
            `;
        }).join('');
    }
}
