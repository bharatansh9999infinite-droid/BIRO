import { useState } from "react";
import { supabase } from "../supabaseClient";
import "./CreateResearch.css";

function CreateResearch() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {

  e.preventDefault();

  const { error } = await supabase
    .from("research_groups")
    .insert([
      {
        title: title,
        description: description,
        category: category,
        abstract: description,
        members: 1,
        projects: 0,
        papers: 0,
        featured: false,
      },
    ]);

  if (error) {
    alert(error.message);
    console.log(error);
    return;
  }

  alert("Research Published Successfully!");

  setTitle("");
  setAuthor("");
  setCategory("");
  setDescription("");
  setFile(null);

  e.target.reset();
};
  

  return (

    <section className="create-research-page">

      <div className="create-research-card">

        <h1>Create Research</h1>

        <p>
          Publish your innovation and research to BIRO.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Research Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            required
          />

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            required
          >

            <option value="">Select Category</option>

            <option>Artificial Intelligence</option>
            <option>Medical Science</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Engineering</option>
            <option>Mathematics</option>
            <option>Space Science</option>
            <option>Robotics</option>
            <option>Cyber Security</option>
            <option>Other</option>

          </select>

          <textarea
            placeholder="Research Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
          />

          <label className="upload-label">

            Upload Research File

          </label>

          <input
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
            onChange={(e)=>setFile(e.target.files[0])}
          />

          {file && (

            <p className="file-name">

              Selected File :

              <strong> {file.name}</strong>

            </p>

          )}

          <button type="submit">

            Publish Research

          </button>

        </form>

      </div>

    </section>

  );

}

export default CreateResearch;