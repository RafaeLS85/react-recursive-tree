export const SubCategory = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        left: 25,
        paddingLeft: "15px",
        backgroundColor: "#686565",
        borderRadius: "16px",
      }}
    >
      {children}
    </div>
  );
};
