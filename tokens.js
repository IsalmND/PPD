// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1428416620929482845",
        serverId: "1394750866648727662",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "online",
        },
        selfMute: true,
    },
];
