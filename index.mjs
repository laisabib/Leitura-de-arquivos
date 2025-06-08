import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs/promises';


async function contarPalavras(nomeDoArquivo) {
    try {
        const texto = await fs.readFile(nomeDoArquivo + ".txt", 'utf8'); 
        
        console.log(chalk.green("Número de palavras: " + texto.trim().split(/\s+/).length));

    } catch (err) {
        console.error(chalk.redBright(err));
    }
}

async function arquivoASerLido() {
     try {
        const answer = await inquirer.prompt([
            {
                name: 'arquivo',
                message: 'Insira o nome do arquivo .txt a ser lido (não inclua o .txt):'
            }
        ]);
        return answer.arquivo;
    } catch (err) {
        console.error(chalk.redBright(err));
    }
}

async function main() {
    const nomeDoArquivo = await arquivoASerLido();
    if (nomeDoArquivo) {
        await contarPalavras(nomeDoArquivo);
    } else {
        console.log(chalk.redBright("É necessário inserir um nome."));
    }
}

main();