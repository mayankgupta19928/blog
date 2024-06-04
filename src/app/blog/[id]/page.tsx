// 'use client'

// import { useState } from 'react';
import Link from 'next/link';
import { blogApi } from '../common';
interface blogDetail {
    id: number;
    title: string;
    author:string;
    content:string;
    date_published:string


  }
  const Page = async({ params }:any) => {
    // const [blogDetail, setBlogDetail] = useState<blogDetail>();
    const id = params.id;

    const res = await fetch(`https://dummyapi.online/api/blogposts/${id}`);
    const result = await res.json();
    // let userInfo = 
 
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
               
    //             // setBlogDetail(result);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //          fetchData();
    //  }, []); 

    return (
        <div className='blogData'>
            <Link href= {'/blog'}>Back</Link>
            <div className='content'>
                <h1>{result?.title}</h1>
                <p>{result?.content}</p>
                <span>{result?.date_published}</span>
            </div>
            <div className='authorDetail'>
                {result?.author}
            </div>
        </div>
    );
}

export default Page;


export const generateStaticParams = async() =>{
    let data =   blogApi('https://dummyapi.online/api/blogposts')
    const users = await data;
    return users.map((user:any)=>{
       return {id:user?.id.toString()}
    })     
} 