console.log("=== next.config.js ===")
console.log("process.env.ENV >", process.env.ENV);
console.log("process.env.NODE_ENV >", process.env.NODE_ENV);
console.log("process.env.NEXT_PUBLIC_API_URL >", process.env.NEXT_PUBLIC_API_URL);
console.log("=== next.config.js end ===")

exports.default = {
    future: {
        webpack5: true
    },
};