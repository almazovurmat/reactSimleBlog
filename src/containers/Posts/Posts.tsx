import React, {useCallback, useEffect, useState} from 'react';
import PostCard from "../../components/Post/PostCard/PostCard";
import axiosApi from "../../AxiosApi";
import {IPost, IPostApi} from "../../types/types";
import Loader from "../../components/Loader/Loader";

const Posts = () => {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const postResponse = await axiosApi.get<IPostApi>('/posts.json');
            const posts = Object.keys(postResponse.data).map(key => {
                const post = postResponse.data[key];
                post.id = key;
                return post;
            });

            setPosts(posts);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect( () => {
        void fetchData();
    }, [fetchData]);

    return (
        <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
                {loading && <Loader />}
                {
                    posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    );
};

export default Posts;