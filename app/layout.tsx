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
      <head>
        <link href="./output.css" rel="stylesheet" />
      </head>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
