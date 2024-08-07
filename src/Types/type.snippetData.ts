
export interface SnippetType{
    id:string;
    title:string;
    isFavorite:boolean;
    tags:tagType[];
    description:string;
    code:string;
    language:string;
    createdAt:string;
}


export interface tagType{
    _id:string;
    name:string
}