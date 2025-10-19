import { list } from "@vercel/blob";
import type { Metadata } from "next";
import { Suspense } from "react";

import { PageContainer } from "@/components/shared/page-container";
import { Video } from "@/components/shared/video";
import { Mining } from "./_components/mining";
import { Referral } from "./_components/referral";

export const metadata: Metadata = {
  title: "DApp",
};

export default async function DappPage() {
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
    <PageContainer>
      <div className="relative">
        <Suspense>
          <Video
            src={url}
            type="video/mp4"
            aria-label="Utopia character walking"
            className="absolute top-0 left-0 -z-10 h-svh w-full object-cover"
          />
          <div className="absolute top-0 left-0 -z-5 h-svh w-full bg-black/25" />
          <svg
            className="absolute bottom-0 -z-1"
            viewBox="0 0 1425 205.55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M0,17.27l23.75,5.09C47.5,27.38,95,37.57,142.5,39.47s95-4.36,142.5-10.28,95-11.35,142.5-7.4,95,17.43,142.5,24,95,6.25,142.5,5.83,95-.9,142.5-3S950,43,997.5,42.92s95,3.12,142.5,2.88,95-4.11,142.5-3.62,95,5.51,118.75,8L1425,52.62v170.2H0Z"
                className="fill-black/25"
              ></path>
              <path
                d="M0,94.56l23.75-6.17C47.5,82.22,95,69.89,142.5,65.2s95-1.64,142.5,4.85S380,86.33,427.5,86.5,522.5,77,570,73.59s95-.66,142.5,1.81,95,4.6,142.5,3.78,95-4.6,142.5-6.58,95-1.89,142.5,1.24,95,9.45,142.5,13.15,95,4.85,118.75,5.35l23.75.57V222.82H0Z"
                className="fill-black/50"
              ></path>
              <path
                d="M0,134,23.75,132C47.5,129.91,95,125.8,142.5,125.39s95,2.88,142.5,5.75,95,5.35,142.5,4,95-6.58,142.5-8.06,95,.66,142.5-.41,95-5.51,142.5-9.21,95-6.66,142.5-5.83,95,5.42,142.5,9.86,95,8.47,142.5,9.05,95-2.47,118.75-4L1425,125v97.84H0Z"
                className="fill-black/75"
              ></path>
              <path
                d="M0,178.42l23.75-1.64c23.75-1.65,71.25-4.94,118.75-5.59s95,1.23,142.5,2.71,95,2.63,142.5,4.11,95,3.45,142.5,2.88,95-3.54,142.5-8.8,95-12.58,142.5-13.57,95,4.53,142.5,8.23,95,5.67,142.5,4,95-6.91,142.5-9.79,95-3.37,118.75-3.7L1425,157v65.78H0Z"
                className="fill-black"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="1425" height="444" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>

          <div className="container mx-auto max-w-4xl px-4 py-8">
            <Mining />
          </div>
        </Suspense>
      </div>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Referral />
      </div>
    </PageContainer>
  );
}
