import { Metadata } from "next";
import Header from "../ui/header/header";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header active={"about"} />
      <div>{children}</div>
    </div>
  );
}
