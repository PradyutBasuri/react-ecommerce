import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCollections,selectCollectionForPreview } from '../../redux/shop/shop.selector';
import './collections-overview.styles.scss';
import  CollectionPreview  from '../preview-collections/collection-preview.component';

const CollectionOverView = ({collections})=>(
<div className="collection-overview">
    {
        collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        
        ))
    }
</div>
);

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverView);