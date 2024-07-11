import { Globe } from "@/components/globe-world";
import Container from "@/components/layout/container";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Textarea from "@/components/ui/ text-area";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar theme="dark" />
      <div className="pt-28 md:pt-32"></div>
      <Container>
        <div>
          <h1 className="text-3xl mt-8 montserrat font-bold text-left uppercase mb-5 heading-line">
            Get In Touch
          </h1>
          <p className="montserrat font-medium text-lg">
            Neque porro quisquam est qui dolorem ipsum quia lorem ipsum dolor
            sit amet dolor sit amet, consectetur, adipisci velit...
          </p>
        </div>
        <form className="mt-10 mb-10">
          <div className="grid md:grid-cols-3 gap-5">
            <Input placeholder="Name" type="text" required />
            <Input placeholder="Email" type="text" required />
            <Input placeholder="Phone" type="number" required />
          </div>
          <div className="mt-5">
            <Textarea className="w-full" rows={10} placeholder="Message..." />
          </div>
          <div className="text-center mt-5">
            <Button variant="primary">Submit</Button>
          </div>
        </form>
      </Container>
      <div className="bg-primary-blue overflow-hidden">
        <Container>
          <div className="py-[90px] grid  md:items-center gap-2">
            <div className="col-span-3">
              <h1 className="text-3xl  montserrat font-bold text-left uppercase  heading-line text-white">
                OUR EXPERTIES
              </h1>
              <p className="text-lg text-white">
                From the start, we’ve always tried to do things properly. So
                it’s heart-warming to get recognition from people who feel the
                same way
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                eum inventore, dolor vel officia delectus cupiditate tenetur
                molestias dolore nemo nostrum iusto modi vero impedit et
                consequatur amet, minus ratione.
              </p>
            </div>
            <div className="mt-6 md:mt-4">
              <Button variant="outline-white">View More</Button>
            </div>
          </div>
        </Container>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0621551477!2d-74.30932062590426!3d40.69701930648187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1714393527919!5m2!1sen!2s"
        className="w-100"
        height="450"
        style={{
          border: 0,
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
}
