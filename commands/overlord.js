const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('overlord')
		.setDescription('List of all Commands.'),

	async execute(interaction) {

return interaction.reply(
    '**Basic Commands:** \n'+
    '/overlord :: Lists all commands \n'+
    '\n'+
    '**Wiki Commands:** \n'+
    '/aircraft :: Gives info about certain aircraft (WIP)\n'+
    '/weapon :: Gives info about certain weapon (WIP) \n'+
    '/wisdom :: Sends you random knowledge \n'+
    '\n'+
    '**Calculator Commands:** \n'+
    '/ft-m :: Feet to Meters \n'+
    '/ft-nm :: Feet to Miles \n'+
    '\n'+
    '**Gameplay Commands:** \n'+
    '/challenge :: Gives you randomized mini-xp-challenges for DCS \n'+
    '\n'
    )

       console.log('Bogey Dope');
    }
};

//       return interaction.reply(feetValue + ` Feet is **` + Number(feetValue) * 0.3048 + ` Meters**.`),