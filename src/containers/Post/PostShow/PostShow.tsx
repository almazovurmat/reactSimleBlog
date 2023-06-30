import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../../AxiosApi";
import {TPostApiWithoutId} from "../../../types/types";
import Loader from "../../../components/Loader/Loader";

const PostShow = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [postInfo, setPostInfo] = useState<TPostApiWithoutId|null>(null);
    const fetchData = useCallback(async (postId: string) => {
        try {
            setLoading(true);
            const postResponse = await axiosApi.get<TPostApiWithoutId>(`/posts/${postId}.json`);
            setPostInfo(postResponse.data);
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
    return (
        <>
            {loading && <Loader />}
            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h2 className="section-heading">{postInfo?.title}</h2>
                            <p>{postInfo?.text}</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default PostShow;