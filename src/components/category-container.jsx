import React from 'react';

const CategoryContainer = ({category}) => {
  return (
    <div className='categorycontainer'>
      <Image src={category.imageLink} verticalAlign='middle' className='articleimage' fluid />
      <span><h4>{category.name}</h4></span>
      <span>{category.description}</span>
    </div>
  );
}

export default CategoryContainer;