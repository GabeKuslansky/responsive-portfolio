const Container = ({ children }) => (
  <div className="bg-main w-screen pt-10 pb-10">
    <div className="lg:w-[40%] w-[90%] h-[100vh] m-auto">{children}</div>
  </div>
);

export default Container;
