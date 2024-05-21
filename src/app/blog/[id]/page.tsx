'use client'

import { useState,  useEffect } from 'react';
import Link from 'next/link';
interface blogDetail {
    id: number;
    title: string;
    author:string;
    content:string;
    date_published:string


  }const Page = ({ params }:any) => {
    const [blogDetail, setBlogDetail] = useState<blogDetail>();
    const id = params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyapi.online/api/blogposts/${id}`);
                const result = await res.json();
                setBlogDetail(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
             fetchData();
     }, []); 

    return (
        <div className='blogData'>
            <Link href= {'/blog'}>Back</Link>
            <div className='content'>
                <h1>{blogDetail?.title}</h1>
                <p>{blogDetail?.content}</p>
                <span>{blogDetail?.date_published}</span>
            </div>
            <div className='authorDetail'>
                {blogDetail?.author}
            </div>
        </div>
    );
}

export default Page;