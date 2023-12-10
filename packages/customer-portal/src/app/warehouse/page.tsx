import BookModal from "./components/BookModal";
import MapOfWarehouses from "./components/MapOfWarehouses";
import SearchAndFilter from "./components/SearchAndFilter";

function Page() {
  return (
    <main className="bg-white my-2 flex justify-center items-center flex-wrap-reverse">
      <MapOfWarehouses />
      <SearchAndFilter />
    </main>
  );
}

export default Page;
