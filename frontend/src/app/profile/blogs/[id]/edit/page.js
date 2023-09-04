"use client";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Edit({ params }) {
  const router = useRouter();
  const [blog, setBlog] = useState({});
  const [updateData, setUpdateData] = useState({
    blog_title: "",
    blog_post: "",
    blog_author: "",
    blog_image: null,
  });
  const [selected, setSelected] = useState("");

  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
  const editorRef = useRef(null);

  const url = `http://127.0.0.1:8000/api/blogs/${params.id}`;
  let imageUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlog(data);
      });
  }, []);

  useEffect(() => {
    setUpdateData({ ...blog });
  }, [blog]);
  console.log(updateData);

  useEffect(() => {
    setSelected(`${imageUrl}${updateData.blog_image}`);
  }, [updateData]);

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelected(fileUrl);
      console.log(fileUrl);
    }
    updateData.blog_image = file;
    console.log(updateData);
  }

  function handleUpdate(e) {
    e.preventDefault();

    const newFormData = new FormData();
    newFormData.append("blog_title", updateData.blog_title);
    newFormData.append("blog_post", updateData.blog_post);
    newFormData.append("blog_author", updateData.blog_author);
    newFormData.append("blog_image", updateData.blog_image);
    

    axios.put(url, newFormData).then((response) => {
      console.log(response);
      if (response.status === 200) {
         router.push(`/blogs/${params.id}`)
      }
    });
  }
  return (
    <div>
      <Nav />
      <div className=" my-[5em] mt-[15vh]  ">
        <div className="bg-[#0775c6] mb-[2em]">
          <div className="w-[50vw] m-7 bg-white rounded-md  text-center   mx-auto flex flex-col  items-center  ">
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

            <img src={selected} alt="posts" className=" w-[20%] h-[20vh]  " />
            <label>Change Image</label>
            <input
              onChange={
                (e) => handleImage(e)
                // setUpdateData({ ...updateData, blog_image: e.target.files[0] })
              }
              type="file"
              name="blog_image"
              className="w-[50%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5rounded-md"
              placeholder
            />
            <Editor
            className="w-[50%] outline-none border-2 border-[#0775c6]  py-4 px-2 my-5 rounded-md"

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
            <div className="flex items-center justify-center w-[40vw] gap-3">
            <button
              onClick={(e) => handleUpdate(e)}
              className="mx-auto w-[15vw] text-white bg-[#0775c6] py-4 px-2 my-5 rounded-md"
            >
              SaveChanges
            </button>
           <Link href={`/profile/blogs/${params.id}`}> <button
              
              className="mx-auto w-[15vw] text-white bg-[#0775c6] py-4 px-2 my-5 rounded-md"
            >
              DiscardChanges
            </button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Edit;
