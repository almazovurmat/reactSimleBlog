import React from 'react';
import {IPost} from "../../../types/types";
import {Link} from "react-router-dom";

interface IProps {
    post: IPost;
}
const PostCard: React.FC <IProps> = ({post}) => {
    const getPrettyDateFormat = (datetime: string):string => {
        const date = new Date(datetime);

        const day = date.getDate();
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = monthNames[monthIndex];

        return`${day} ${monthName} ${year}`;
    };


    return (
        <>
            <div className="post-preview">
                <Link to={'/post/show/' + post.id}>
                    <h2 className="post-title">{post.title}</h2>
                </Link>
                <p className="post-meta">
                    Posted by <b> Admin </b>
                    {getPrettyDateFormat(post.datetime.toString())}
                </p>
                <div className="footer">
                    <Link className="btn btn-primary" to={'/post/edit/' + post.id}>Edit</Link>
                    <Link className="btn btn-danger mx-3" to={"/post/delete/" + post.id}>Delete</Link>
                </div>
            </div>
            <hr className="my-4"/>
        </>
    );
};

export default PostCard;