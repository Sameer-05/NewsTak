import React from 'react';
import { Link } from 'react-router-dom';

function NewsItem({ title, description, imageUrl, newsUrl, author, date, source }) {
  return (
    <div className='container my-3 mx-3'>
      <div className="card" >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }} >
          <span className=" badge rounded-pill bg-danger" >{source}</span>
        </div>
        <img src={imageUrl ? imageUrl : "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=2048x2048&w=is&k=20&c=Xa_wH_pZFMWNX8EPtufv9KSvS1OzUPus7C0Br2ZIMDg="} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><small className="text-muted">By author {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <p className="card-text">{description}...</p>
          <Link to={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more about this</Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
