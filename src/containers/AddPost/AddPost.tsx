import React, {useState} from 'react';
import PostForm from '../../components/Post/PostForm/PostForm';
import {TPostApiWithoutId} from "../../types/types";
import axiosApi from "../../AxiosApi";
import Loader from "../../components/Loader/Loader";

const AddPost = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const createNewPost = async (newPost: TPostApiWithoutId) => {
        try {
            setLoading(true);
            await axiosApi.post('/posts.json', newPost);
            console.log('Post created successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <h4>Add new post</h4>
            <PostForm onSubmit={createNewPost} />
        </>
    );
};

export default AddPost;
