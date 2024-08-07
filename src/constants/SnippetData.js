export const snippetData=[{

    id:'1',
    title:"this is a note",
    isFavorite:false,
    tags:[ { _id: "1", name: "tag1" }, { _id: "2", name: "tag2" },],
    description:"this is a description",
    code:  ` const handleFavorite = (item: SnippetType) => {
    const updatedSnippetData: SnippetType[] = snippetData.map((snippet) => {
      if (snippet.id === item.id) {
        return { ...snippet, isFavorite: !snippet.isFavorite };
      }
      return snippet;
    });
    
    dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
  };`,
    language:"javascript",
    createdAt:"2022-01-01"
},{

    id:'2',
    title:"this is a note",
    isFavorite:false,
    tags:[ { _id: "1", name: "tag1" }, { _id: "2", name: "tag2" }],
    description:"this is a description",
    code:`const handleFavorite = (item: SnippetType) => {
    const updatedSnippetData: SnippetType[] = snippetData.map((snippet) => {
      if (snippet.id === item.id) {
        return { ...snippet, isFavorite: !snippet.isFavorite };
      }
      return snippet;
    });
    
    dispatch(quickLinkAction.setSnippetData(updatedSnippetData));
  };`,
    language:"javascript",
    createdAt:"2022-01-01"
},]