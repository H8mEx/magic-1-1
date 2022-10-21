const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

const kmtom = 0.621371
const kmtokt = 0.539957
const erange = 0.5

//Objects to define Variables for function calls


//Aim120c
const Aim120C = {
    designation: 'AIM-120C',
    wepname: 'AMRAAM',
    dev: 'USA',
    guidance: 'Active Radar',
    range: 'Medium',
    rangekm: 105,
    rangenm: 105 * Number(kmtom),
    speed: 'Mach 4, ' + 4900 + ' km/h, ' + 4900 * kmtokt + 'kt' ,
    note: 'Less maneuverable than B-Variant',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/AIM-120_AMRAAM.jpg/1280px-AIM-120_AMRAAM.jpg'
}

//Aim120b
const Aim120B = {
    designation: 'AIM-120B',
    wepname: 'AMRAAM',
    dev: 'USA',
    guidance: 'Active Radar',
    range: 'Medium',
    rangekm: 75,
    rangenm: 75 * Number(kmtom),
    speed: 'Mach 4, ' + kmtokt + ' km/h, ' + 4900 * kmtokt + 'kt' ,
    note: 'More maneuverable than C-Variant',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/AIM-120_AMRAAM.jpg/1280px-AIM-120_AMRAAM.jpg'
}

//Aim7E
const Aim7E = {
    designation: 'AIM-7E',
    wepname: 'Sparrow',
    dev: 'USA',
    guidance: 'Passive Radar',
    range: 'Medium',
    rangekm: 30,
    rangenm: 30 * Number(kmtom),
    speed: 'Mach 4',
    note: 'None',
    image: 'https://static.turbosquid.com/Preview/000338/930/4V/aim-7-sparrow-missile-design-3d-model_DHQ.jpg'
}

//Aim7F
const Aim7F = {
    designation: 'AIM-7F',
    wepname: 'Sparrow',
    dev: 'USA',
    guidance: 'Passive Radar',
    range: 'Medium',
    rangekm: 70,
    rangenm: 70 * Number(kmtom),
    speed: 'Mach 4',
    note: 'None',
    image: 'https://static.turbosquid.com/Preview/000338/930/4V/aim-7-sparrow-missile-design-3d-model_DHQ.jpg'
}

//Aim7M
const Aim7M = {
    designation: 'AIM-7M',
    wepname: 'Sparrow',
    dev: 'USA',
    guidance: 'Passive Radar',
    range: 'Medium',
    rangekm: 70,
    rangenm: 70 * Number(kmtom),
    speed: 'Mach 4',
    note: 'None',
    image: 'https://static.turbosquid.com/Preview/000338/930/4V/aim-7-sparrow-missile-design-3d-model_DHQ.jpg'
}

//Aim7MH
const Aim7MH = {
    designation: 'AIM-7MH',
    wepname: 'Sparrow',
    dev: 'USA',
    guidance: 'Passive Radar',
    range: 'Medium',
    rangekm: '70 +',
    rangenm: 70 * Number(kmtom) + ' +',
    speed: 'Mach 4',
    note: 'MH variant offers improved loft logic that allows for more efficient use of the flight energy and longer effective range.',
    image: 'https://static.turbosquid.com/Preview/000338/930/4V/aim-7-sparrow-missile-design-3d-model_DHQ.jpg'
}

//Aim9B
const Aim9B = {
    designation: 'AIM-9B',
    wepname: 'Sidewinder',
    dev: 'USA',
    guidance: 'IR-Guided (Heatseeker, Rear-Aspect)',
    range: 'Short',
    rangekm: 2.5,
    rangenm: 2.5 * Number(kmtom),
    speed: 'That info will be added later' ,
    note: 'Earliest Sidewinder variant (that went into production). Only effective on big unmaneuverable aircraft.',
    image: 'https://forums.vrsimulations.com/support/images/thumb/9/98/AIM-9X.png/300px-AIM-9X.png'
}


module.exports = {
	data: new SlashCommandBuilder()
		.setName('weapon')
		.setDescription('Information about the options provided.')
        .addStringOption(option =>
           option.setName('weapon_type')
                .setDescription('Choose the weapon type')
                .setRequired(true)
        .addChoice('AIM-120C', 'AMRAAM (C-Variant)')
        .addChoice('AIM-120B', 'AMRAAM (B-Variant)')
        .addChoice('AIM-7E', 'Sparrow (E-Variant)')
        .addChoice('AIM-7F', 'Sparrow (F-Variant)')
        .addChoice('AIM-7M', 'Sparrow (M-Variant)')
        .addChoice('AIM-7MH', 'Sparrow (MH-Variant)')
        .addChoice('AIM-9B', 'Sidewinder (B-Variant)')
        ), 
        async execute(interaction) {             

            var chosenString = interaction.options.getString('weapon_type');
            console.log('A user requested information about: ' + chosenString)

//AMRAAM
     if (chosenString === 'AMRAAM (C-Variant)')  {
            console.log(Aim120C.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim120C);
            return await interaction.editReply({ embeds: [result] } );    
        } else if (chosenString === 'AMRAAM (B-Variant)')  {
            console.log(Aim120B.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim120B);
            return await interaction.editReply({ embeds: [result] } );    
//Sparrow
        } else if (chosenString === 'Sparrow (E-Variant)')  {
            console.log(Aim7E.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim7E);
            return await interaction.editReply({ embeds: [result] } );    
        } else if (chosenString === 'Sparrow (M-Variant)')  {
            console.log(Aim7M.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim7M);
            return await interaction.editReply({ embeds: [result] } );    
        } else if (chosenString === 'Sparrow (MH-Variant)')  {
            console.log(Aim7MH.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim7MH);
            return await interaction.editReply({ embeds: [result] } );    
//Sidewinder
        } else if (chosenString === 'Sidewinder (B-Variant)')  {
            console.log(Aim9B.designation)
            await interaction.reply('Working on it');
            const result = await genWepEmbed(Aim9B);
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
//.setThumbnail('https://pcpilotscrew.com/wp-content/uploads/photo-gallery/pcpi2_ytlogo_1024.png?bwg=1584451838')
.addFields(
{ name: 'Designation', value: weapon.designation, inline: true },
//		{ name: '\u200B', value: '\u200B' },
{ name: 'Name', value: weapon.wepname, inline: true },
{ name: 'Developer', value: weapon.dev, inline: true },
{ name: 'Guidance', value: weapon.guidance, inline: true },
{ name: 'Range (S/M/L)', value: weapon.range, inline: true },
{ name: 'Range (Max)', value: weapon.rangekm + ` km, ` + weapon.rangenm.toFixed(2) + ' nm', inline: true },
{ name: 'Range (Effective)', value: weapon.rangekm * erange + ` km, ` + erange * weapon.rangenm.toFixed(2) + ' nm', inline: true },
{ name: 'Top Speed', value: weapon.speed, inline: true },
{ name: 'Notes', value: weapon.note, inline: false },

)

.setImage(weapon.image)
.setTimestamp()
.setFooter({ text: 'pcpilotscrew.com', iconURL: 'https://pcpilotscrew.com/wp-content/uploads/2022/02/pcpi-emblem-clean-small.png' });

return WeaponEmbed

};
