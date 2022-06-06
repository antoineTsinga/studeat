import PaginationControlled from "./Pagination";
import SearchRestaurant from "./SearchRestaurant";

export default function FilterMenu() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-end">
        <SearchRestaurant />
      </div>
      <div className="w-100 mb-5"></div>
      <div className="col d-flex" style={{ justifyContent: "space-between" }}>
        <div>Filtre</div>
        <PaginationControlled />
      </div>
    </div>
  );
}
