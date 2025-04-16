// app/dock-demo/page.tsx

"use client";

import { Dock } from "@/components/ui/dock-two";
import { Home, Search, Music, Heart, Settings, Plus, User } from "lucide-react";

export default function DockDemo() {
  const items = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: Music, label: "Music" },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 flex justify-center pointer-events-none z-50">
      <div className="pointer-events-auto">
        <Dock items={items} />
      </div>
    </div>
  );
}
