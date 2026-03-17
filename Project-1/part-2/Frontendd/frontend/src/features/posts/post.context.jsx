// STATE LAYER -> for managing all states
import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
    
    // creating states
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState(null);
    const [feed, setFeed] = useState([]);

    return(
        <PostContext.Provider value={ { loading, setLoading, post, setPost, feed, setFeed } }>
            { children }
        </PostContext.Provider>
    )

}