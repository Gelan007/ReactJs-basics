import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

const PostIdPage = () => {
    const params = useParams();

    useEffect(() => {

    }, []);
    return (
        <h1>
           Вы открыли страницу поста с ID = {params.id}
        </h1>
    );
};

export default PostIdPage;