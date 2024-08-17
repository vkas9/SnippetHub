import { SnippetType } from "@/Types/type.snippetData";
import axios from "axios";
import { quickLinkAction } from "../store/features/quicklinkSlice";

const saveSnippetToDB=async(selectedSnippet: SnippetType, isNewSnippet: boolean,dispatch:any)=>{

    
    const url=isNewSnippet?"/api/snippets":`/api/snippets?snippetId=${selectedSnippet?._id}`

    const method=isNewSnippet?"post":"put";

    try {
        const response=await axios({
            method:method,
            url:url,
            data:selectedSnippet
        })
      
        
        const updatedSelectedSnippet= isNewSnippet?{...selectedSnippet,_id:response.data.data._id}:selectedSnippet

        dispatch(
            quickLinkAction.setSnippetData((prevSnippets: SnippetType[]) => {
              if (isNewSnippet) {
                // Add the new snippet to the list
                return [...prevSnippets,  updatedSelectedSnippet];
              } else {
                // Update the existing snippet
                return prevSnippets.map((snippet) =>
                  snippet._id ===  updatedSelectedSnippet?._id ?  updatedSelectedSnippet : snippet
                );
              }
            })
          );
        if(isNewSnippet){
            dispatch(quickLinkAction.setSelectedSnippet(updatedSelectedSnippet))
            dispatch(quickLinkAction.setIsNewSnippet(false))
        }
        
    } catch (error) {
        console.log("error->",error)
    }

}
export default saveSnippetToDB;