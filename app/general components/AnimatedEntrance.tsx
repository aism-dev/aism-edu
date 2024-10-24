"use client"
import { motion, useInView, Variants, MotionProps } from "framer-motion";
import { useRef, useCallback } from "react";

// Define props interface
interface AnimatedEntranceProps {
    children: React.ReactNode;
    /** Animation direction: 'up' | 'down' | 'left' | 'right' */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Duration of the animation in seconds */
    duration?: number;
    /** Delay before animation starts in seconds */
    delay?: number;
    /** Amount of movement in pixels */
    distance?: number;
    /** Viewport threshold (0-1) to trigger animation */
    threshold?: number;
    /** Whether to animate only once or every time */
    once?: boolean;
    /** Custom easing function */
    ease?: MotionProps["transition"];
    /** Custom variants to override defaults */
    customVariants?: Variants;
    /** Additional className */
    className?: string;
    /** Whether to use stagger children animations */
    stagger?: boolean;
    /** Stagger delay between children in seconds */
    staggerDelay?: number;
}

export const AnimatedEntrance: React.FC<AnimatedEntranceProps> = ({
    children,
    direction = 'up',
    duration = 0.5,
    delay = 0,
    distance = 30,
    threshold = 0.5,
    once = true,
    ease = "easeOut",
    customVariants,
    className = "",
    stagger = false,
    staggerDelay = 0.1,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, {
        amount: threshold,
        once,
    });

    // Generate directional offset
    const getOffset = useCallback(() => {
        switch (direction) {
            case 'down': return { y: -distance };
            case 'left': return { x: distance };
            case 'right': return { x: -distance };
            case 'up':
            default: return { y: distance };
        }
    }, [direction, distance]);

    // Default animation variants
    const defaultVariants: Variants = {
        hidden: {
            opacity: 0,
            ...getOffset(),
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease,
                when: "beforeChildren",
                staggerChildren: stagger ? staggerDelay : 0,
            },
        },
    };

    // Child animation variants for staggering
    const childVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration * 0.8,
                ease,
            },
        },
    };

    return (
        <motion.div
            ref={containerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={customVariants || defaultVariants}
            className={className}
        >
            {stagger ? (
                <motion.div variants={childVariants}>
                    {children}
                </motion.div>
            ) : (
                children
            )}
        </motion.div>
    );
};

// Export helper types
export type { AnimatedEntranceProps };

// Export preset configurations
export const presets = {
    fade: {
        distance: 0,
        duration: 0.7,
    },
    slideUp: {
        direction: 'up' as const,
        duration: 0.5,
        distance: 50,
    },
    slideIn: {
        direction: 'right' as const,
        duration: 0.6,
        distance: 100,
    },
    bounce: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
    },
    staggered: {
        stagger: true,
        staggerDelay: 0.1,
        duration: 0.4,
    },
} as const;