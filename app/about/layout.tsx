import { Metadata } from "next";
import Header from "../ui/(header)/header";

export const metadata: Metadata = {
  title: "About Me",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header active={"about"} />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
