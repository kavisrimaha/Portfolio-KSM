"use client";

import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps extends MotionProps {
    children: ReactNode;
    className?: string;
    noHover?: boolean;
}

export function BentoCard({ children, className, noHover = false, ...props }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
            }}
            whileHover={!noHover ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" } : undefined}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-colors",
                "flex flex-col",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
