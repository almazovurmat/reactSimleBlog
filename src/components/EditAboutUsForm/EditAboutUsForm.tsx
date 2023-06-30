import React from 'react';
import {IAboutData} from "../../types/types";

interface IProps {
    aboutUs: IAboutData;
    onSubmit: (event: React.FormEvent) => void;
    fieldChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const EditAboutUsForm: React.FC <IProps> = ({aboutUs, onSubmit, fieldChange}) => {
    return (
        <>
            <h4>Edit About us</h4>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Text:</label>
                    <textarea rows={5} id="text" className="form-control" name="text" value={aboutUs?.text} onChange={fieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text2" className="form-label">Text 2:</label>
                    <textarea rows={5} id="text2" className="form-control" name="text2" value={aboutUs?.text2} onChange={fieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text3" className="form-label">Text 3:</label>
                    <textarea rows={5} id="text3" className="form-control" name="text3" value={aboutUs?.text3} onChange={fieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text4" className="form-label">Text 4:</label>
                    <textarea rows={5} id="text4" className="form-control" name="text4" value={aboutUs?.text4} onChange={fieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="text5" className="form-label">Text 5:</label>
                    <textarea rows={5} id="text5" className="form-control" name="text5" value={aboutUs?.text5} onChange={fieldChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-5">Save</button>
            </form>
        </>
    );
};

export default EditAboutUsForm;