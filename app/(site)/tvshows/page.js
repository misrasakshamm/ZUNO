import CatalogPage from "@/components/CatalogPage";
import { heroes } from "@/lib/data";

export const metadata = { title: "Tv shows – ZUNO" };

export default function TvShowsPage() {
  return <CatalogPage hero={heroes.tvshow} />;
}
