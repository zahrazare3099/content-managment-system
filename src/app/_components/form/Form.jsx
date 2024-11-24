"use client";
import { useState } from "react";
import { Input } from "../input/Input";
import { Button } from "../button/Button";
import { AddMoreContent } from "../AddMoreContent";
import { useDataContext } from "@/context/DataProvider";

const contentItems = [
  { label: "Header", id: 1 },
  { label: "Paragragh", id: 2 },
  { label: "Image", id: 3 },
  { label: "Video", id: 4 },
  { label: "Ouote", id: 5 },
  { label: "Code", id: 6 },
];

export const Form = () => {
  const { setData } = useDataContext();
  // To store submitted data
  const [inputs, setInputs] = useState([]);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [controlInput, setcontrolInput] = useState(null);
  //
  const handleSubmitform = (e) => {
    e.preventDefault();
    // Create an object from the inputs
    const additionInputs = inputs?.map((input) => ({
      label: input.label,
      value: input.value,
      id: Date.now(),
    }));
    // Send data to an API or process it as needed
    if (title && subTitle) {
      setData((preData) => [
        ...preData,
        { title, subTitle, id: Date.now(), ...additionInputs },
      ]);
      setTitle(""), setSubTitle(""), setInputs([]);
      setcontrolInput(null);
    } else return;

    // console.log("Submitted Data:", data);
  };
  // Function to handle adding new input fields
  const handleAddContent = (id, label) => {
    setInputs([...inputs, { label, value: "", id }]);
  };
  // Function to handle input changes
  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index].value = event.target.value;
    setInputs(newInputs);
  };
  return (
    <div className="w-full flex flex-col gap-y-4">
      <AddMoreContent>
        {contentItems.map((item, index) => (
          <button
            onClick={() => {
              handleAddContent(index + 1, item.label),
                setcontrolInput(index + 1);
            }}
            key={item.id}
            className="bg-slate-300 py-1 px-2 rounded-xl text-sm hover:outline-2 hover:outline hover:outline-indigo-400 "
          >
            {item.label}
          </button>
        ))}
      </AddMoreContent>
      <form
        onSubmit={handleSubmitform}
        className="w-full flex flex-col justify-center gap-4"
      >
        <Input
          name={title}
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          name={subTitle}
          label="Sub-Title"
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
        />
        {controlInput &&
          inputs.map((input, index) => (
            <Input
              key={index}
              label={`${input.label}-${index + 1}`}
              value={input.value}
              onChange={(e) => {
                handleInputChange(index, e);
              }}
            />
          ))}
        <Button type="submit" name="submit" />
      </form>
    </div>
  );
};

{
  /* <div className="upload">
        {!preview && (
          <button type="button" onClick={triggerFileInput}>
            Upload Image
          </button>
        )}

        {preview && (
          <div className="preview">
            <Image
              src={preview}
              className="img"
              alt="profilePicture"
              height={50}
              width={50}
            />

            <div className="buttons">
              <button type="button" onClick={triggerFileInput}>
                Change Image
              </button>

              <button type="button" onClick={removeImage}>
                Remove Image
              </button>
            </div>
          </div>
        )}
        <input
          {...register("image")}
          ref={hiddenFileInputRef}
          hidden
          type="file"
          onChange={handleFileChange}
        />
        <p className="error">{errors.image && errors.image.message}</p>
      </div> */
}

// Example of sending data to an API
// const response = await fetch('/api/submit', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(submittedData),
// });

// const result = await response.json();
// console.log(result);
