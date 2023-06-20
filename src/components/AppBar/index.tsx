import { useRouter } from "next/router";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Image from "../../shared/Image";
import Link from "../../shared/Link";
import Button from "../../shared/Button";

const AppBar = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const handleChangeRoutePage = (page: string) => {
    return router.push(`/${page}`);
  };
  return (
    <div className="sm:fixed top-0 left-0 z-40 w-full">
      <div className="bg-secondary-500 p-2">
        <div
          className={`flex mx-auto w-full max-w-7xl px-3 ${
            width <= 595
              ? "flex-col items-center justify-center"
              : "flex-row justify-between"
          }`}
        >
          <Link href="/" className="block max-w-[310px]">
            <Image
              src="/logo.svg"
              layout="responsive"
              alt="Nave do Som"
              width={380}
              height={50}
              className="cursor-pointer relative w-full"
            />
          </Link>
          <div className="flex items-center justify-between text-secondary-100 text-[13px] sm:text-sm gap-4">
            {router.pathname !== "/" ? (
              <Button
                label="Início"
                onClick={() => {
                  return handleChangeRoutePage("");
                }}
              />
            ) : null}{" "}
            {router.pathname !== "/quem-somos" && (
              <Button
                label="Quem Somos"
                onClick={() => {
                  return handleChangeRoutePage("quem-somos");
                }}
              />
            )}
            {router.pathname !== "/contato" && (
              <Button
                label="Contato"
                onClick={() => {
                  return handleChangeRoutePage("contato");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
