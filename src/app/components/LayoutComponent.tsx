import Image, { StaticImageData } from "next/image";
import Nav from "./Nav";
import ContactInfos from "./ContactInfos";
import Button from "./Button";

export default function LayoutComponent({
  children,
  mainFrame,
}: {
  children: React.ReactNode;
  mainFrame: StaticImageData;
}) {
  return (
    <div>
      <div className="grid xl:grid-cols-3 grid-cols-2">
        <div className="xl:col-span-2">
          <Nav />
          <div>{children}</div>
        </div>
        <div className="w-full h-[80dvh] overflow-hidden relative">
          <div className="absolute bottom-5 right-10">
            <Button />
          </div>
          <Image
            alt="JouryBelle"
            src={mainFrame}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-10">
        <ContactInfos />
      </div>
    </div>
  );
}
