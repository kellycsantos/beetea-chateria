let btnMenu = document.getElementsByClassName('btn-menu')[0].addEventListener('click',abrirMenu)
let menu = document.getElementsByTagName('nav')[0]

function abrirMenu(){
    if(menu.classList.contains('fechado')){
        menu.classList.remove('fechado')
        menu.classList.add('aberto')
        document.getElementsByClassName('btn-menu')[0].setAttribute('src','menu-fechar-icon.png')

        
    }else{
        menu.classList.add('fechado')
        menu.classList.remove('aberto')
        document.getElementsByClassName('btn-menu')[0].setAttribute('src','menu-icon.png')
    }
}



//Menu Especial
let menuBebidas = [
    {nome:"Chocolate Quente",imagem:"chocolate-hot-cup-png.png",descricao:"Curabitur lacus ante, luctus et varius nec, feugiat et quam. Proin sed tellus consectetur, pretium mi et, viverra nunc. Aliquam dui est, sollicitudin ut ipsum quis"},
    {nome:"Chá e Biscotos",imagem:"milk-with-cookies.png",descricao:"Feugiat et quam. Proin sed tellus consectetur, pretium mi et, viverra nunc. Aliquam dui est, sollicitudin ut ipsum quis"},
    {nome:"Café tradicional",imagem:"coffee-cup.png",descricao:"Luctus et varius nec, feugiat et quam. Proin sed tellus consectetur, pretium mi et, viverra nunc. Aliquam dui est, sollicitudin ut ipsum quis"}

]
let bebidasAmostra = document.getElementsByClassName('bebidaImagem')[0] //Imagem
let bebidaDescricao = document.getElementById('bebidaDescricao') //descrição
let bebidaTitulo = document.getElementById('bebidaNome') //Nome

let bebidasBtn1 = document.getElementsByClassName('nav-menuespecial')[0].addEventListener('click',bebida1)
function bebida1(){
    bebidasAmostra.setAttribute('src',menuBebidas[0].imagem)
    bebidaTitulo.innerText=menuBebidas[0].nome
    bebidaDescricao.innerText=menuBebidas[0].descricao
    document.getElementsByClassName('nav-menuespecial')[0].style.borderTop="5px solid #643a10"
    document.getElementsByClassName('nav-menuespecial')[1].style.borderTop="none"
    document.getElementsByClassName('nav-menuespecial')[2].style.borderTop="none"

}

let bebidasBtn2 = document.getElementsByClassName('nav-menuespecial')[1].addEventListener('click',bebida2)
function bebida2(){
    bebidasAmostra.setAttribute('src',menuBebidas[1].imagem)
    bebidaTitulo.innerText=menuBebidas[1].nome
    bebidaDescricao.innerText=menuBebidas[1].descricao
    document.getElementsByClassName('nav-menuespecial')[0].style.borderTop="none"
    document.getElementsByClassName('nav-menuespecial')[1].style.borderTop="5px solid #643a10"
    document.getElementsByClassName('nav-menuespecial')[2].style.borderTop="none"
}

let bebidasBtn3 = document.getElementsByClassName('nav-menuespecial')[2].addEventListener('click',bebida3)
function bebida3(){
    bebidasAmostra.setAttribute('src',menuBebidas[2].imagem)
    bebidaTitulo.innerText=menuBebidas[2].nome
    bebidaDescricao.innerText=menuBebidas[2].descricao
    document.getElementsByClassName('nav-menuespecial')[0].style.borderTop="none"
    document.getElementsByClassName('nav-menuespecial')[1].style.borderTop="none"
    document.getElementsByClassName('nav-menuespecial')[2].style.borderTop="5px solid #643a10"
}


bebida1()
