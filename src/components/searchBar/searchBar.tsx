"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import AddSnippet from "./addSnippet";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useUser } from "@clerk/nextjs";
import { quickLinkAction } from "@/lib/store/features/quicklinkSlice";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import axios from "axios";
import { debounce } from "lodash";
import { SnippetType, tagType } from "@/Types/type.snippetData";
import saveSnippetToDB from "@/lib/SnippetDB/saveSnippetToDB";
import { v4 as uuidv4 } from "uuid";
const SearchBar = () => {
  const { selectedSnippet, isNewSnippet } = useAppSelector(
    (state) => state.quicklink
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleRef = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const placeholders = [
    "Search snippets or tags...",
    "Find code or topics...",
    "Enter keyword or tag...",
    "Search by language or snippet...",
    "Discover code examples...",
    "Explore snippets or projects...",
    "Search for your favorite code..."
  ];

  const dispatch = useAppDispatch();
  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (selectedSnippet && selectedSnippet.title !== "") {
      debounceSaveNote(selectedSnippet, isNewSnippet);
    }
  }, [selectedSnippet, isNewSnippet]);

  const debounceSaveNote = useMemo(
    () =>
      debounce((selectedSnippet: SnippetType, isNewSnippet: boolean) => {
        saveSnippetToDB(selectedSnippet, isNewSnippet, dispatch);
      }, 500),
    []
  );

  useEffect(() => {
    const fetchAllSnippets = async () => {
      try {
        const response = await axios.get(`/api/snippets?clerkId=${user?.id}`);

        const fetchedAllSnippet = response.data.allsnippets.map(
          (snippet: SnippetType) => ({
            tags: snippet.tags,
            title: snippet.title,
            _id: snippet._id,
            code: snippet.code,
            language: snippet.language,
            createdAt: snippet.createdAt,
            updatedAt: snippet.updatedAt,
            isTrashed: snippet.isTrashed,
            isFavorite: snippet.isFavorite,
          })
        );

        dispatch(quickLinkAction.setSnippetData(fetchedAllSnippet));
      } catch (error) {
        console.log("error--->", error);
      } finally {
        dispatch(quickLinkAction.setLoadingSnippets(false));
      }
    };

    const fetchAllTags = async () => {
      try {
        const response = await axios.get(`/api/tags?userId=${user?.id}`);
        if (response.data.data) {
          const alltag: tagType = {
            _id: uuidv4(),
            name: "All",
            isSelected: true,
            clerkUserId: user?.id || "",
          };

          const tempAllTags: tagType[] = [
            alltag,
            ...response.data.data.map((tag: tagType, index: number) => ({
              ...tag,
              isSelected: false,
            })),
          ];
         
          dispatch(quickLinkAction.setAllTag(tempAllTags));
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        dispatch(quickLinkAction.setLoadingTags(false));
      }
    };
    if (isLoaded) {
      fetchAllTags();
      fetchAllSnippets();
    }
  }, [isLoaded, user]);

  useEffect(() => {
    dispatch(quickLinkAction.setClerkUserId(user?.id));
  }, [isLoaded, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div
      className={` relative ${
        isFocused ? "ring-1 border-blue-500 outline-none" : ""
      } flex  items-center overflow-hidden gap-2  w-[40%] rounded-full h-[100%] sm:h-[90%] `}
    >
      {/* <IoIosSearch onClick={handleRef} size={25}  className={`${isFocused ? 'block' : 'hidden'} text-white`}/> */}

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      {/* <input onFocus={()=>setIsFocused(true)} onBlur={() => setIsFocused(false)} ref={inputRef} placeholder='Search a snippet...' className='bg-transparent text-white h-full  sm:pr-[110px] pr-[2.3rem] truncate outline-none w-full' /> */}
      <AddSnippet />
    </div>
  );
};

export default SearchBar;
