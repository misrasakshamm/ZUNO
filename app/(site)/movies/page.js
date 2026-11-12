import CatalogPage from "@/components/CatalogPage";
import { heroes } from "@/lib/data";

export const metadata = { title: "All movies – ZUNO" };

export default function MoviesPage() {
  return <CatalogPage hero={heroes.movie} />;
}
