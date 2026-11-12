import CatalogPage from "@/components/CatalogPage";
import { heroes } from "@/lib/data";

export default function HomePage() {
  return <CatalogPage hero={heroes.series} />;
}
