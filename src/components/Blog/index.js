import React from 'react';
// import Icon1 from '../../images/undraw_contact.svg';
// import Icon2 from '../../images/undraw_contact.svg';
// import Icon3 from '../../images/undraw_contact.svg';
import { BlogContainer, BlogH1, BlogWrapper, BlogCard, BlogIcon, BlogH2, BlogP } from './BlogElements';
import { Blogs } from './Data';

const Blog = () => {
    return(
        <BlogContainer id="blog">
            <BlogH1>Blog Posts</BlogH1>
            <BlogWrapper>
                {Blogs.map( ({ img, title, tagline, url }) => {
                    return(
                        <BlogCard>
                            <BlogIcon src={img} />
                            <BlogH2>{title}</BlogH2>
                            <BlogP>{tagline}</BlogP>
                        </BlogCard>
                    );
                })}
            </BlogWrapper>
        </BlogContainer>
    )
}

export default Blog;