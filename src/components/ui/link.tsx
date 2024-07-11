"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/libs/utils/animation";

interface Props {
  href: string;
  className: string;
  label: string;
}

const TransitionLink = ({ href, label, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (href === "#") return; 
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  );
};

export default TransitionLink;
