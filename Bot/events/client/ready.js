module.exports = {
    name: 'ready',
    once: 'true',
    async execute(client) {
        console.log(`Connected to discord as ${client.user.tag} in ${client.guilds.cache.size} servers`);
    }
}