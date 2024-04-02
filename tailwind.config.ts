import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        blink: "blink 2s infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%": {
            opacity: "0.6",
          },
          "33%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.6",
          },
          "66%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.6",
          },
        },
      },
    },
  },
};
