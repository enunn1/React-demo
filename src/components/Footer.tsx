"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
          <footer className="flex flex-col items-center justify-center gap-4 row-start-3">
                <Image
                  src="/ethan_nunn.jpg"
                  alt="Ethan Nunn"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <p className="text-sm text-gray-500">
                  © 2025 Ethan Nunn. All rights reserved.
                </p>
              </footer>
    )
}