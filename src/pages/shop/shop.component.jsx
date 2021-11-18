
import React from "react";
import './shop.data.js'
import SHOP_DATA from "./shop.data.js";
// import CollectionPreviews from '../../components/preview-collection/collection-preview'
import CollectionPreviews from "../../components/preview-collection/collection-preview";


class ShopPage extends React.Component{
   constructor(props) {
      super(props);

      this.state = {
         collections: SHOP_DATA
      };
   }
   render() {
      const { collections } = this.state;
      return (
         <div className=' shop-page'>
            {
               collections.map(({ id, ...otherCollectionProps }) =>(
               <CollectionPreviews key={id} {...otherCollectionProps} />
               ))
            }
          </div>
      )
   }
}
export default ShopPage;