import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'hats'
        }, {
          title: 'jackets',
          // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          imageUrl: "https://res.cloudinary.com/coviddelta/image/upload/v1637027392/React/IMG_2017021" +
              "0_172941-1_y1ux4n.jpg",
          id: 2,
          linkUrl: ''
        }, {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: ''
        }, {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        }, {
          title: 'mens',
          // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          imageUrl: "https://res.cloudinary.com/coviddelta/image/upload/v1635476295/YelpCamp/thp3rc7e" +
              "wf3d7m7v2z0h.jpg",
          size: 'large',
          id: 5,
          linkUrl: ''
        }
      ]
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this
          .state
          .sections
          .map(({
            id,
            ...otherSectionProps
          }) => (<MenuItem key={id} {...otherSectionProps}/>))}
      </div>
    );
  }
}

export default Directory;