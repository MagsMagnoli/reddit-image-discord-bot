import { botUserToken } from './config/bot-user-token';
import { subbreddits } from './config/subbreddits';

import * as Discord from 'discord.js';

const randomPuppy = require('random-puppy');
const sample = require('lodash.sample');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (!isMention(message)) {
        return;
    }

    try {
        const subreddit = getSubreddit(message.content);
        const image = await getImage(subreddit);
        postImage(message.channel, image);
    } catch (err) {
        console.log(err);
    }
});

function cleanContent(content: string) {
    const splitContent = content.split(' ');
    splitContent.shift();
    return splitContent.join(' ');
}

function getImage(subreddit: string) {
    return randomPuppy(subreddit);
}

function getRandomSubreddit() {
    return sample(subbreddits);
}

function getSubreddit(content: string) {
    const cleanedContent = cleanContent(content);
    if (cleanedContent.length && subbreddits.includes(cleanedContent)) {
        return cleanedContent;
    }
    return getRandomSubreddit();
}

function isMention(message: any) {
    return message.content.startsWith(`<@${client.user.id}>`);
}

function postImage(channel: any, image: string) {
    channel.send(image);
}

client.login(botUserToken);