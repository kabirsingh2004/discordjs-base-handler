module.exports = {
  token: process.env.TOKEN || "BOT_TOKEN",
  prefix: process.env.PREFIX || "BOT_PREFIX",
  embed: {
    color: "#2f3136",
    wrongcolor: "#2f3136",
    footertext: "Coded By Kabir Singh | Tech Boy Development",
    footericon: "",
  },
  emoji: {
    ERROR: "โ",
    SUCCESS: "โ",
    disabled: "๐ด",
    enabled: "๐ข",
    cleared: "๐งน",
    time: "โฒ๏ธ",
    search: "๐",
    ping: "๐",
    bot: "๐ค",
  },
  // others
  guildID: "", // for slash command
};
