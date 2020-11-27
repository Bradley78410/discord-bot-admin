module.exports = {
    name: '#server',
    description: 'Server Information.',
    execute(message) {
        message.channel.send(`Nom du server : ${message.guild.name}\n Nombre d'utilisateurs: ${message.guild.memberCount}`);
    }
};