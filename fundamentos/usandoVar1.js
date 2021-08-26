{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) //Variavel fica visivel globalmente

function teste() {
    var local = 123
}

teste()
console.log(local) //Apresenta erro porque a variavel é local e não pode ser acessado globalmente