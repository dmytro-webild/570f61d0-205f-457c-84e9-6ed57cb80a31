import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Webild Agency | Premium Websites for Local Businesses',
  description: 'Get a professional, fully managed website for your local business (Bars, Services, Shops). Fast launch, 24/7 support & secure hosting.',
  keywords: ["web agency, local business websites, website as a service, managed website, small business web design, web design for bars, web design for salons, web design for plumbers, high-converting landing page, elite corporate web design"],
  openGraph: {
    "title": "Webild Agency | Premium Websites for Local Businesses",
    "description": "Get a professional, fully managed website for your local business (Bars, Services, Shops). Fast launch, 24/7 support & secure hosting.",
    "url": "https://www.webildagency.com",
    "siteName": "Webild Agency",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-vector/grand-re-opening-social-media-stories_23-2148541571.jpg",
        "alt": "Responsive web design for a local business on devices"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Webild Agency | Premium Websites for Local Businesses",
    "description": "Get a professional, fully managed website for your local business (Bars, Services, Shops). Fast launch, 24/7 support & secure hosting.",
    "images": [
      "http://img.b2bpic.net/free-vector/grand-re-opening-social-media-stories_23-2148541571.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
