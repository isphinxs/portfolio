import React from 'react';
import { BlogLink, BlogContainer, BlogH1, BlogWrapper, BlogCard, BlogIcon, BlogH2, BlogP } from './BlogElements';
import { Blogs } from './Data';

const Blog = () => {
    return(
        <BlogContainer id="blog">
            <BlogH1>Blog Posts</BlogH1>
            <BlogWrapper>
                {Blogs.map( ({ id, img, title, tagline, url }) => {
                    return(
                        <BlogLink key={id} href={url}>
                            <BlogCard>
                                <BlogIcon src={img} />
                                <BlogH2>{title}</BlogH2>
                                <BlogP>{tagline}</BlogP>
                            </BlogCard>
                        </BlogLink>
                    );
                })}
            </BlogWrapper>
        </BlogContainer>
    )
}

export default Blog;