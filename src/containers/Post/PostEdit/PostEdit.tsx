import React, { useCallback, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axiosApi from '../../../AxiosApi';
import PostForm from '../../../components/Post/PostForm/PostForm';
import Loader from "../../../components/Loader/Loader";
import {TPostApiWithoutId} from '../../../types/types';

const PostEdit = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [post, setPost] = useState<TPostApiWithoutId>({
        title: '',
        text: '',
        datetime: new Date(),
    });

    const fetchData = useCallback(async (postId: string) => {
        try {
            setLoading(true);
            const postResponse = await axiosApi.get<TPostApiWithoutId>(`/posts/${postId}.json`);
            setPost(postResponse.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (id) {
            void fetchData(id);
        }
    }, [id, fetchData]);

    const onSubmit = async (updatedPost: TPostApiWithoutId) => {
        try {
            setLoading(true);
            await axiosApi.put(`/posts/${id}.json`, updatedPost);
            console.log('Post updated successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <h4>Edit post</h4>
            <PostForm post={post} onSubmit={onSubmit} />
        </>
    );
};

export default PostEdit;
