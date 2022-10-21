const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const kmtom = 0.621371

//Objects to define Variables for function calls

//Vikhr
const Vikhr = {
    designation: '9A4172',
    wepname: 'Vikhr',
    dev: 'Russia',
    type: 'A/G',
    guidance: 'Laser',
    range: 'Short',
    rangekm: 10,
    rangenm: 6.21,
    tnt: '?',
    image: 'http://www.military-today.com/missiles/vikhr.jpg'
};

//Shturm-V
const ShturmV = {
    designation: '9M114',
    wepname: 'Shturm-V',
    dev: 'Russia',
    type: 'A/G',
    guidance: 'Radio',
    range: 'Short',
    rangekm: 8,
    rangenm: 4.97,
    tnt: '7.4 kg',
    image: 'http://www.military-today.com/missiles/shturm.jpg'
};


module.exports = {
	data: new SlashCommandBuilder()
		.setName('weapon-helo')
		.setDescription('Information about the options provided.')
        .addStringOption(option =>
           option.setName('weapon_type')
                .setDescription('Choose the weapon type')
                .setRequired(true)
		.addChoice('9A4172', 'Vikhr')
        .addChoice('9M114', 'ShturmV')

        ), 
        async execute(interaction) {             

            var chosenString = interaction.options.getString('weapon_type');
            console.log('A user requested information about: ' + chosenString)


            //Vikhr
            if (chosenString === 'Vikhr')  {
                console.log(Vikhr.designation)
                await interaction.reply('Working on it');
                const result = await genWepEmbed(Vikhr);
                return await interaction.editReply({ embeds: [result] } );    
            

        } else if (chosenString === 'ShturmV')  {
            console.log(ShturmV.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(ShturmV);
            return await interaction.editReply({ embeds: [result] } );    
        
        } else if (chosenString === 'AMRAAM (C-Variant)')  {
            console.log(Aim120C.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim120C);
            return await interaction.editReply({ embeds: [result] } );    
            

        } else {
            return await interaction.reply('This option is currently unavailable.');
        }
        }
        

    }

//functions
function genWepEmbed(weapon) {
//embed
const WeaponEmbed = new MessageEmbed()
.setColor('#0099ff')
.setURL('https://pcpilotscrew.com/')
.setAuthor({ name: 'PC Pilots Crew', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png', url: 'https://discord.js.org' })
.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
{ name: 'Designation', value: weapon.designation, inline: true },
//		{ name: '\u200B', value: '\u200B' },
{ name: 'Name', value: weapon.wepname, inline: true },
{ name: 'Developer', value: weapon.dev, inline: true },
{ name: 'Type', value: weapon.type, inline: true },
{ name: 'Guidance', value: weapon.guidance, inline: true },
{ name: 'Range (S/M/L)', value: weapon.range, inline: true },
{ name: 'Range (Max)', value: weapon.rangekm + ` km, ` + weapon.rangenm.toFixed(2) + ' nm', inline: true },
{ name: 'TnT', value: weapon.tnt, inline: true },

)

.setImage(weapon.image)
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

return WeaponEmbed

};
