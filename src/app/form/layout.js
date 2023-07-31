import Header from "@/components/header/Header";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      
    </div>
  );
}
