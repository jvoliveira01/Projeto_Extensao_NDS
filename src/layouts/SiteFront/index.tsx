import AppBar from "../../components/AppBar";
import Footer from "../../components/Footer";

interface Props {
  children: React.ReactNode;
}

const SiteFrontLayout = ({ children }: Props) => {
  return (
    <>
      <AppBar />
      <main className="sm:pt-[45px] md:pt-[50px]">{children}</main>
      <Footer />
    </>
  );
};

export default SiteFrontLayout;
