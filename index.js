//pacote interno
const fs = require('fs');
const addFood = require('./Functions/addFood')
const showFood = require('./Functions/showFood');
const updateFood = require('./Functions/updateFood');
const deleteFood = require('./Functions/deleteFood');
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
        
        if(action == "Adicionar alimento"){
           addFood.addFood();
           
        }else if(action == "Consultar informação"){
            showFood.showFood();
        }else if(action == "Editar Alimento"){
            updateFood.updateFood();
        }else if(action == "Deletar alimento"){
            deleteFood.deleteFood();
        }else if(action == "Sair"){
            console.log(chalk.green("Obrigado por usar esse sisteminha :)"))
            process.exit();
        }

    }).catch(err => console.log(err))}

