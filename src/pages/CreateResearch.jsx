import "./CreateResearch.css";
import { useState } from "react";
import "./CreateResearch.css";

function CreateResearch() {

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Research Submitted Successfully!");

    console.log({
      title,
      category,
      description,
      author,
    });

    setTitle("");
    setCategory("");
    setDescription("");
    setAuthor("");
  };

  return (

    <section className="create-research-page">

      <div className="create-research-card">

        <h1>Create Research</h1>

        <p>
          Publish your innovative research to the BIRO platform.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Research Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Research Category</option>
            <option>Artificial Intelligence</option>
            <option>Medical Science</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Engineering</option>
            <option>Mathematics</option>
            <option>Space Science</option>
            <option>Robotics</option>
            <option>Other</option>
          </select>

          <textarea
            placeholder="Write your research description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit">
            Publish Research
          </button>

        </form>

      </div>

    </section>

  );

}

export default CreateResearch;