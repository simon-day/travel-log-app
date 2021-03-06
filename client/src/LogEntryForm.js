import React from 'react';

const LogEntryForm = () => {
  return (
    <form className="entry-form">
      <label for="title">Title</label>
      <input name="title" type="text" required />
      <label for="comments">Comments</label>
      <textarea name="comments" rows={3} />
      <label for="description">Description</label>
      <textarea name="description" rows={3} />
      <label for="image">Image</label>
      <input name="image" type="text" />
      <label for="visitDate">Visit Date</label>
      <input name="visitDate" type="date" />
    </form>
  );
};

export default LogEntryForm;
