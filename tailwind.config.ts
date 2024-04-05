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
      cursor: {
        clapperboard:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🎬</text></svg>\") 12 0, auto;",
        stars:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✨</text></svg>\") 12 0, auto;",
        writing:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>📝</text></svg>\") 12 0, auto;",
        camera:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🎥</text></svg>\") 12 0, auto;",
        technologist:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🧑‍💻</text></svg>\") 12 0, auto;",
        tubes:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🧪</text></svg>\") 12 0, auto;",
        abc:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🔤</text></svg>\") 12 0, auto;",
      },
    },
  },
};
