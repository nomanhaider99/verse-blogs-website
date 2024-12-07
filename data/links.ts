export const linksData = [
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
        route: '/blogs'
    },
    {
        link: 'Write',
        dropdown: [
            { link: 'New Blog', route: '/write/new' },
            { link: 'My Drafts', route: '/write/drafts' },
            { link: 'Guidelines', route: '/write/guidelines' },
        ],
        route: '/write'
    },
    {
        link: 'Community',
        dropdown: [
            { link: 'Discussions', route: '/community/discussions' },
            { link: 'User Groups', route: '/community/groups' },
            { link: 'Events', route: '/community/events' },
        ],
        route: '/community'
    },
];
