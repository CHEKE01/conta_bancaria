import { exibirMenu } from './Menu';
import { criarConta } from './Funcoes/criarConta'; 
import { listarContas } from './Funcoes/listarContas';
import { buscarConta } from './Funcoes/buscarConta'; 
import { atualizarConta } from './Funcoes/atualizarConta'; 
import { apagarConta } from './Funcoes/apagarConta'; 
import { sacar } from './Funcoes/sacar'; 
import { depositar } from './Funcoes/depositar';
import { transferir } from './Funcoes/transferir'
import readlinesync = require("readline-sync");

export function main(): void {
    let opcao: number;

    while (true) {
        exibirMenu(); 
        opcao = readlinesync.questionInt("Entre com a opção desejada: ");  

        if (opcao === 9) {  
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre(); 
            process.exit(0);  
        }

        
        switch (opcao) {
            case 1:
                criarConta();
                break;
            case 2:
                listarContas();
                break;
            case 3:
                buscarConta();
                break;
            case 4:
                atualizarConta();
                break;
            case 5:
                apagarConta();
                break;
            case 6:
                sacar();
                break;
            case 7:
                depositar();
                break;
            case 8:
                transferir();
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }
}

function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();