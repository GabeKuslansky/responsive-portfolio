import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => <div className="w-screen h-screen bg-primary">{children}</div>;

export default Container;
