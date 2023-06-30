import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../../AxiosApi";
import {IAboutData} from "../../../types/types";
import Loader from "../../../components/Loader/Loader";
import EditAboutUsForm from "../../../components/EditAboutUsForm/EditAboutUsForm";

const EditAboutUs = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState<boolean>(false);

    const [aboutUs, setAboutUs] = useState<IAboutData>({
        id: '',
        text: '',
        text2: '',
        text3: '',
        text4: '',
        text5: '',
    });

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const contactResponse = await axiosApi.get(`/about/${id}.json`);
            setAboutUs(contactResponse.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const fieldChange = (event: React.ChangeEvent <HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setAboutUs((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            setLoading(true);
            await axiosApi.put(`/about/${id}.json`, aboutUs);
            console.log('About us updated successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <EditAboutUsForm aboutUs={aboutUs} onSubmit={onSubmit} fieldChange={fieldChange} />
        </>
    );
};

export default EditAboutUs;