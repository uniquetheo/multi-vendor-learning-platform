import { useState } from "react"



export const Input = ({label, data, setData, isError, setIsError, ...rest}) => {
    const [isFocused, setIsFocused] = useState(false);

    const objectKey = label === "Confirm Password" ? "confirmPassword" : label.toLowerCase();
    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        if (data[label.toLowerCase()].trim() === "") {
            setIsFocused(!isFocused);
        }
    }

    const handleChange = e => {
        if (e.target.value.trim() === ""){
            setIsError((prev)=> {
                return {
                    ...prev,
                    [objectKey]: true,
                }
            })
        } else {
            setIsError((prev)=> {
                return {
                    ...prev,
                    [objectKey]: false,
                }
            })
        }
        setData({
            ...data, [objectKey]: e.target.value,
        })
    }


  return (
    <div>
        <div>
            className={`w-full relative h-10 px-3 ${
                isFocused || isError[objectKey] ? "border-2 border-blue-500 rounded-md" : "border-b-2"
            }` ${isError[objectKey] && "border-"}}
        </div>
    </div>
  )
}
