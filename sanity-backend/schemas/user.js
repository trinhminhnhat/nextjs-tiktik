export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'username',
            title: 'User Name',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
