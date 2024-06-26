'use client';
import React, { useState } from "react";
import Link from 'next/link'; // Import Link component
import { FaHome } from 'react-icons/fa'; // Import home icon from react-icons
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Poppins } from 'next/font/google';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-3 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <div className="flex items-center space-x-4">
          {/* Home Icon */}
          <Link href="/">
            <FaHome className="text-black dark:text-white text-2xl" />
          </Link>
          {/* Menu Items */}
          <div className="flex items-center space-x-4">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/layout">My Projects</HoveredLink>
                <HoveredLink href="/seo">Achievements</HoveredLink>
                <HoveredLink href="/gitlayout">My Github</HoveredLink>
                <HoveredLink href="/branding">Blog</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Live Projects">
              <div className="text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="ITYUKTA 2K24"
                  description="ITYUKTA 2K24 A Two Day National Level Technical Symposium - Official Website"
                  href="https://ityukta2k24.jntugv.in"
                  src="/assets/img/festlogo.png"
                />
                <ProductItem
                  title="Resucraft"
                  description="ResuCraft is an online Resume Builder Platform which uses cutting edge templates for your Resumes."
                  href="https://resucraft.vercel.app"
                  src="/assets/img/resu.png"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="https://www.linkedin.com/in/jaya-sai-srikar-b315981b6/">Linkedin</HoveredLink>
                <HoveredLink href="http://github.com/jayasaisrikar/">Github</HoveredLink>
                <HoveredLink href="mailto:bjayasaisrikar2004@gmail.com">Email</HoveredLink>
                <HoveredLink href="/contactlayout">Contact Form</HoveredLink>
              </div>
            </MenuItem>

            <Link href="https://drive.google.com/file/d/1tdwoIsBnG65coWC5780iQlrRu5ttDPBC/view?usp=sharing">
            <h2 className="text-black">Resume</h2>
          </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
