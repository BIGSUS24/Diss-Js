import { Client, GatewayIntentBits } from 'discord.js'; 
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

client.on ('messageCreate',message => {
    console.log(message.content)
    console.log(`Name of sender = ${message.author.username}`)
});
client.on ('messageCreate',message => {
    if (message.author.bot){
        return 0;
        
    }else {
        message.reply({
            content:"nigga wsp"
        })
    }
});
client.on ("interactionCreate",(interact) => {
    console.log(interact);
     interact.reply({
        content :"gaday gaday"
    })
})
client.login('Niggas In paris');
