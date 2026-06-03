import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Mochiona | Premium Handmade Mochi",
    template: "%s | Mochiona",
  },

  description:
    "Mochiona adalah mochi premium dengan berbagai varian rasa favorit seperti Strawberry, Chocolate Oreo, Mangga Cream, Salju, dan Mix Box.",

  keywords: [
    "mochi",
    "mochiona",
    "mochi solok",
    "mochi premium",
    "dessert solok",
    "mochi strawberry",
    "mochi oreo",
    "mochi mangga",
  ],

  authors: [
    {
      name: "Mochiona",
    },
  ],

  creator: "Mochiona",

  metadataBase: new URL("https://mochiona.vercel.app"),

  openGraph: {
    title: "Mochiona | Premium Handmade Mochi",
    description:
      "Lezat Tiada Tanding • Bikin Nagih • Sensasi Rasa Baru",
    url: "https://mochiona.vercel.app",
    siteName: "Mochiona",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/mix.jpg",
        width: 1200,
        height: 630,
        alt: "Mochiona Premium Mochi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mochiona",
    description:
      "Premium Handmade Mochi dengan berbagai varian rasa favorit.",
    images: ["/images/mix.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${poppins.className} bg-[#FFF8F5] text-gray-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}