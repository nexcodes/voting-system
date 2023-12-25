import { buttonVariants } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ListItems } from "../../_components/list-items";
import { getLeaders } from "@/actions/get-leaders";

export default async function Leaders() {
  const leaders = await getLeaders({
    name: true,
    email: true,
  });
  return (
    <>
      <div className="flex items-center justify-end">
        <Link href="/add-leader" className={buttonVariants()}>
          Add leader
          <PlusCircle size={20} className="ml-2" />
        </Link>
      </div>
      <Card className="lg:w-1/2">
        <CardHeader>
          <CardTitle>Leaders</CardTitle>
          <CardDescription>
            A total of {leaders.length} leaders are registered
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ListItems items={leaders} />
        </CardContent>
      </Card>
    </>
  );
}
