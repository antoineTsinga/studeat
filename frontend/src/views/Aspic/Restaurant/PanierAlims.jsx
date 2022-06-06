import PanierAlim from "./PanierAlim";

export default function PanierAlims({ panierAlims }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {panierAlims?.map((panierAlim) => (
        <PanierAlim
          key={panierAlim}
          id={panierAlim.split("/")[panierAlim.split("/").length - 1]}
        />
      ))}
    </div>
  );
}
