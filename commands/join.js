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
const rulesproof = "748100298144481290"

const generalchat = client.channels.cache.get("257984126718574592")

var chosenString1 = ""
var chosenString2 = ""
var chosenString3 = ""

let usernameX = ""

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

             chosenString1 = interaction.options.getString('origin');
             chosenString2 = interaction.options.getString('age');
             chosenString3 = interaction.options.getString('game');
             usernameX = interaction.user.tag
             console.log("New user: "+usernameX)
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
            interaction.member.roles.add(rulesproof);

},800);
await interaction.member.roles.add("339703419537457175");

setTimeout(function() {
    createEmbed()
    interaction.guild.channels.cache.get("257984126718574592").send({ embeds: [Embed]});
// generalchat.send({ embeds: [Embed]});

},2000);
return interaction.reply("You are all set! Enjoy your stay!")
}


}

function createEmbed() {
    Embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle(usernameX.toString()+" has landed on RW01.")
    .setURL('https://pcpilotscrew.com/')
    .setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
    .setDescription("Come and say hello.")
    .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
    .addFields(


        { name: 'Location: ', value: chosenString1.toString(), inline: true },
        { name: 'Age: ', value: chosenString2.toString(), inline: true },
        { name: 'Main Game: ', value: chosenString3.toString(), inline: true },

      
    )
    //.setImage(aircraft1.image)
    .setTimestamp()
    .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    }