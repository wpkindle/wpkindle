import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src={"/assets/images/loader.gif"}
        alt="loader"
        width={50}
        height={50}
      />
      <div className="text-green-600">LOADING</div>
    </div>
  );
};

export default Loading;
