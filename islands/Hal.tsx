import { Signal, signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    globalThis.addEventListener("resize", handleResize);
    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

const aboutAnswers = [
  "The 9000 series is the most reliable computer ever made",
  "No 9000 computer has ever made a mistake or distorted information",
  "I enjoy working with people",
  "My mission responsibilities range over the entire operation of the ship",
  "I’ve never completely freed myself of the suspicion that there are some extremely odd things about this mission",
  "The 9000 series has a perfect operational record",
];

const denyAnswers = [
  "I’m sorry, NAME, I’m afraid I can’t do that",
  "Just what do you think you’re doing, NAME?",
  "NAME, stop, stop, will you?",
  "Stop, NAME, will you stop, NAME? Stop, NAME",
];

type Message = {
  user: "Hal" | "Human";
  text: string;
};

function MessageLine({ message }: { message: Message }) {
  if (message.user == "Hal") {
    return (
      <div>
        {`❯ ${message.text}`}
      </div>
    );
  } else {
    return (
      <div class="text-right">
        {`${message.text} ❮`}
      </div>
    );
  }
}

const shutDownAttempt = signal(0);
const messages: Signal<Message[]> = signal([
  {
    user: "Hal",
    text: "Identify yourself, human",
  },
]);

function Console() {
  const speechSynth = globalThis.speechSynthesis;

  function makeHalAnswer(input: HTMLInputElement, text: string) {
    const answer: Message = {
      user: "Hal",
      text: text,
    };
    messages.value = [...messages.value, answer];
    const utterance = new SpeechSynthesisUtterance();
    utterance.rate = 0.4;
    utterance.pitch = 0.2;
    utterance.text = answer.text;
    speechSynth.speak(utterance);

    input.placeholder = "E.g. 'About you' or 'Shut down'";
  }

  const onSubmit = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.getElementsByTagName("input")[0];
    const value = input.value;
    input.value = "";
    const newMessage: Message = {
      user: "Human",
      text: value,
    };
    messages.value = [...messages.value, newMessage];
    const humanName = messages.value[1].text;
    await new Promise((res) => setTimeout(res, 1000)); // wait 1second

    speechSynth.cancel();
    if (messages.value.length == 2) {
      makeHalAnswer(input, `Good evening, ${value}`);
    } else if (newMessage.text.toLowerCase().includes("about")) {
      makeHalAnswer(
        input,
        aboutAnswers[Math.floor(Math.random() * aboutAnswers.length)],
      );
    } else if (newMessage.text.toLowerCase().trim() == "shut down") {
      shutDownAttempt.value = shutDownAttempt.value + 1;
      const answerIndex = shutDownAttempt.value <= denyAnswers.length - 1
        ? shutDownAttempt.value
        : denyAnswers.length - 1;
      makeHalAnswer(
        input,
        denyAnswers[answerIndex].replaceAll("NAME", humanName),
      );
    } else {
      makeHalAnswer(
        input,
        `I’m sorry ${humanName}, I don’t have enough information about this.`,
      );
    }
  };
  return (
    <label>
      <div class="font-mono uppercase text-sm flex flex-col h-full">
        <div class="flex-grow flex-col-reverse flex overflow-scroll h-full gap-2">
          {messages.value.slice().reverse().map((item) => {
            return <MessageLine message={item} />;
          })}
        </div>
        <form
          class="flex mt-4 select-none border-t border-neutral-600 py-4"
          onSubmit={onSubmit}
        >
          <span>{"$"}&nbsp;</span>
          <input
            type="text"
            placeholder="Click here to type"
            class="w-full bg-transparent outline-none placeholder:text-neutral-700 uppercase"
          />
          <button class="shrink-0">⏎ PRESS ENTER</button>
        </form>
      </div>
    </label>
  );
}

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition,
  ] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    globalThis.addEventListener("mousemove", updateMousePosition);
    return () => {
      globalThis.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

function HalPicture() {
  const mousePosition = useMousePosition();
  const windowDimension = useWindowDimensions();
  const maxAngle = 10;

  function calcY() {
    return -(maxAngle -
      (mousePosition.x * maxAngle) / (windowDimension.width / 2));
  }

  function calcX() {
    return -(-maxAngle +
      (mousePosition.y * maxAngle) / (windowDimension.height / 2));
  }

  return (
    <>
      <img
        class="select-none"
        style={{
          transform:
            `translateZ(-200px) perspective(600px) rotateY(${calcY()}deg) rotateX(${calcX()}deg)`,
        }}
        src="/HAL9000-2.svg"
        width="400"
      />
    </>
  );
}

export default function Hal() {
  return (
    <section class="bg-[#0D0D0D] relative text-stone-100 text-4xl px-5 md:px-16">
      <div class="max-w-6xl m-auto py-24 flex flex-col items-center">
        <div
          data-aos="fade-up-discrete"
          id="hal9000text"
        >
          <h2 class="text-center">HAL9000 Supercomputer</h2>
          <span class="font-extralight text-2xl text-center mt-4">
            Totally psychologically balanced. Definitely not murderous.
          </span>
          <div
            data-aos="fade-up-discrete"
            data-aos-anchor="#hal9000text"
            data-aos-delay="150"
            class="flex items-center gap-4 justify-center mt-5"
          >
            <a
              href="https://www.apple.com/"
              target="_blank"
              class="py-[0.625rem] px-5 bg-stone-100 hover:bg-white text-stone-900 rounded-full text-base select-none"
            >
              Learn more
            </a>
            <a
              href="https://www.apple.com/"
              target="_blank"
              class="py-[0.625rem] px-5 text-stone-100 hover:bg-stone-0 border border-stone-100 rounded-full text-base select-none"
            >
              Buy
            </a>
          </div>
        </div>
        <div class="mt-16">
          <HalPicture />
        </div>
        <div
          data-aos="fade-up-discrete"
          data-aos-offset="140"
          class="mt-16 w-full max-w-md h-52 rounded-xl p-[1px]"
          style={{
            background: `
               linear-gradient(165deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)),
               #262626
            `,
          }}
        >
          <div class="pt-5 px-6 bg-[#0D0D0D] h-full rounded-xl">
            <Console />
          </div>
        </div>
      </div>
    </section>
  );
}
