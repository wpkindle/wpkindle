import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ServicesTab() {
  return (
    <div className="px-3 py-5 sm:py-10 service-backgound">
      <div className="container p-0 sm:p-4">
        <div className="border rounded-lg">
          <h1 className="text-2xl font-extrabold text-center text-gray-900 dark:text-white md:text-2xl lg:text-4xl bg-white rounded-t-lg p-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-blue-400">
              SERVICES
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5 bg-opacity-50 bg-green-600">
            <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg flex flex-col justify-between leading-normal">
              <img
                src="/assets/images/generatepress.webp"
                className="w-full mb-3 rounded-t-lg border-b"
              />
              <div className="p-4 pt-2">
                <div className="mb-8">
                  <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    GP Theme Customization
                  </p>
                  <p className="text-gray-700 text-sm">
                    Focused on speed, stability, and accessibility, our
                    lightweight WordPress theme and suite of tools lets you
                    build beautiful high-performance websites that work. Whether
                    you’re a hobbyist, freelancer, or agency, you can make just
                    about anything with GeneratePress.
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href={"/contact"}>
                    <Button>Get A Quote</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg flex flex-col justify-between leading-normal">
              <img
                src="/assets/images/wp-theme-customization.webp"
                className="w-full mb-3 rounded-t-lg border-b"
              />
              <div className="p-4 pt-2">
                <div className="mb-8">
                  <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    WP Theme Development
                  </p>
                  <p className="text-gray-700 text-sm">
                    We help you craft Custom WordPress Themes tailored to your
                    visions, building bespoke WordPress themes from the ground
                    up, focusing on speed, stability, security, and
                    accessibility. Our development process ensures you get a
                    website that not only looks amazing but performs flawlessly.
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href={"/contact"}>
                    <Button>Get A Quote</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg flex flex-col justify-between leading-normal">
              <img
                src="/assets/images/speed-optimization.png"
                className="w-full mb-3 rounded-t-lg border-b bg-black"
              />
              <div className="p-4 pt-2">
                <div className="mb-8">
                  <p className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
                    WP Speed Optimization
                  </p>
                  <p className="text-gray-700 text-sm">
                    We help you craft a Custom WordPress Themes tailored to your
                    vision from the ground up, focusing on speed, stability,
                    security, and accessibility. Our development process ensures
                    you get a website that not only looks amazing but performs
                    flawlessly.
                  </p>
                </div>
                <div className="flex items-center">
                  <Link href={"/contact"}>
                    <Button>Get A Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
