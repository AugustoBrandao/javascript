const funcao = () => {
    try {
        console.log('Executa as funções');
    } catch (error) {
        return error.message;
    } finally {
        console.log('Executar o código, independentemente do resultado do try')
    }
}