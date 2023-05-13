import { useEffect, useState } from "react";
import Typography from "../../shared/Typography";
import Image from "../../shared/Image";

const WhatsAppButton = () => {
  const [openWhatsAppText, setOpenWhatsAppText] = useState(false);
  const [isDeviceTouchScreen, setIsDeviceTouchScreen] = useState(false);

  const handleOpenWhatsAppText = () => {
    setOpenWhatsAppText(true);
  };

  const handleCloseWhatsAppText = () => {
    setOpenWhatsAppText(false);
  };

  const deviceTouchScreen = () => {
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.maxTouchPoints > 0
    ) {
      setIsDeviceTouchScreen(true);
    }
  };

  useEffect(() => {
    deviceTouchScreen();
  }, []);

  return (
    <div
      className={`flex fixed z-50 bottom-[3%] mx-auto w-full max-w-7xl px-5 justify-end`}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5537999881788"
        target="_blank"
        className="flex items-center gap-x-2"
      >
        {openWhatsAppText && !isDeviceTouchScreen ? (
          <Typography
            text="Entrar em contato"
            className="uppercase bg-[#000000] text-white rounded-lg p-1.5"
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
