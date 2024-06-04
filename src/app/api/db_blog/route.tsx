import { connectString } from '@/lib/database/db_connection';
import { BlogPostModal } from '@/lib/database/modals/blog';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';


export const GET = async() =>{
    await mongoose.connect(connectString);
    let result = await BlogPostModal.find()
    return NextResponse.json({result:result,success:true})
}

export const POST = async(req:any) =>{
    const payload = await req.json()
    let BlogPostModalData =new BlogPostModal(payload)

     await mongoose.connect(connectString);
    let result = await BlogPostModalData.save()
    return NextResponse.json({result:result,success:true})
}