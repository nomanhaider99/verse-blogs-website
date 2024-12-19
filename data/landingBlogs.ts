type BlogProps = {
    id: number | string;
    title: string;
    subtitle: string;
    postImage: string;
    author: {
        fullName: string;
        profileImage: string;
    };
    comments: {
        id: number;
        commenter: string;
        comment: string;
        postedOn: string;
    }[];
};

const landingBlogPosts = [
    {
        id: 1,
        title: "The Future of AI: What to Expect in 2030",
        subtitle: "Exploring the next wave of artificial intelligence advancements.",
        postImage: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            fullName: "Noman Haider",
            profileImage: "https://source.unsplash.com/100x100/?person,portrait",
        },
        comments: [
            {
                id: 1,
                commenter: "Ali Khan",
                comment: "This is an exciting time for AI. Can't wait to see what happens next!",
                postedOn: "2024-12-01",
            },
            {
                id: 2,
                commenter: "Sarah Ahmed",
                comment: "Great article! I found it very insightful.",
                postedOn: "2024-12-02",
            },
        ],
    },
    {
        id: 2,
        title: "Top 10 Travel Destinations for 2024",
        subtitle: "Your ultimate guide to exploring the world in the coming year.",
        postImage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            fullName: "Sophia Malik",
            profileImage: "https://source.unsplash.com/100x100/?woman,portrait",
        },
        comments: [
            {
                id: 1,
                commenter: "John Doe",
                comment: "Adding these to my bucket list!",
                postedOn: "2024-12-01",
            },
            {
                id: 2,
                commenter: "Emily Clark",
                comment: "Thanks for sharing this! Amazing recommendations.",
                postedOn: "2024-12-02",
            },
        ],
    },
    {
        id: 3,
        title: "Mastering React: Tips for Beginners",
        subtitle: "Learn how to build dynamic user interfaces with ease.",
        postImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: {
            fullName: "Ahmed Raza",
            profileImage: "https://source.unsplash.com/100x100/?man,developer",
        },
        comments: [
            {
                id: 1,
                commenter: "Zara Iqbal",
                comment: "This was so helpful. Thank you!",
                postedOn: "2024-12-01",
            },
        ],
    },
];

export default landingBlogPosts;
