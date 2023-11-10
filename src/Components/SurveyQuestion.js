import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const SurveyQuestion = ({ question, options, onChangeFunc, registervalue }) => {
  const { register } = useFormContext();

  //   onChangeFunc();
  return (
    <div>
      <p className="large question-title">{question}</p>
      <div className="question-group-container">
        {options.map((option) => (
          <div className="individual-question-container" key={option.value}>
            <input
              {...register(registervalue, {
                onChange: (e) => {
                  onChangeFunc(e);
                },
              })}
              type="radio"
              id={option.value}
              value={option.value}
            />
            <label htmlFor={option.value}>{option.label}</label>
            <div className="price-subtext">
              <p>
                {/* {option.price != null &&
                  `+Rs. ${option.price.toLocaleString("en-US")}`} */}
                {option.price != null && typeof option.price === "number" ? (
                  `+Rs. ${option.price.toLocaleString("en-US")}`
                ) : (
                  <span className="non-int-text"> {option.price} </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyQuestion;

// function SurveyQuestion({
//   question,
//   options,
//   onChange,
//   registervalue,
//   register,
// }) {
//   console.log(register);
//   console.log(registervalue);
//   console.log(question);
//   console.log(options);
//   console.log(onChange);
//   const [selectedOption, setSelectedOption] = useState("");

//   //   const handleOptionChange = (event) => {
//   //     const optionValue = event.target.value;
//   //     console.log(event);
//   //     console.log(optionValue);
//   //     setSelectedOption(optionValue);
//   //     onChange(optionValue);
//   //   };

//   return (
//     <div>
//       <h3>{question}</h3>
//       {options.map((option) => (
//         <div key={option.value}>
//           <input
//             {...register(registervalue, {
//               required: true,
//               onChange: (e) => {
//                 onChange(e);
//               },
//             })}
//             type="radio"
//             id={option.value}
//             name={question}
//             value={option.value}
//           />
//           <label htmlFor={option.value}>{option.label}</label>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default SurveyQuestion;
