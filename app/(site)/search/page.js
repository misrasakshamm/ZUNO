import { Suspense } from "react";
import SearchView from "@/components/SearchView";

export const metadata = { title: "Search – ZUNO" };

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container page-pad">Loading...</div>}>
      <SearchView />
    </Suspense>
  );
}
