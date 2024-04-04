import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      fontFamily: {
        condensed: ['"Sofia Sans Extra Condensed"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
        mono: ['"Space Mono"', "mono"],
        console: ['"Press Start 2P"', "mono"],
      },
      animation: {
        sliding: "sliding 30s linear infinite",
        blink: "blink 1s step-end infinite",
        typing: "3.5s steps(40, end)",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        keyframes: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
      },
    },
  },
};
