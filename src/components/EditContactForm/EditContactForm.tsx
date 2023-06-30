import React from 'react';
import {IContactData} from "../../types/types";

interface IProps {
    contact: IContactData;
    onSubmit: (event: React.FormEvent) => void;
    fieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const EditContactForm: React.FC <IProps> = ({contact, onSubmit, fieldChange}) => {
    return (
        <>
            <h4>Edit Contact</h4>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="text" id="email" className="form-control" name="email" value={contact?.email} onChange={fieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="text" id="phone" className="form-control" name="phone" value={contact?.phone} onChange={fieldChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" id="address" className="form-control" name="address" value={contact?.address} onChange={fieldChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-5">Save</button>
            </form>
        </>
    );
};

export default EditContactForm;