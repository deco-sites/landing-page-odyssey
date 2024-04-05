import Image from "apps/website/components/Image.tsx";

function shuffleArray(array: Array<unknown>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const IMAGES = [
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/6ecd94d4-3a9a-47c5-a926-431342f563ab",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/f84af164-2349-4cce-9d05-a5859ed3e233",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/53cbfeec-752a-48e0-9924-af99229e41f4",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/6f587430-5207-4d84-ab5e-91544e04a6e4",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/c33c0a1d-aafd-43e7-afc0-5573b56b5328",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/513b0a23-973f-4fee-96f9-ef134ac75d9d",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/7b8d12b5-b28b-4579-93a3-e2075b52ac3e",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/43c23f59-b9d3-4005-9e4e-8966837a6d9b",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/56d97b2b-9e4f-4675-9a61-42e39946102c",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/4234d3c4-07bd-4868-b257-0667d1c9305d",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/354c2d94-9e58-480e-81f6-eb817a66a60f",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/e4d38c0a-44f4-4663-a523-b7a2056457b8",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/15c4a7ad-4d12-4d5a-aec5-2a658791a3e8",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/0b348cd7-bde8-4fa9-8f4e-aefce8c4833d",
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4946/e61f5d81-c8d6-4eb7-8fa5-d8d62711143f",
];

shuffleArray(IMAGES);

function GalleryModal({ imageName, id }: { imageName: string; id: string }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box rounded-none w-screen max-w-none max-h-none p-0 relative">
        <img src={`${imageName}`} loading="lazy" fetchPriority="low"/>
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
        <Image
          data-aos="fade-up-discrete"
          data-aos-anchor="#gallery"
          data-aos-delay={index * 150}
          data-aos-offset={400}
          src={`${imageName}`}
          width={371}
          height={170}
          fetchPriority="low"
        />
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
            Sources
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
