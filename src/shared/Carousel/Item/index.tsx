interface Props {
  children: React.ReactNode;
  width: string;
}

const CarouselItem = ({ children, width }: Props) => {
  return (
    <div
      className="inline-flex items-center justify-center relative"
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
