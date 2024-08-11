"use client";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { error } from "console";
import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import addNewTagFunction from "./addNewTagFunction";
import { tagType } from "@/Types/type.snippetData";
const AddTagModal = () => {
  const dispatch = useAppDispatch();
  const { isAddTagOpen,isMobileView } = useAppSelector((state) => state.quicklink);


const [tagName,setTagName]=useState<string>("");
const [errorMessage,setErrorMessage]=useState<string>("");

const onInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  const newValue=e.target.value;
  setErrorMessage("");
  setTagName(newValue)
}

useEffect(()=>{
  setTagName("");
  setErrorMessage("");

},[isAddTagOpen])

  return (
    <div
    className={`${
      isAddTagOpen 
        ? "bg-black/90  z-10 w-screen absolute top-0 left-0 h-screen"
        : " "
    }  `}
  >
    <div
      className={`bg-[#393a3b] z-20 ${
        isAddTagOpen
          ? "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          : "hidden"
      } max-sm:w-[95%] p-2 rounded-lg w-[500px] shadow-md `}
    >
      <TagHeader/>
      <TagInput tagName={tagName} onTagNameChange={onInputChange} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      <AddTagButton tagName={tagName} setErrorMessage={setErrorMessage} />
    </div>

    </div>
  );
};

export default AddTagModal;

const TagHeader = () => {
  const dispatch = useAppDispatch();
  const { isAddTagOpen } = useAppSelector((state) => state.quicklink);

  const toggleTagModal = () => {
    dispatch(quickLinkAction.setAddTagOpen(!isAddTagOpen));
  };

  return (
    <header className="flex items-center justify-between text-2xl">
      <span className="font-bold truncate whitespace-nowrap">Add New Tag</span>
      <button
        onClick={toggleTagModal}
        className="rounded-full p-1 sm:p-2 transition-colors duration-150 hover:bg-white/10 active:bg-white/10"
        aria-label="Close"
      >
        <IoMdClose size={24} />
      </button>
    </header>
  );
};













interface TagInputProps {
  tagName: string;
  onTagNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
}

const TagInput = ({
  tagName,
  onTagNameChange,
  errorMessage,
  setErrorMessage,
}: TagInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { isAddTagOpen } = useAppSelector((state) => state.quicklink);

  useEffect(() => {
    ref.current?.focus();
  }, [isAddTagOpen]);

  return (
    <div className="flex mt-5 flex-col gap-1">
      <label className="font-semibold">Tag Name</label>
      <input
        onChange={onTagNameChange}
        value={tagName}
        ref={ref}
        className="rounded-md w-full p-2 text-xl outline-none bg-black/40 text-white"
        placeholder="e.g., docker"
      />
      {errorMessage && (
        <div className="text-red-500 flex ml-2 items-center">
          <span>
            <sup>*</sup>{errorMessage}
          </span>
        </div>
      )}
    </div>
  );
};













interface TagActionButtonsProps {
  tagName: string;
  setErrorMessage: (errorMessage: string) => void;
}


const AddTagButton=({tagName,setErrorMessage}:TagActionButtonsProps)=>{



  const{ClerkUserId}= useAppSelector((state)=>state.quicklink)




  const dispatch=useAppDispatch()
  const { isAddTagOpen,AllTags } = useAppSelector((state) => state.quicklink);


  const handleAddTagClick = () => {
  const tagNameTrimmed = tagName.trim().toLowerCase();




  // validate tag name
  if (isTagNameEmpty(tagNameTrimmed)) {
    setErrorMessage("Tag name cannot be empty!");
    return;
  }

  // Check if tag already exists
  if (isTagDuplicate(tagNameTrimmed, AllTags)) {
    setErrorMessage("Tag already in use!");
    return;
  }

  // add new tag
  addNewTagFunction(tagName, dispatch, isAddTagOpen,ClerkUserId);
};
// function to check if tag name is empty
const isTagNameEmpty = (tagName: string) => tagName.length === 0;

// function to check if tag is a duplicate
const isTagDuplicate = (tagName: string, allTags: tagType[]) =>
  allTags.some((tag) => tag.name.trim().toLowerCase() === tagName);




  return (

    <div className="flex max-sm:flex-col-reverse   items-center justify-center sm:justify-end mt-5 gap-2">
     <button onClick={()=>dispatch(quickLinkAction.setAddTagOpen(!isAddTagOpen))} className="bg-white/20 max-sm:w-full font-semibold active:bg-white/30 sm:hover:bg-white/30 px-4 py-2 rounded-md">
      Cancel
     </button>
     <button  onClick={handleAddTagClick} className="bg-white/20 font-semibold active:bg-white/30 max-sm:w-full sm:hover:bg-white/30 px-4 py-2 rounded-md">
      Add Tag
     </button>

    </div>
  )

}
