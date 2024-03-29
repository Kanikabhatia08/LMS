import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchBlogs } from '../redux/slices/BlogSlice';

function Blogs() {

    // const dispatch = useDispatch()
    const state = useSelector((state) => state);
    console.log(state, "bloggggggggg")
    
    return (
        <div>
            {/* {
                blog.isLoading ? 
                    (<><b>Loading</b></>)
                    :
                    (<>{blog?.data?.map((item) =>{
                        return <div>{item.title}</div>
                    })}</>)
                } */}

            {/* <button onClick={(e) => dispatch(fetchBlogs())}>Click</button>
            <br/>
            {state?.blog?.isLoading && <><b>Loading...</b></>}
            {state?.blog?.data?.map((i) => { 
                return (
                    <li>{i.title}</li>
                )}
            )} */}
    </div>
    );
}


export default Blogs;