/*
 * Module dependencies
 */

import Reflux from 'reflux';
import React from 'react';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  render: function() {
    if(this.state.imagestore) {
      return <div>
        {
          this.state.imagestore.map((image) => {
            return <div className="Image">
              <a href={image.link}>
                <img src={image.media.m} />
              </a>
            </div>
          })
        }
      </div>
    }
    else{
      return <p>No images</p>
    }
  }
});

export default ImageGrid;
