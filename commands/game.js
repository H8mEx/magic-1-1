const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const dcs = "676060833150926858"
const warthunder = "426745457662885898"
const il2 = "1037029961787248640"
const gta = "426745071967141909"
const starcitizen = "1037029806354731081"
const arma = "1037030209079222272"

let gamerole = null
let gamename = null
module.exports = {
	data: new SlashCommandBuilder()
		.setName('game')
		.setDescription('Add or remove game roles')
        .addStringOption(option =>
           option.setName('add-remove')
                .setDescription("Select if you want to add or remove a role.")
                .setRequired(true)
		.addChoice('Add', 'Add')
        .addChoice("Remove", "Remove")
        )

        .addStringOption(option =>
            option.setName('role')
                 .setDescription("Select the role.")
                 .setRequired(true)
                 .addChoice("DCS World", "DCS World")
                 .addChoice("War Thunder", "War Thunder")
                 .addChoice("Grand Theft Auto", "Grand Theft Auto")
                 .addChoice("IL-2 Sturmovik", "IL-2 Sturmovik")
                 .addChoice("ARMA", "ARMA")
                 .addChoice("Star Citizen", "Star Citizen")
        ), 

        async execute(interaction) {
            try{
            var chosenString1 = interaction.options.getString('add-remove');
            var chosenString2 = interaction.options.getString('role');
            console.log("Chosen Strings: "+chosenString1+ ", "+chosenString2)
            if (chosenString2 === 'DCS World')  {
                gamerole = dcs
                gamename = "DCS World"
            } else 
            if (chosenString2 === 'War Thunder')  {
                gamerole = warthunder
                gamename = "War Thunder"

            } else 
            if (chosenString2 === 'Grand Theft Auto')  {
                gamerole = gta  
                gamename = "Grand Theft Auto"

            } else 
            if (chosenString2 === 'IL-2 Sturmovik')  {
                gamerole = il2
                gamename = "IL-2 Sturmovik"

            } else 
            if (chosenString2 === 'ARMA')  {
                gamerole = arma
                gamename = "ARMA"

            } else 
            if (chosenString2 === 'Star Citizen')  {
                gamerole = starcitizen
                gamename = "Star Citizen"

            }
            //checkgamerole()
                if (chosenString1 === "Add") {
                    interaction.member.roles.add(gamerole);
                    console.log(interaction.user.tag.toString()+": "+gamename+" role has been added.")
                    return interaction.reply(gamename+" role has been added.")
                } else {
                    interaction.member.roles.remove(gamerole);
                    console.log(interaction.user.tag.toString()+": "+gamename+" role has been removed.")
                    return interaction.reply(gamename+" role has been removed.")
                }

            }catch (error){
                console.log(error)
                return interaction.reply({ content: '@213660637274832897 Error: '+error, ephemeral: true });
            } 

        }
        
}

function checkgamerole() {
    if (chosenString2 === 'DCS World')  {
        gamerole = dcs
    } else 
    if (chosenString2 === 'War Thunder')  {
        gamerole = warthunder
    } else 
    if (chosenString2 === 'Grand Theft Auto')  {
        gamerole = gta  
    } else 
    if (chosenString2 === 'IL-2 Sturmovik')  {
        gamerole = il2
    } else 
    if (chosenString2 === 'ARMA')  {
        gamerole = arma
    } else 
    if (chosenString2 === 'Star Citizen')  {
        gamerole = starcitizen
    }

}