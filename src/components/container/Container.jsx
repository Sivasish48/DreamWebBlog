import React from 'react'


// In a React project, a Container.jsx file is typically used to define higher-level components that are responsible for managing state and behavior, often in relation to specific sections or features of the application.



// In the provided function Container, Children refers to the components or elements that are passed as children to the Container component.

//In React, components can have children, which are passed as nested elements within the JSX 

function Container(Children){
    return(
      <div className='w-full max-w-7xl mx-auto px-4'>{Children}</div>
    )
}

export default Container