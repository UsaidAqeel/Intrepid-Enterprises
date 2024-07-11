import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");
  const bannerSix = document.getElementById("banner-6");

  if (
    bannerOne &&
    bannerTwo &&
    bannerThree &&
    bannerFour &&
    bannerFive &&
    bannerSix
  ) {
    const tl = gsap.timeline();

    tl.set(
      [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix],
      {
        yPercent: 0,
      }
    ).to(
      [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix],
      {
        yPercent: 100,
        stagger: 0.2,
        duration: 0.3, // Adjust the duration here (in seconds)
        ease: "power2.out", // Add easing for smoother animation

      }
    );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");
  const bannerFive = document.getElementById("banner-5");
  const bannerSix = document.getElementById("banner-6");

  if (
    bannerOne &&
    bannerTwo &&
    bannerThree &&
    bannerFour &&
    bannerFive &&
    bannerSix
  ) {
    const tl = gsap.timeline();

    tl.set(
      [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix],
      {
        yPercent: -100,
      }
    ).to(
      [bannerOne, bannerTwo, bannerThree, bannerFour, bannerFive, bannerSix],
      {
        yPercent: 0,
        stagger: 0.2,
        duration: 0.3, // Adjust the duration here (in seconds)
        ease: "power2.out", 
        onComplete: () => {
          router.push(href);
        },
      }
    );
  }
};
