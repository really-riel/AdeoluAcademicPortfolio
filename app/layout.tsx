import type { Metadata, Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adeolu Adeyinka",
  description: "Professional Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}  antialiased`}>
        <Provider>
          <div className="relative w-full overflow-hidden flex ">
            <svg
              id="visual"
              viewBox="0 0 1000 1300"
              width="880"
              height="1200"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className="z-5 absolute -top-[200px] md:top-0 -right-[450px] lg:-right-96 max-h-screen  "
            >
              <g transform="translate(927.4519875387796 -111.9512848530959)">
                <path
                  d="M648.8 -752.4C919.6 -545.9 1272.3 -416.2 1356.5 -200.5C1440.7 15.3 1256.4 317.2 1074.3 608.8C892.3 900.4 712.4 1181.7 443.3 1327C174.2 1472.2 -184.1 1481.3 -364.5 1290.3C-544.9 1099.4 -547.4 708.5 -624.9 430.5C-702.4 152.5 -854.9 -12.6 -829.6 -144.5C-804.2 -276.4 -601 -375.2 -433.1 -599.8C-265.2 -824.3 -132.6 -1174.7 28.2 -1208.3C189 -1241.9 378 -958.8 648.8 -752.4"
                  fill="#172554"
                ></path>
              </g>
            </svg>

            <ResponsiveNav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
