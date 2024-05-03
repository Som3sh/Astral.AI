"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiAlert } from "@/components/ui/api-alert";

import { columns, SubcategoryColumn } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface SubcategoriesClientProps {
    data: SubcategoryColumn[];
}

export const SubcategoriesClient: React.FC<SubcategoriesClientProps> = ({
    data
}) => {
    const params = useParams();
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Subcategories (${data.length})`} description="Manage subcategories for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/subcategories/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API Calls for Subcategories" />
            <Separator />
            <ApiList entityName="subcategories" entityIdName="subcategoryId" />
        </>
    );
};
