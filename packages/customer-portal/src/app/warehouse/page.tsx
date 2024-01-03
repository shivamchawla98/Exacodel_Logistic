"use client";

import { useState } from "react";
import LoginModal from "../warehouse-booking/components/LoginModal";
import BookModal from "./components/BookModal";
import MapOfWarehouses from "./components/MapOfWarehouses";
import SearchAndFilter from "./components/SearchAndFilter";
import { useSelector, useDispatch } from "react-redux";

function Page() {
  const { isLogedIn } = useSelector((state: any) => state.form);
  const [loginClose, setLoginClose] = useState(false);
  return (
    <>
      {!isLogedIn && !loginClose && (
        <LoginModal setLoginClose={setLoginClose} />
      )}
      <main className="bg-white my-2 flex justify-center items-center flex-wrap-reverse">
        <MapOfWarehouses />
        <SearchAndFilter setLoginClose={() => setLoginClose} />
      </main>
    </>
  );
}

export default Page;
