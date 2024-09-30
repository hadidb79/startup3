import { Features_Arr, Home_Arr } from "../constants/constants";

interface Props {
  onClick: () => void;
  initialIndex: number;
  setInitialIndex: React.Dispatch<React.SetStateAction<number>>;
}
const FeaturesToggleDots = ({
  onClick,
  initialIndex,
  setInitialIndex,
}: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        position: "absolute",
        right: "10%",
        // border:"2px solid white",
      }}
    >
      {Features_Arr.map((item: { id: number }, index: number) => {
        return (
          <div
            key={index}
            onClick={(event: any) => {
              setInitialIndex(item.id);
            }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: `${
                item.id === initialIndex ? "white" : "transparent"
              }`,
              border: "1px solid rgba(216, 216, 216,.4)",
              cursor: "pointer",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FeaturesToggleDots;
