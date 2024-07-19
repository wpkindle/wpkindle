import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { MonitorCog } from "lucide-react";

export default function ServicesTab() {
  return (
    <div className="px-3 py-4 sm:py-8 services-backgound">
      <div className="container p-0 sm:p-4">
        <div className="rounded-lg">
          <h2 className="flex gap-2 items-center px-3 py-1 w-max text-2xl font-extrabold text-center text-gray-900 dark:text-white lg:text-3xl bg-white rounded-t-lg border-b border-gray-300">
            <MonitorCog className="text-green-600" />
            <span className="rounded-3xl border-green-600 text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-blue-400">
              SERVICES
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 p-5 bg-white rounded-lg rounded-tl-none">
            <div className="shadow-2xl border border-gray-400 bg-white rounded-lg flex flex-col justify-between">
              <img
                src="/assets/images/generatepress.webp"
                className="w-full mb-3 rounded-t-lg border-b border-gray-400"
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

            <div className="shadow-2xl border border-gray-400 bg-white rounded-lg flex flex-col justify-between">
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

            <div className="shadow-2xl border border-gray-400 bg-white rounded-lg flex flex-col justify-between">
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
                    Unleash Your Website&apos;s Speed with our WordPress Speed
                    Optimization Service. Is your WordPress website sluggish,
                    leaving visitors frustrated and bouncing away? We can help!
                    Our WordPress Speed Optimization Service tackles speed
                    issues head-on, delivering a website that loads lightning
                    fast.
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
