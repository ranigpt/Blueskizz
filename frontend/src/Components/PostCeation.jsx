import React, { useState, useRef } from 'react';
import { FiImage } from 'react-icons/fi';

function PostCreation() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (

    <div className='w-[45] bg-inherit h-56 rounded-md'>
    <div className=" w-full lg:w-[38rem] max-w-full bg-blue-200 rounded-md shadow-lg p-6 h-auto flex flex-col space-y-4 m-2 mt-3">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleTextChange}
        placeholder="Create a post"
        className="w-full p-3 rounded-md bg-blue-200 border-none focus:outline-none  resize-none overflow-hidden"
        rows={1}
      />

      {image && (
        <div className="flex justify-center w-full">
          <img
            src={image}
            alt="Selected Preview"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      )}

      <label className="flex items-center cursor-pointer text-blue-600">
        <FiImage className="text-3xl mr-2 hover:text-blue-800 transition-all duration-200" />
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
        <span className="text-gray-500 font-semibold">Add Image</span>
      </label>

      <button className="w-full px-5 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 transition-all duration-300 focus:outline-none mb-1">
        Post
      </button>
    </div>
    </div>
  );
}

export default PostCreation;
