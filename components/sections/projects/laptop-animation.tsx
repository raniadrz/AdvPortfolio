"use client";

import dynamic from 'next/dynamic';
import animation from "@/public/lottie/laptop.json";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LaptopAnimation({ className }: { className?: string }) {
  return <Lottie className={className} animationData={animation} loop={true} />;
}