import React from 'react'

export const blogApi = async(url:string) => {
  let response =await fetch(url);
  return await response.json();
}
