import Image from "@components/shared/Image";
import Typography from "@components/shared/Typography";
import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [openWhatsAppText, setOpenWhatsAppText] = useState(false);

  const handleOpenWhatsAppText = () => {
    setOpenWhatsAppText(true);
  };

  const handleCloseWhatsAppText = () => {
    setOpenWhatsAppText(false);
  };

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none)");
    setIsTouchDevice(mediaQuery.matches);
  }, []);

  return (
    <div
      className={`flex fixed z-50 bottom-[3%] mx-auto w-full max-w-7xl px-5 justify-end`}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5537998372091"
        target="_blank"
        className="flex items-center gap-x-2"
      >
        {openWhatsAppText && !isTouchDevice ? (
          <Typography
            text="Entrar em contato"
            className="bg-[#000000] text-white rounded-lg p-2"
          />
        ) : null}
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          layout="fixed"
          width={45}
          height={45}
          className="w-20"
          onMouseEnter={handleOpenWhatsAppText}
          onMouseLeave={handleCloseWhatsAppText}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
