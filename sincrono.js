const fs = require('fs')
const chalk = require("chalk")
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})


function contarPalavras() {
    readline.question('Insira o nome do arquivo .txt a ser lido (não inclua o .txt): ', (nomeDoArquivo) =>{
    if (nomeDoArquivo+'.txt'.existsSync){
        const texto = fs.readFileSync(nomeDoArquivo + '.txt', 'utf-8')
        console.log(chalk.green("Número de palavras: " + texto.trim().split(/\s+/).length)); 
    } else {
        console.log("O arquivo mencionado não existe")}
    readline.close()}
) 
}

contarPalavras();
