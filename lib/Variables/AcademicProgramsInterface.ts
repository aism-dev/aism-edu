export interface MainComponentProps {
    mainImage: {
        src: string;
        alt: string;
        height: number;
        width: number;
    };
    title: string;
    features: {
        description: string;
    }[];
    description: string;
    applyLink: {
        href: string;
        label: string;
    };
    applicationInfo: {
        label: string;
        date: string;
    }[];
    video?: {
        thumbnailSrc: string;
        videoSrc: string;
    };
}

export interface TopProps {
    breadcrumb: {
        label: string;
        href?: string;
    }[];
    title?: string;
}