import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySection} from '../../redux/directory/directory.selector';
import './directory.styles.scss';
const Directory = ({sections})=>(
    
   <div className="directory-menu">
            {
          //  this.state.sections.map(({title,imageUrl,id,size,linkUrl})=>(
            sections.map(({id,...otherSectionProps})=>(
            
               // <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} history={this.props.history} linkUrl={linkUrl}/>
               <MenuItem key={id} {...otherSectionProps}/>
            ))
            }
        </div>
  
)

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySection
})
export default connect(mapStateToProps)(Directory);