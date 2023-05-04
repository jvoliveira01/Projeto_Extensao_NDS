interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`flex mx-auto w-full max-w-7xl ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
