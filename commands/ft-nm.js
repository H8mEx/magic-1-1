const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('ft-nm')
		.setDescription('Converts feet to miles.')
		.addNumberOption(option => option.setName('feet').setDescription('Enter a number')),
	async execute(interaction) {
        let feetValue = interaction.options.getNumber('feet')
        let milesCalc = feetValue * 0.000189394
        console.log(milesCalc)
        let milesValue = milesCalc.toFixed(2)
        const feetEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Pilot-Calculator: Feet to Miles')
.setURL('https://pcpilotscrew.com/')
//.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setDescription('')
.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/2020/10/pcpi-emblem.png')
.addFields(
     { 
        name: (feetValue + ` ft`), value: '1 Foot', inline: true },
    { name: (milesValue + ` nm`), value: '0.000189394 Miles' , inline: true },
)

        return interaction.reply({ embeds: [feetEmbed] } ),
       console.log(feetValue + ` Feet is ` + Number(feetValue) * 0.3048 + ` Meters.`)
       .setTimestamp()
       .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
    }
};

