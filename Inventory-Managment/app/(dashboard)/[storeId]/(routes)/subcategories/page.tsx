import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { SubcategoryColumn } from "./components/columns";
import { SubcategoriesClient } from "./components/client";

const SubcategoriesPage = async ({
  params,
}: {
  params: { storeId: string };
}) => {
  const categories = await prismadb.subcategory.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSubcategories: SubcategoryColumn[] = categories.map(
    (item: { id: any; name: any; createdAt: number | Date }) => ({
      id: item.id,
      name: item.name,
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SubcategoriesClient data={formattedSubcategories} />
      </div>
    </div>
  );
};

export default SubcategoriesPage;
