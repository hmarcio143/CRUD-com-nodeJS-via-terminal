//pacote interno
const fs = require('fs');
const getName = require('./getName').getName;
 
//Pacotes externos
const inquirer = require("inquirer");
const chalk = require('chalk');


module.exports = {

    updateFood(){

        inquirer.prompt([{

            name:'up',
            message:'Qual alimento deseja editar?'
        }]).then((answers)=>{

            const upName = answers['up'];
            
            //Verify if name exists in database
            if(!fs.existsSync(`./foodData/${upName}.json`)){
                console.log(chalk.bgRed.black(`O nome ${upName} não existe na nossa base de dados, favor digitar outro nome`))
                return this.updateFood();
            }
            //get data nameFood
            const foodDate = getName(upName);

            inquirer.prompt([{
                name:'newData',
                message:`Digite o novo nome para o alimento ${upName}:`
            }]).then((answers)=>{
                const newName = answers['newData'];
                foodDate.name = newName;

                inquirer.prompt([{

                    name:'newCalorie',
                    message:`Quantas calorias tem ${newName}:`
                }]).then((answers)=>{

                    const newCalorie = answers['newCalorie'];

                    foodDate.calorie = parseFloat(newCalorie);

                    fs.renameSync(`./foodData/${upName}.json`,`./foodData/${foodDate.name}.json`, function(err){

                        if(err){
                            console.log(err)
                        }
                    })

                    console.log(
                        chalk.green(`O nome do alimento ${upName} foi subistituido pelo nome ${foodDate.name} 
                        com ${foodDate.calorie} calorias na nossa base de dados`)
                    )

                }).catch(err=>console.log(err))              
                

            }).catch(err=>console.log(err))

        }).catch(err=>console.log(err))
    }

}