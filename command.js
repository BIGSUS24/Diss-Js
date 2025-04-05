import { REST, Routes } from 'discord.js';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTI3MjUyNjM3NDc4NzIyMzU1NQ.Gfq7aA.U44W6KbuzRL3TFNyzaTz_2TOwFHroeyrsf122c');

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands("1272526374787223555"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}