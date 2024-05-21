import React from 'react'
import { blogApi } from './common'
import BlogPost from '@/components/BlogPost/blogPost';

export default async function Blog() {
 let apiData = await blogApi('https://dummyapi.online/api/blogposts');
   return (
<>
<BlogPost blogData={apiData}/>

 
</>  )
}
