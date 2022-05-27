//pacote interno
const fs = require('fs');
//Pacotes externos
const inquirer = require("inquirer");
const chalk = require('chalk');

operation();
function operation(){
    inquirer.prompt([{
        type: 'list',
        name:'action',
        message:'Qual opção deseja escolher?',
        choices:[
            "Adicionar alimento",
            "Consultar informação",
            "Editar Alimento",
            "Deletar alimento",
            "Sair"

        ]
    }]).then((answers)=>{
        const action = answers['action'];
        console.log(action);

    }).catch(err => console.log(err))
}

