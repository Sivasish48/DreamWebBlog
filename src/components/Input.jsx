import React ,{useId} from "react";


// Using forwardRef, you can create more flexible and reusable components that allow parent components to interact with their children in a controlled manner, by sending ref
const Input = React.forwardRef( function Input({
    // let us pass some parameters for the input 
    label,
    type="text",
    className="",
    ...props
},ref){
    const id = useId(

    )
    return(
        <div className="w-full">
           {label && <label className="inline-block mb-1 pl-1"
           htmlFor={id}>
            {label}
            </label>
            }

            <input 
            type={type}
            className={` px-3 py-2 rounded-lg bg-white text-black
            outline-none focus:bg-gray-50 duration-200 border border-gray-200
            w-full ${className}`}
            ref={ref} 
            {...props}
            id={id}
            />


        </div>
    )
})