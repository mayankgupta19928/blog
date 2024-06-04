import mongoose from "mongoose";

  const blogModal = new mongoose.Schema({    
userId:Number,
id:Number,
title:String,
content:String,
completed:Boolean
})

export const BlogPostModal = mongoose.models.blogs || mongoose.model('blogs',blogModal)