const Discord = require("Discord.js");
const chancejs = require("chance");
const chance = new chancejs();
const prefix = ">"
var client = new Discord.Client();

client.on('ready', () => {
    console.log('3')
    console.log('2') 
    console.log('1')
    console.log("Selfbot is running!");
    console.log("I am on " + client.guilds.size + " servers!")
    console.log("Here are all the servers I am on:")
    console.log(client.guilds.forEach(g => { console.log(g.name) }))
});

let shortcuts = new Map([
    ['lenny', '( ͡° ͜ʖ ͡°)'],
    ['magic', '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'],
    ['yay', '( ﾟヮﾟ)'],
    ['smile', '{◕ ◡ ◕}'],
    ['wizard', '(∩´• . •`)⊃━☆ﾟ.*'],
    ['happy', '╰( ◕ ᗜ ◕ )╯'],
    ['party', '(つ°ヮ°)つ'],
    ['dance', '└╏ ･ ᗜ ･ ╏┐'],
    ['rage', '(┛ಠДಠ)┛彡┻━┻'],
    ['excited', '☆*:. o(≧▽≦)o .:*☆'],
    ['music', '(✿ ◕ᗜ◕)━♫.*･｡ﾟ'],
    ['woah', '【 º □ º 】']
])

client.on("message", msg => {
    if (msg.author.id != bot.user.id) { return; } 
    let cmd = msg.content.split(" ")[0]
    cmd = cmd.slice(prefix.length)
    let args = msg.content.split(" ").slice(1)
    if (cmd === "eval") {
        let res
        try {
            res = eval(args.join(" "))
        } catch (err) {
            return msg.edit(":arrow_down: Input\n```" + args.join(" ") + "```\n:Error! ```" + err + "```")
        }
        msg.edit(":arrow_down: Input\n```" + args.join(" ") + "```\n:arrow_up: Output\n```" + res + "```")
    }
    if (cmd === "ping") {
        msg.edit(":ping_pong: Pong! **" + client.ping.toFixed() + "**ms")
    }
    if (cmd === "servers") {
        msg.edit("I am on **" + client.guilds.size + "** servers!")
    }

    if (cmd === "lines") {
        msg.edit("My Selfbot has **118** lines of code!")
    }

    if (cmd === "cheese") {
        msg.edit("CHEESE :cheese:")
    }
    //Most of the commands
    if (cmd === "dice4") {
        msg.edit("I rolled a  **" + chance.d4() + "**")
    }

    if (cmd === "dice6") {
        msg.edit("I rolled a **" + chance.d6() + "**")
    }

    if (cmd === "dice8") {
        msg.edit("I rolled a **" + chance.d8() + "**")
    }

    if (cmd === "dice12") {
        msg.edit("I rolled a **" + chance.d12() + "**")
    }

    if (cmd === "dice20") {
        msg.edit("I rolled a **" + chance.d20() + "**")
    }

    if (cmd === "coinflip") {
        msg.edit("" + chance.pickone(["I flipped a coin and got **heads**!", "I flipped a coin and got **tails**!"]))
    }
    console.log(msg.author.username + "#" + msg.author.discriminator + ": " + msg.content)
})

client.on('message', message => {
    if (message.author !== client.user) return;
    let prefix = '/';
    if (!message.content.startsWith(prefix)) return;
    const params = message.content.split(' ').slice(1);
    if (message.content.startsWith(prefix + 'prune')) {
        let messagecount = parseInt(params[0]);
        message.channel.fetchMessages({ //Prune command, deletes mentioned number of messages. Example: /prune 20
                limit: 100
            })
            .then(messages => {
                let msg_array = messages.array();
                msg_array = msg_array.filter(m => m.author.id === client.user.id);
                msg_array.length = messagecount + 1;
                msg_array.map(m => m.delete().catch(console.error));
            });
    }
});

client.on('message', message => {
    if (message.author !== client.user) return;
    let prefix = '/';
    if (!message.content.startsWith(prefix)) return;

    let command_name = message.content.slice(1);
    if (shortcuts.has(command_name)) {
        setTimeout(() => { message.edit(shortcuts.get(command_name)) }, 50);
        return;
    }
});

client.login('NDM2NDU5MjgyODg0NzIyNjk5.DbxdjA.OTmDcTgImdLny2PdicxKf1ni5gY');
