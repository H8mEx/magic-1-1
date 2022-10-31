const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const { ChannelType, PermissionsBitField } = require('discord.js');

let gamerole = ""
const dcs = "676060833150926858"
const warthunder = ""
const il2 = ""
const gta = ""


module.exports = {
	data: new SlashCommandBuilder()
		.setName('enter')
		.setDescription('Join the server')
        .addStringOption(option =>
           option.setName('origin')
                .setDescription("Where are you from?")
                .setRequired(true)
		.addChoice("Europe", "Europe")
        .addChoice("North America", "North America")
		.addChoice("South America", "South America")
		.addChoice("Asia", "Asia")
		.addChoice("Australia", "Australia")
		.addChoice("Africa", "Africa")
        )

        .addStringOption(option =>
            option.setName('age')
                 .setDescription("How old are you?")
                 .setRequired(true)
                 .addChoice("12-17", "12-17")
                 .addChoice("18-22", "18-22")
                 .addChoice("23-29", "23-29")
                 .addChoice("30+", "30+")
                 )

                 .addStringOption(option =>
                    option.setName('game')
                         .setDescription("What is your main piloting game/simulation?")
                         .setRequired(true)
                         .addChoice("DCS World", "DCS World")
                         .addChoice("War Thunder", "War Thunder")
                         .addChoice("Grand Theft Auto", "Grand Theft Auto")
                         .addChoice("IL-2 Sturmovik", "IL-2 Sturmovik")
                         .addChoice("ARMA", "ARMA")


                         ), 

        async execute(interaction) {
           // if (message.member.roles.cache.some(role => role.name === 'Member')) {
            //return   interaction.reply('You are already a member!');
            //} else {

                let role = client.guilds.cache.find(r => r.name == "Member")

                
         setTimeout(function() {

            var chosenString1 = interaction.options.getString('origin');
            var chosenString2 = interaction.options.getString('age');
            var chosenString3 = interaction.options.getString('game');

            console.log("A new member has joined from: "+chosenString1+". He/She is "+chosenString2+" years old and mainly flies in "+chosenString3+"." )


            if (chosenString3 === 'DCS World')  {
                gamerole = dcs
            } else 
            if (chosenString3 === 'War Thunder')  {
                gamerole = warthunder
            } else 
            if (chosenString3 === 'Grand Theft Auto')  {
                gamerole = gta
                
            } 
            interaction.member.roles.add(gamerole);
},400);
await interaction.member.roles.add("339703419537457175");
return interaction.reply("You are all set! Enjoy your stay!")

}

}

