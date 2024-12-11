export function exibirMenu(): void {
    const options = [
        "1 - Criar Conta",
        "2 - Listar todas as Contas",
        "3 - Buscar Conta por Numero",
        "4 - Atualizar Dados da Conta",
        "5 - Apagar Conta",
        "6 - Sacar",
        "7 - Depositar",
        "8 - Transferir valores entre Contas",
        "9 - Sair",
    ];

    console.log(options.map(option => `            ${option}`).join("\n"));
}
