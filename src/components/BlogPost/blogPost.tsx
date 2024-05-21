'use client'
import { useState } from 'react';
import styles from './BlogPost.module.css';
import { useRouter } from 'next/navigation';

const BlogPost = (props:any) => {

  const [isReadMore, setIsReadMore] = useState(false);
  const router = useRouter()

  // Function to handle click event and navigate to detail page
  const handleClick = (blogId: any) => {
    // Navigate to the detail page using React Router
    router.push(`/blog/${blogId}`); // Replace '/detail' with your actual detail page route
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
    
    {props?.blogData?.map((blog:any)=>{
      let blogId = blog?.id;
      return(
         <article key={blog?.id} className={styles.blogPost}>
        <h2>{blog?.title}</h2>
        <p className={`${styles.excerpt} ${isReadMore ? styles.hide : ''}`}>
        {blog?.content}        </p>
        <div className={`${styles.fullContent} ${isReadMore ? styles.show : ''}`}>
        {blog?.content}
        </div>
        <a onClick={()=>handleClick(blogId)} className={styles.readMore}>
          {isReadMore ? 'Show Less' : 'Read More'}
        </a>
      </article>
        
       )

})}
    
    </>
    
    
  );
};

export default BlogPost;
