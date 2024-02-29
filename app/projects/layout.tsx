import { Metadata } from "next";
import Header from "../ui/header/header";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header active={"projects"} />
      <div>{children}</div>
    </div>
  );
}
