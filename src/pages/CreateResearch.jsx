import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import "./CreateResearch.css";

function CreateResearch() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    abstract: "",
    projects: 0,
    papers: 0,
  });

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {

    e.preventDefault();

    try {

      setLoading(true);
      setMessage("");

      let imageUrl = "";

      // Upload Image
      if (image) {

        const fileName = Date.now() + "-" + image.name;

        const { error: uploadError } = await supabase.storage
          .from("research-images")
          .upload(fileName, image);

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage
          .from("research-images")
          .getPublicUrl(fileName);

        imageUrl = data.publicUrl;

      }

      // Insert Research
      const { error } = await supabase
        .from("research_groups")
        .insert([
          {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            abstract: formData.abstract,
            members: 1,
            projects: Number(formData.projects),
            papers: Number(formData.papers),
            featured: false,
            image_url: imageUrl,
          },
        ]);

      if (error) {
        throw error;
      }

      setMessage("Research Group Created Successfully 🚀");

      setTimeout(() => {
        navigate("/research");
      }, 1500);

    } catch (error) {

      console.log(error);

      setMessage(error.message);

    } finally {

      setLoading(false);

    }

  }

  return (

    <section className="create-research">

      <h1>Create Research Group</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Research Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option>AI</option>
          <option>Physics</option>
          <option>Biology</option>
          <option>Mathematics</option>
          <option>Space</option>
          <option>Environment</option>
        </select>

        <textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <textarea
          name="abstract"
          placeholder="Research Abstract"
          value={formData.abstract}
          onChange={handleChange}
        />

        <input
          type="number"
          name="projects"
          placeholder="Projects"
          value={formData.projects}
          onChange={handleChange}
        />

        <input
          type="number"
          name="papers"
          placeholder="Papers"
          value={formData.papers}
          onChange={handleChange}
        />

        <label className="upload-label">
          Research Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button disabled={loading}>
          {loading ? "Creating..." : "Create Research"}
        </button>

      </form>

      {message && (
        <p className="create-message">
          {message}
        </p>
      )}

    </section>

  );

}

export default CreateResearch;