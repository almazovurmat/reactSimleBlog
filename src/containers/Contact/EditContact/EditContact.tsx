import React, {useCallback, useEffect, useState} from 'react';
import Loader from "../../../components/Loader/Loader";
import {IContactData} from "../../../types/types";
import axiosApi from "../../../AxiosApi";
import {useParams} from "react-router-dom";
import EditContactForm from "../../../components/EditContactForm/EditContactForm";

const EditContact = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState<boolean>(false);

    const [contact, setContact] = useState<IContactData>({
        id: '',
        phone: '',
        email: '',
        address: '',
    });

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const contactResponse = await axiosApi.get(`/contact/${id}.json`);
            setContact(contactResponse.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const fieldChange = (event: React.ChangeEvent <HTMLInputElement>) => {
        const { name, value } = event.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        console.log(contact);
        try {
            setLoading(true);
            await axiosApi.put(`/contact/${id}.json`, contact);
            console.log('Contact updated successfully');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loader />}
            <EditContactForm contact={contact} onSubmit={onSubmit} fieldChange={fieldChange} />
        </>
    );
};

export default EditContact;