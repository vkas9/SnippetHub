import { SnippetType } from "@/Types/type.snippetData";
import axios, { AxiosResponse } from "axios";
import { quickLinkAction } from "../store/features/quicklinkSlice";

const addSnippetToDB = async ({
  selectedSnippet,
  snippetData,
  dispatch,
}: {
  selectedSnippet: SnippetType;
  snippetData: SnippetType[];
  dispatch: any;
}) => {
  const response = await axios.post("/api/snippets", selectedSnippet);
  const updatedSelectedSnippet = {
    ...selectedSnippet,
    _id: response.data.snippet._id,
  };
  const updatedSnippetData = [...snippetData, updatedSelectedSnippet];
  dispatch(quickLinkAction.setSelectedSnippet(updatedSelectedSnippet));
  dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
};
export default addSnippetToDB;
