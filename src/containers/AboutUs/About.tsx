import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../AxiosApi";
import Loader from "../../components/Loader/Loader";
import {IAboutData} from "../../types/types";
import {Link} from "react-router-dom";

const About = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [about, setAbout] = useState<IAboutData>({
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
            const aboutResponse = await axiosApi.get(`/about.json`);
            const aboutUsData = Object.keys(aboutResponse.data).map(key => {
                const aboutUs = aboutResponse.data[key];
                aboutUs.id = key;
                return aboutUs;
            });
            setAbout(aboutUsData[0]);
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
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    {loading && <Loader />}
                    <p>{about.text}</p>
                    <p>{about.text2}</p>
                    <p>{about.text3}</p>
                    <p>{about.text4}</p>
                    <p>{about.text5}</p>
                </div>
            </div>
            <Link to={'/about-us/edit/' + about.id} className="btn btn-primary">Edit contacts</Link>
        </div>
    );
};

export default About;