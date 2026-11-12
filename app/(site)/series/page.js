import CatalogPage from "@/components/CatalogPage";
import { heroes } from "@/lib/data";

export const metadata = { title: "Web series – ZUNO" };

export default function SeriesPage() {
  return <CatalogPage hero={heroes.series} />;
}
