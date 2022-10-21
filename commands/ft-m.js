const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { number } = require('zod');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ft-m')
		.setDescription('Converts feet to meters.')
		.addNumberOption(option => option.setName('feet').setDescription('Enter a number')),
	async execute(interaction) {
        let feetValue = interaction.options.getNumber('feet')
        let metersCalc = feetValue * 0.3048
        console.log(metersCalc)
        let kmCalc = metersCalc / 1000
        let metersValue = metersCalc.toFixed(2)
        metersValue = Number(metersValue)
        console.log(metersValue)
        let kmValue = kmCalc.toFixed(2)
        console.log(parseFloat(metersValue, number))
            
            //Meters
            if (Number(metersValue) < Number(1000))  {
                const metersEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Pilot-Calculator: Feet to Meters')
                .setURL('https://pcpilotscrew.com/')
                //.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
                .setDescription('')
                .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/2020/10/pcpi-emblem.png')
                .addFields(
                    { name: feetValue + ` ft`, value: '1 Foot' , inline: false },
                    { name: metersValue + ` m`, value: '0.3048 Meters' , inline: false },
                )
                .setTimestamp()
                .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
            return interaction.reply({ embeds: [metersEmbed] } )
                
            //KM
            } else if (Number(metersValue) >= Number(1000))  {
                const kmEmbed = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Pilot-Calculator: Feet to Kilometers')
                .setURL('https://pcpilotscrew.com/')
                //.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
                .setDescription('')
                .setThumbnail('https://pcpilotscrew.com/wp-content/uploads/2020/10/pcpi-emblem.png')
                .addFields(
                    { name: feetValue + ` ft`, value: '1 Foot' , inline: false },
                    { name: kmValue + ` km`, value: '0.3048 Meters' , inline: false },
                )
                .setTimestamp()
                .setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });
                return interaction.reply({ embeds: [kmEmbed] }) ;
                
            } else {
                return interaction.reply('No option was provided!');
            
            }
            
    }
    
    }

    
 



      
//       return interaction.reply(feetValue + ` Feet is **` + Number(feetValue) * 0.3048 + ` Meters**.`),

