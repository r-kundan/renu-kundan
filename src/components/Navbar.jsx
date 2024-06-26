"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <div
      className={cn(
        "sticky top-10 inset-x-0 max-w-2xl mx-auto mb-24 w-full z-50 bg-glasscolor backdrop-blur-lg rounded-full"
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/education"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Education"
          ></MenuItem>
        </Link>
        <Link href={"/skills"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </Link>

        <Link href={"/projects"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
