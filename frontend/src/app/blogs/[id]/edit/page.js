"use client"
import { useEffect, useRef, useState } from "react"
import { Editor } from "@tinymce/tinymce-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function Edit({params}){
const[blog,setBlog]=useState({})
const[updateData,setUpdateData]=useState({})

const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
  const editorRef = useRef(null);

const url=`http://127.0.0.1:8000/api/blogs/${params.id}`

useEffect(()=>{
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setBlog(data);
    });
},[])

useEffect(()=>{
    setUpdateData({...blog})
},[blog])
console.log(updateData);


function handleUpdate(e){
e.preventDefault()
}
    return(
        <div>


        <Nav />
        <div className=" my-[5em]   ">
          <div className="bg-[#0775c6] mb-[2em]">
            
            <div className="w-[50vw] my-7 bg-white rounded-md  text-center py-5  mx-auto flex flex-col  items-center  ">
              
              <input
                onChange={(e) =>
                  setUpdateData({ ...updateData, blog_title: e.target.value })
                }
                type="text"
                name="blog_title"
                className="w-[50%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5 rounded-md"
                placeholder="Blog title"
                value={updateData.blog_title}
              />
             
              <input
                onChange={(e) =>
                  setUpdateData({ ...updateData, blog_image: e.target.files[0] })
                }
                type="file"
                name="blog_image"
                className="w-[50%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5rounded-md"
                placeholder
              />
              <Editor
                onEditorChange={(e) =>
                  setUpdateData({ ...updateData, blog_post: log() })
                }
                apiKey="a3o814fmqjdlal6vqzxcdhnxzbugfip27abxcov8amup9ouj"
                onInit={(evt, editor) => (editorRef.current = editor)}
                value={updateData.blog_post}
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
             
              <input
                onChange={(e) =>
                  setUpdateData({ ...updateData, blog_author: e.target.value })
                }
                type="text "
                name="blog_author"
                className="w-[50%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5 "
                placeholder="Blog author"
                value={updateData.blog_author}
              />
              <button
                onClick={(e) => handleUpdate(e)}
                className="mx-auto w-[50%] text-white bg-[#0775c6] py-4 px-2 my-5 rounded-md"
              >
                submit
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}
export default Edit