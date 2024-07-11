import { FeatureCard } from "@/components/feature-card";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import { EnergyCard, NewCard, ProjectCards } from "@/components/ui/cards";
import { energyCard, featureCard, newsCard, projectCard } from "@/constant/data"; 
import React from "react";

export default function Home() {
  return (
    <>
      <div className="banner relative pt-52 sm:pt-40 xl:pt-52">
        <Container>
          <span className="uppercase text-[#FFD200] montserrat font-snormal z-[9999] ">
            Natural Beauty
          </span>
          <div className="md:w-[600px]">
            <h1 className="text-white text-[35px]  sm:text-[40px] md:text-[50px] montserrat font-bold md:leading-[60px]">
              Overcoming technology challenges: making the most of resources
            </h1>
          </div>
          <div className="mt-2">
            <Button variant="primary"> Read More </Button>
            <Button variant="outline" className="ml-3">
              {" "}
              Read More{" "}
            </Button>
          </div>
        </Container>
      </div>
      <div className="pt-10 md:pt-0 md:-mt-20 z-10 pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCard?.map((item, index) => (
              <FeatureCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </Container>
      </div>
      <div className="mt-10 pb-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div className="w-full">
              <h1 className="text-2xl mt-8 montserrat font-bold text-left uppercase mb-5 heading-line">
                Save The Planet!
              </h1>
              <p className="montserrat font-medium text-lg">
                Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Sed posuere consectetur est at lobortis.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Sed
                posuere consectetur est at lobortis.
              </p>
            </div>
            <div className="w-full hidden md:flex justify-end ">
              <img src="https://themes.webdevia.com/petroleum-gas/wp-content/uploads/2016/01/CEO-d3.png" />
            </div>
          </div>
        </Container>
      </div>
      <div className="pt-10 pb-20">
        <Container>
          <div>
            <h1 className="text-2xl mt-8 montserrat font-bold text-center uppercase mb-5 heading-line-center">
              We Provide Energy
            </h1>
            <p className="text-center text-muted-foreground text-lg">
              To many clients like government, homes and offices
            </p>
          </div>
          <div className="grid md:grid-cols-4 mt-10 gap-4">
            {energyCard?.map((item) => (
              <EnergyCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </Container>
      </div>

      <div className="pt-10 pb-20 bg-[#F8F9F9]">
        <Container>
          <div>
            <h1 className="text-2xl mt-8 montserrat font-bold text-center uppercase mb-5 heading-line-center">
              Latest Projects
            </h1>
            <p className="text-center text-muted-foreground text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br />
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {projectCard?.map((item) => (
              <ProjectCards
                key={item.title}
                title={item.title}
                image={item.image}
                location={item.location}
              />
            ))}
          </div>
          <div className="text-center mt-14">
            <Button variant="primary">MOREE PROJECT</Button>
          </div>
        </Container>
      </div>
      <div className="bg-primary-blue overflow-hidden">
        <Container>
          <div className="py-[120px]">
            <p className="text-3xl text-center text-white">
              “ We help hardware startups integrate technology, scale and
              desirability without compromise ”
            </p>
          </div>
        </Container>
      </div>
      <div className="pt-10 pb-20">
        <Container>
          <div>
            <h1 className="text-2xl mt-8 montserrat font-bold text-center uppercase mb-5 heading-line-center">
              Our Latest News
            </h1>
            <p className="text-center text-muted-foreground text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br />
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {newsCard?.map((item) => (
              <NewCard
                key={item.title}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </div>
          <div></div>
        </Container>
      </div>
      <div className="pt-10 pb-20 bg-[#F8F9F9]">
        <Container>
          <div>
            <h1 className="text-2xl mt-8 montserrat font-bold text-center uppercase mb-5 heading-line-center">
              Get Latest Offers
            </h1>
            <p className="text-center text-muted-foreground text-lg">
              Sed odio orci, fringilla nec dolor et, euismod auctor mauris.
              <br />
              Curabitur semper dui diam, nec accumsan mauris consequat sed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-8 mx-auto max-w-5xl">
            <input
              placeholder="Your Name"
              className="md:me-4 py-2 px-2 outline-primary-blue border border-gray-200 w-100"
            />
            <input
              placeholder="Your Email"
              className="md:me-4 py-2 px-2 outline-primary-blue border border-gray-200"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
          <div className="flex items-center justify-center"></div>
        </Container>
      </div>
    </>
  );
}
