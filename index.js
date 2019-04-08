var prefix = ('bob');
// You can choose here the name of the bot. I personally chose bob

bot.on('ready', () => {
    console.log("Alleluia it is working")
    bot.user.setActivity("himself (he is a little narcissistic)", {type: 3});
});
//activity of the bot

//Implement of sleep
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// BEGINNING OF ELIF
// to talk to yourself
bot.on( 'message', message, 'amessage', async message => {
 else if (message.content.startsWith(prefix + ' say')) {
    message.delete().catch();
  var text = message.content.split(' ').slice(2).join(' ');
  message.channel.send(text)
 }
 //This one might have errors, I have difficulties with guilds and specific things of discord
 //The give role
 else if (amessage.content.startsWith(prefix + ', give to ' )) {
  let rMember = amessage.guild.member(message.mentions.users.first()) || amessage.guild.members.get(message[0]);
 if(!rMember) return message.channel.send("Sorry, I know no one with this name");
 let role = message.content.slice(43);
 if(!role) return message.channel.send("Hey give a role!");
 let gRole = amessage.guild.roles.find('name', role);
 if (!gRole) return message.channel.send("Give an existing role please, I'm getting confused ");

 if(rMember.roles.has(gRole.id));
 await(rMember.addRole(gRole.id));
 }
 
 //Diverse
 else if(message.content.startsWith(prefix)) {
  var text = message.content.split(' ').slice(1).join(' ');

  if (text == 'help me') {
   message.channel.send({embed: {
    color: 0x007100,
    author: {
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "HELP COMMANDS",
        value: "By Bob"
      },
      
      {
        name: "bob help me everyday",
        value: "For everyday commands ;)"
      },
      
      {
        name: "bob help me more",
        value: "advanced help"
      },
      {
        name: "bob help me on the server",
        value: "Aide sur le server"
      },
      {
        name: "bob help me, I'm admin",
        value: "Admin help"
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "A bot by Darknew#6102"
    }
  }})}

//The everyday help
   else if (text == 'help me everyday') {
   message.channel.send({embed: {
    color: 0x007100,
    author: {
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "bob hi",
        value: "To say him hello"
      },
      
      {
        name: "bob describe @someone",
        value: "To describe someone"
      },
     
      {
        name: "bob give me a drink",
        value: "To have a nice cold french beer"
      },

      {
        name: "bob je t'emmerde",
        value: "To swear in french"
      },

      {
        name: "bob fuck you",
        value: "When you rage on commands like this :)"
      },
      
    ],
    timestamp: new Date(),
    footer: {
      text: "A bot by Darknew#6102"
    }
  }})}

//je t'emmerde

  else if (text == "je t'emmerde") {
    message.reply('As well as me :grin:')
  }

  // the rage

  else if (text == 'nique ta race') {
    message.reply('and you, love your ciblings!')
    message.channel.send(':poop:')
  }
// Help about the server

   else if (text == 'help me on the server')  {
   message.channel.send({embed: {
    color: 0x007100,
    author: {
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "SERVER'S COMMANDS",
        value: "By Bob"
      },
      {
        name: "bob are you here?",
        value: "To verify is accessibility"
      },
 
    ],
    timestamp: new Date(),
    footer: {
      text: "A bot by Darknew"
    }
  }})}
//Help for admins

   else if (text == 'help me, I'm admin')  {
   if (message.member.hasPermission("ADMINISTRATOR")) {
   message.channel.send({embed: {
    color: 0x007100,
    author: {
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "ADMIN'S COMMANDS",
        value: "By Bob"
      },

      {
        name: "bob, give to @someone the role something",
        value: "To give someone a role"
      },
    ],
    timestamp: new Date(),
    footer: {
      text: "A bot by Darknew"
    }
  }})
  }
  else {
    message.channel.send("That's false! You're lying! Liar!");

  }}


// The hello

  else if (text == 'hi') {
    message.channel.send('Hi')

  }
//ADVANCED HELP

   else if (text == 'help me more')  {
   message.channel.send({embed: {
    color: 0x007100,
    author: {
    },
    title: "",
    url: "",
    description: "",
    fields: [{
        name: "ADVANCED COMMANDS",
        value: "By Bob"
      },
      {
        name: "bob say something",
        value: "For him to talk"
      },

    ],
    timestamp: new Date(),
    footer: {
      text: "A bot by Darknew"
    }
  }})}

  // The drink

  else if (text == 'give me a drink') {
    message.reply('with pleasure');
    sleep(5000).then(() => {
    message.channel.send('Here it is: ');
    message.channel.send(':beer:')
})
  }

  // The answer

  else if (text =='') {
    message.channel.send('What's up?')
  }
  
  
//describe

  else if (text.startsWith('describe ')) {
    message.channel.send('So, let me think about it...');
       sleep(2000).then(() => {
          message.channel.send("To not offense anyone in the room, I prefer to say nothing :wink:  ")
        }
  })}


  //Online?
  else if (text == 'are you here?') {
    message.channel.send('Yes master! Always here to work!')
  }

// ERROR message 
  else {

    message.channel.send({embed: {
  color: 0x007100,
  author: {},
  title: "",
  url: "",
  description: "",
  fields: [{
      name: "ERROR",
      value: "Your command is just shit"
    },
    
  ],
  timestamp: new Date(),
  footer: {
    icon_url: bot.user.avatarURL,
    text: "To see the help menu, just say 'bob help me'"

  }
}
});

  }



  }
});
