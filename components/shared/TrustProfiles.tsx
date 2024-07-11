import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Trust_Profiles() {
  return (
    <div className="flex justify-center gap-10 items-center p-4">
      <Link href={"https://www.trustpilot.com/review/wpkindle.com"}>
        <Image
          className="flex"
          src={"/assets/images/trustpilot.png"}
          width={150}
          height={50}
          alt="trustpilot"
        />
      </Link>
      <Link href={"https://www.trustindex.io//reviews/wpkindle.com"}>
        <Image
          className="flex"
          src={"/assets/images/trustindex.png"}
          width={80}
          height={40}
          alt="trustindex"
        />
      </Link>
    </div>
  );
}
