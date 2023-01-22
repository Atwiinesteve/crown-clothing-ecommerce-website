// importing react.
import React from 'react';

// importing components.
import Category from './Category';

// importing styles.
import "../scss/Categories.scss";

// Categories component.
function Categories({ categories }) {

    

    return (

        <>
        
            {/* Categories */}
            <div className="categories-container">
                { categories.map((category) => (
                    
                    <Category key={category.id} category={category} />

                )) }
            </div>

        </>

    );

};

// exporting Categories component.
export default Categories;