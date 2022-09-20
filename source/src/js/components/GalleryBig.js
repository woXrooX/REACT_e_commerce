import React from 'react';

export default class BalleryBig extends React.Component{

  #imageMain = null;

  componentDidMount(){
    this.#imageMain = document.getElementById("mainImage");

  }

  render(){
    return(
      <gallery-big>
        <aside>{this.#sideImages()}</aside>
        <img src={this.#initMainImage()} id="mainImage" alt="Main" />
      </gallery-big>
    );
  }

  #sideImages(){
    if(this.props.gallery === undefined) return;
    if(this.props.gallery.length <= 1) return;

    let asideImgs = [];

    for(const [index, image] of this.props.gallery.entries()){
      asideImgs.push(
        <img onClick={()=>{this.#setMianImage(image)}} key={index} src={image} alt={"Product " + index} />
      );

    }

    return asideImgs;

  }

  #initMainImage(){
    if(this.props.gallery === undefined) return;
    if(this.props.gallery.length === 0) return;

    return this.props.gallery[0];

  }

  #setMianImage(source = null){if(source != null) this.#imageMain.src = source;}

}
