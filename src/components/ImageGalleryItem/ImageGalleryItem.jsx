import React, { Component } from 'react';
import './ImageGalleryItem.css'
import Modal from '../Modal'

export default class ImageGalleryItem extends Component {
    state = {
    showModal: false,
  }
toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
    render() {
        const { showModal } = this.state;
        const { image: { webformatURL, tags, largeImageURL } } = this.props;
        return (
        <>
        <li onClick={this.toggleModal} className="ImageGalleryItem">
        <img src={webformatURL} alt={tags} loading="lazy"  className="ImageGalleryItem-image"/>
            </li>
          {showModal && (
          <Modal onClose={this.toggleModal}>
             <img src={largeImageURL} alt={tags} loading="lazy"/>
          </Modal>)}
                </>
        )
}  


}

   




