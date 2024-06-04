import React from 'react'
import { blogApi } from './common'
import BlogPost from '@/components/BlogPost/blogPost';

export default async function Blog() {
 let apiData = await blogApi('http://localhost:3000/api/db_blog');
    return (
<>
<BlogPost blogData={apiData}/>

 
</>  )
}
