import React, { useState } from 'react';
import './Cs.css';

const Cs = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="new-comment">Add a comment:</label>
        <textarea
          id="new-comment"
          value={newComment}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Cs;