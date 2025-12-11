import type { ReactNode } from "react";

interface HeaderType {
  image: { src: string; alt: string };
  children:ReactNode;
}
export default function Header({ image,children }: HeaderType) {
  return (
    <div className="">
      <img {...image} className="w-30 mx-auto" />
      {children}
    </div>
  );
}
