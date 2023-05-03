export interface ArticleV4 {
    id: number;
    title: string;
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
    launches: Launch[];
    events: Event[];
}

export interface ArticleV3 {
    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: Date;
    updatedAt: Date;
    featured: boolean;
    launches: Launch[];
    events: Event[];
}

export interface Launch {
    launch_id: string;
    provider: string;
}

export interface Event {}

export interface Response {
    count: number;
    next: string | null;
    previous: string | null;
    results: ArticleV3[];
}
