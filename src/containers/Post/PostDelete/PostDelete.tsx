import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../../AxiosApi";
import Loader from "../../../components/Loader/Loader";
import {useNavigate, useParams} from "react-router-dom";

const PostDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const fetchData = useCallback(async (postId: string) => {
        try {
            setLoading(true);
            await axiosApi.delete(`/posts/${postId}.json`);
            navigate('/');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        if (id) {
            void fetchData(id);
        }
    }, [id, fetchData]);

    return (
        <>
            {loading && <Loader />}
        </>
    );
};

export default PostDelete;