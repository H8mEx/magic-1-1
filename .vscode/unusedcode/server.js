
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
//const request = require('snekfetch');

var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'index.html');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    } else {
        console.log(err);
    }
});

module.exports = {
	data: new SlashCommandBuilder()
	.setName('server')
	.setDescription('Display info about this server.'),
	async execute(interaction) {
		interaction.reply("Test")
	   
	}
}
/*
module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display info about this server.'),
	async execute(interaction) {
		return interaction.reply(urlParams.toString());
	},
};
*/

	/*
	$(document).ready(function () {
		$.get("file:///C:/Program%20Files/Eagle%20Dynamics/DCS%20World%20OpenBeta%20Server/WebGui/index.html#/en/log", function(data) {
			console.log(data)
		}) ;
	});
	
	var text = document.getElementsByClassName("log-msg")[0].innerHTML; 
	console.log(text)
	
	text = document.querySelector(".log-msg").innerHTML
	console.log(text)
	*/