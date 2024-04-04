function shuffleArray(array: Array<unknown>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const IMAGES = [
  "still-2.jpg",
  "still-23.jpg",
  "still-4.jpg",
  "still-5.jpg",
  "still-21.jpg",
  "still-8.jpg",
  "still-9.jpg",
  "still-10.jpg",
  "still-22.jpg",
  "still-12.jpg",
  "still-19.jpg",
  "still-14.jpg",
  "still-15.jpg",
  "still-20.jpg",
  "still-17.jpg",
];

shuffleArray(IMAGES);

function GalleryModal({ imageName, id }: { imageName: string; id: string }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box rounded-none w-screen max-w-none max-h-none p-0 relative">
        <img src={`/${imageName}`} />
      </div>
      <button class="btn btn-circle btn-outline fixed top-6 right-6 text-stone-100 opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div class="modal-backdrop bg-black" />
      <form
        method="dialog"
        className="modal-backdrop bg-transparent z-10"
      >
        <button>
          Close
        </button>
      </form>
    </dialog>
  );
}

function GalleryItem(
  { imageName, modalId, index }: {
    imageName: string;
    modalId: string;
    index: number;
  },
) {
  return (
    <>
      <GalleryModal imageName={imageName} id={modalId} />
      <button
        onClick={() =>
          (document?.getElementById(modalId) as HTMLFormElement)?.showModal()}
        class="hover:scale-105 hover:drop-shadow-2xl transition duration-500 "
      >
        <img
          data-aos="fade-up-discrete"
          data-aos-anchor="#gallery"
          data-aos-delay={index * 150}
          data-aos-offset={400}
          src={`/${imageName}`}
        >
        </img>
      </button>
    </>
  );
}

export default function Gallery() {
  return (
    <>
      <section class="bg-[#0D0D0D] relative text-stone-100 text-3xl px-5 md:px-16">
        <div
          class="max-w-6xl m-auto py-24 "
          id="gallery"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            {IMAGES.map((image, index) => (
              <GalleryItem
                imageName={image}
                modalId={`stillsGaleryItem${index}`}
                index={index}
              />
            ))}
          </div>
          <div
            data-aos="fade-up-discrete"
            data-aos-anchor="#gallery"
            data-aos-delay={(IMAGES.length + 1) * 150}
            data-aos-offset={400}
            class="text-xs font-mono uppercase text-right text-neutral-600 tracking-normal mt-3"
          >
            View sources
            <a href="https://imgur.com/a/Lvnsx8X" target="_blank">【1】</a>
            and<a
              href="https://highdefdiscnews.com/2018/12/21/2001-a-space-odyssey-4k-uhd-blu-ray-screenshots/"
              target="_blank"
            >
              【2】
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
