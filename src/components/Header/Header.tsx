import React from 'react';

interface IProps {
    title: string;
    image: string;
}
const Header: React.FC <IProps> = ({title, image}) => {
    const styles = {
        color: 'red',
        fontSize: '20px',
        backgroundImage: `url(${image})`,
    };
    return (
        <header className="masthead" style={styles}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;