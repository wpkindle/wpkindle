import ServicesTab from "@/components/shared/ServicesTab";
import EcommerceFeatures from "@/components/shared/product/ecommerce-features";
import ProductCarousel from "@/components/shared/product/product-carousel";
import ProductList from "@/components/shared/product/product-list";
import ProductPromotion from "@/components/shared/product/product-promotion";
import Trust_Profiles from "@/components/shared/TrustProfiles";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <>
      <ProductCarousel />
      <Trust_Profiles />
      <ServicesTab />
      <ProductList title="WP Assets" data={latestProducts} />
      <ProductPromotion />
      <EcommerceFeatures />
    </>
  );
}
