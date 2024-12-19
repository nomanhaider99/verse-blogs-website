type LinkItem = {
    link: string;
    route?: string;
    dropdown?: LinkItem[]; 
};

export const linksData: LinkItem[] = [
    {
        link: 'Home',
        route: '/',
    },
    {
        link: 'About',
        route: '/about',
    },
    {
        link: 'Blogs',
        dropdown: [
            { link: 'All Blogs', route: '/blogs' },
            { link: 'Trending Blogs', route: '/blogs/trending' },
            {
                link: 'Categories',
                dropdown: [
                    { link: 'Technology', route: '/blogs/categories/technology' },
                    { link: 'Lifestyle', route: '/blogs/categories/lifestyle' },
                    { link: 'Education', route: '/blogs/categories/education' },
                    { link: 'Entertainment', route: '/blogs/categories/entertainment' },
                ],
            },
        ],
    },
    {
        link: 'Write',
        dropdown: [
            { link: 'New Blog', route: '/write/new' },
            { link: 'My Drafts', route: '/write/drafts' },
            { link: 'Guidelines', route: '/write/guidelines' },
        ],
    },
    {
        link: 'Community',
        dropdown: [
            { link: 'Discussions', route: '/community/discussions' },
            { link: 'User Groups', route: '/community/groups' },
            { link: 'Events', route: '/community/events' },
        ],
    },
];

export const authenticatedLinksData: LinkItem[] = [
    {
        link: 'Blogs',
        dropdown: [
            {
                link: 'My Blogs',
                route: '/my-blogs',
            },
            {
                link: 'All Blogs',
                route: '/blogs',
            },
        ],
    },
    {
        link: 'Write',
        route: '/write',
    },
];
