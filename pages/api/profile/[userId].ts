import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '../../../utils/client';
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from '../../../utils/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { userId }: any = req.query;

        const query = singleUserQuery(userId);
        const userVideosQuery = userCreatedPostsQuery(userId);
        const userLikedVideosQuery = userLikedPostsQuery(userId);

        const user = await client.fetch(query);
        const userVideos = await client.fetch(userVideosQuery);
        const userLikedVideos = await client.fetch(userLikedVideosQuery);

        const data = { user: user[0], userVideos, userLikedVideos };

        res.status(200).json(data);
    }
}
