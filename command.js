import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('Put your Own Token');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("Put channel id here"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
