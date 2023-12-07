import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('http://localhost:8000/wp-json/wp/v2/carousel?_embed');
    const data = await res.json();

    const images = data.map((
        image: {
            id: number;
            _embedded: {
                'wp:featuredmedia': {
                    0: {
                        source_url: string;
                    };
                };
            };
        }) => {
            return `${image._embedded['wp:featuredmedia'][0].source_url}`
        });

    return { images };
}