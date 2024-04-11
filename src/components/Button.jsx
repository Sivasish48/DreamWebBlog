import React from "react";

function Button({
    // let us give sum parameters to the Button function
    // These curly braces enclose the function's parameters, which are like customizable options you can pass to the function when you use it.
    //children: This parameter allows you to specify what text or content will appear inside the button. It's like the label you want to write on the button.

    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
    //...props: This special syntax allows you to pass in any additional properties (like onClick for handling clicks) that might be useful for the button's behavior. It's like a catch-all for any extra options you need.
}){
    return(
        <button className={`px-4 py-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button