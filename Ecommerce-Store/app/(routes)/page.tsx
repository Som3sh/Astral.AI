import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const products1 = await getProducts({ isTrending: true });

  const billboard = await getBillboard(
    `${process.env.NEXT_PUBLIC_HOMEPAGE_BILLBOARD_ID}`
  );

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Best Sellers" items={products} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Better Sellers" items={products1} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
