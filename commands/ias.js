const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

function userInfo(user, message) {
    //code here
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ias-tas')
		.setDescription('Converts IAS to TAS and MACH.')
		.addNumberOption(option => option.setName('ias').setDescription('Indicated airspeed')),

	async execute(interaction) {
        let iasValue = interaction.options.getNumber('ias')
        console.log('IAS to TAS has been triggered: ' + iasValue )


        if (Number(iasValue) > Number(0))  {
            const botMessage = await message.channel.send("Your IAS is saved. Add your altitude to complete the calculation.");
            MessageCollector.question({
                botMessage,
                user: message.author.id,
                onMessage: async (botMessage, message) => { // Every message sent by user will trigger this function.
                    await message.delete();
                    await botMessage.channel.send(iasValue + 'kts IAS equals ' + iasValue * (Number(message.content) / 1000 * 0.02))
                    return;
                 }

        
                
            }); 
        }

    
    }}

/*
Quick formula:

TAS = IAS * [1 + (Altitude/1000 * .02)]

Altitude in feet

Or, TAS = IAS + 2% per 1000' altitude.
*/