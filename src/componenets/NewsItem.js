import React, { Component } from 'react'

export default class Nwesitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } = this.props;
    return (
      <div className='container my-3 mx-3'>
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }} >
          <span className=" badge rounded-pill bg-danger" >{source}
          </span>
</div>
          <img src={imageurl ? imageurl : "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=2048x2048&w=is&k=20&c=Xa_wH_pZFMWNX8EPtufv9KSvS1OzUPus7C0Br2ZIMDg="} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"><small className="text-muted">By author {!author ? "unkown" : author} on {new Date(date).toGMTString()} </small></p>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn  btn-sm btn-primary">Read more about this</a>
          </div>
        </div>
      </div>
    )
  }
}