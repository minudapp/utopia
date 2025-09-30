import { list } from "@vercel/blob";
import { Suspense } from "react";

import { Video } from "@/components/shared/video";

export async function Hero() {
  const { blobs } = await list({
    prefix: "utopia-walking.mp4",
    limit: 1,
  });

  const blob = blobs[0];
  if (!blob) {
    return null;
  }

  const { url } = blob;

  return (
    <section>
      <Suspense>
        <Video
          src={url}
          type="video/mp4"
          aria-label="Utopia character walking"
        />
      </Suspense>
    </section>
  );
}
