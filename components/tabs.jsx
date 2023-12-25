"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavTabs = () => {
  const pathname = usePathname();

  const tabs = [
    {
      title: "Overview",
      href: "/",
    },
    {
      title: "Leaders",
      href: "/leaders",
    },
    {
      title: "Voters",
      href: "/voters",
    },
    {
      title: "Meetings",
      href: "/meetings",
    },
  ];

  return (
    <Tabs value={pathname} className="space-y-4 hidden sm:block">
      <TabsList className="gap-4">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.href} value={tab.href}>
            <Link href={tab.href}>{tab.title}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default NavTabs;
