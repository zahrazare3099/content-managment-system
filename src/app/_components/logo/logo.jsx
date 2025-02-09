import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/logoTh.jpg"
        alt="logoInMenu"
        width={100}
        height={75}
      />
    </div>
  );
};
