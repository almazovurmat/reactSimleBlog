import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {TPostApiWithoutId} from '../../../types/types';

interface IProps {
    post?: TPostApiWithoutId;
    onSubmit: (post: TPostApiWithoutId) => void;
}

const PostForm: React.FC<IProps> = ({ post, onSubmit }) => {
    const navigate = useNavigate();
    const [updatedPost, setUpdatedPost] = useState<TPostApiWithoutId>(post || {
        title: '',
        text: '',
        datetime: new Date(),
    });

    useEffect(() => {
        if (post) {
            setUpdatedPost(post);
        }
    }, [post])

    const submitData = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (post) {
                onSubmit(updatedPost);
            } else {
                onSubmit(updatedPost);
            }

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setUpdatedPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    return (
        <>
            <form id="contactForm" onSubmit={submitData}>
                <div className="form-floating">
                    <input
                        className="form-control"
                        id="title"
                        type="text"
                        placeholder="Enter title..."
                        name="title"
                        value={updatedPost.title}
                        onChange={inputChange}
                    />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="form-floating">
          <textarea
              className="form-control"
              id="text"
              placeholder="Enter your text here..."
              style={{ height: '12rem' }}
              name="text"
              value={updatedPost.text}
              onChange={inputChange}
          />
                    <label htmlFor="text">Text</label>
                </div>
                <br />

                <button className="btn btn-primary text-uppercase mb-5" id="submitButton" type="submit">
                    {post ? 'Update' : 'Create'}
                </button>
            </form>
        </>
    );
};

export default PostForm;
