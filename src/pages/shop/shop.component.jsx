import React from "react";
import { Component } from "react";
import SHOP_DATA from './shop.data';
import CollectionPrev from '../../components/preview-collections/collection-preview.component';
class ShopPage extends Component{
    constructor(){
        super();

        this.state={
            collections: SHOP_DATA,
        }
    }

          
render(){
    return (
    <div>
    {
        this.state.collections.map(({id, ...otherCollec}) =>(
<CollectionPrev key={id} {...otherCollec} />
        ))}
    </div>
    )
}
}

export default ShopPage;