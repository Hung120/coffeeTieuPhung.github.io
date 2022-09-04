coffe = [
    {
        name: 'Coffee Sữa',
        coffee_img: './asset/img/cafeesua.jpeg',
        coffee_お金: '12.000đ'
    },

    {
        name: 'Bạc Xỉu',
        coffee_img: './asset/img/bacxiu.jpeg',
        coffee_お金: '15.000đ'
    },

    {
        name: 'Ca Cao Sữa Đá',
        coffee_img: './asset/img/cacao.jpeg',
        coffee_お金: '15.000đ'
    },

    {
        name: 'Sữa Chua Đánh Đá',
        coffee_img: './asset/img/suachua.png',
        coffee_お金: '12.000đ'
    },

    {
        name: 'Coffee Ca Cao',
        coffee_img: './asset/img/CFcacao.jpeg',
        coffee_お金: '15.000đ'
    },

    {
        name: 'Coffee Socola',
        coffee_img: './asset/img/SCLCF.jpeg',
        coffee_お金: '15.000đ'
    },

   
]


const menu = document.querySelector('.content');

function render (a){
    var menuCF = a.map( x => 
        `
        <div class="content_img">
            <img  class="content_img-img" src="${x.coffee_img}">
            <div class="content_menu c-12">
                <h5 class="content_menu-ten h5">${x.name}</h5>
                <h5 class="content_menu-gia h5">${x.coffee_お金}</h5>
            </div>
         </div>
        `
       
    );
    return  menu.innerHTML = menuCF.join('')

};

render(coffe)

