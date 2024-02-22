import { Metadata } from "next";
import { roboto } from "./ui/fonts";
import "./global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Warren Portfolio",
    default: "Warren Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}

// import "../styles/global.css";
// import { Roboto } from "next/font/google";

// const roboto = Roboto({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

// export default function App({ Component, pageProps }) {
//   return (
//     <main className={roboto.className}>
//       <Component {...pageProps} />
//     </main>
//   );
// }
