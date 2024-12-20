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
