import React, {useCallback, useEffect, useState} from 'react';
import {IContactData} from "../../types/types";
import axiosApi from "../../AxiosApi";
import Loader from "../../components/Loader/Loader";
import {Link} from "react-router-dom";

const Contact = () => {
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
            const contactResponse = await axiosApi.get(`/contact.json`);
            const contactData = Object.keys(contactResponse.data).map(key => {
                const contact = contactResponse.data[key];
                contact.id = key;
                return contact;
            });
            setContact(contactData[0]);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);
    return (
        <>
            {loading && <Loader />}
            <div className="row">
                <div className="col-md-4">
                    <h3>Email</h3>
                    <p><i className="fas fa-envelope"></i> {contact.email}</p>
                </div>
                <div className="col-md-4">
                    <h3>Phone</h3>
                    <p><i className="fas fa-phone"></i> {contact.phone}</p>
                </div>
                <div className="col-md-4">
                    <h3>Address</h3>
                    <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                </div>
            </div>
            <Link to={'/contact/edit/' + contact.id} className="btn btn-primary">Edit contacts</Link>
        </>
    );
};

export default Contact;