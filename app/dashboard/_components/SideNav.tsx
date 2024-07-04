"use client";
import { Coffee, FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import UsageTrack from "./UsageTrack";
import LoadingBar from "react-top-loading-bar";

function SideNav() {
  const loadingBarRef = useRef(null as any);
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  const MenuClass =
    "flex gap-2 mb-2 p-3 items-center rounded-lg cursor-pointer";
  const MenuHover = "hover:bg-primary hover:text-white";

  const pathName = usePathname();

  const handleLinkClick = () => {
    loadingBarRef?.current.continuousStart();
  };

  return (
    <div className="h-screen p-5 shadow-sm border bg-white relative">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" width={100} height={50} />
      </div>
      <hr />

      <div className="mt-5">
        {MenuList.map((menu, index) => (
          <Link
            href={menu.path}
            key={index}
            className={`${MenuClass} ${MenuHover} ${
              pathName == menu.path && "bg-primary text-white"
            }`}
            onClick={() => {
              handleLinkClick()
              loadingBarRef?.current.complete()

            }}
          >
            <menu.icon size={24} />
            <h2 className="font-semibold">{menu.name}</h2>
          </Link>
        ))}
        <div>
          <Link
            href="https:buymeacoffee.com/rudravashishtha"
            className={`${MenuClass} text-[#d0312f]`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Coffee size={24} />
            <h2>Buy Me A Coffee</h2>
          </Link>
        </div>
      </div>

      <div className="absolute left-0 w-full">
        <UsageTrack />
      </div>  

      <LoadingBar color="#f11946" ref={loadingBarRef} />
    </div>
  );
}

export default SideNav;
