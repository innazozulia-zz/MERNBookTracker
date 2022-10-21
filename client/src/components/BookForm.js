const BookForm = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [load, setLoad] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    /// here 6:00
    const book = { title, descr, load };
    const response = await fetch();
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <h4>Add a new book</h4>
      <label for="title">Title: </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <label for="description">Description: </label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></input>
      <label for="load">Page: </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      ></input>
    </form>
  );
};

export default BookForm;
