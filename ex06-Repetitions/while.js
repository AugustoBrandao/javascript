var fatias = 8
var qtd = 0

comerFatias()

function comerFatias()
{
    while(fatias>0)
    {
        fatias -= 1
        qtd += 1

        if(qtd == 1){ 
            console.log(`Comi ${qtd} fatia, agora eu tenho ${fatias} fatias de pizza`)
        }
        else if(qtd == 8){
            console.log(`Comi ${qtd} fatias, agora eu tenho mais nenhuma de pizza`)
        }else{
            console.log(`Comi ${qtd} fatias, agora eu tenho ${fatias} fatias de pizza`)
        }
    }
}
