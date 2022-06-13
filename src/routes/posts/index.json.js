import { importMarkdowns, convertToPostPreview } from "$lib/handle-markdown"

// load all markdown files from the posts directory
let postFiles = importMarkdowns("/src/posts") 
console.log(postFiles);

export function get() {
    // convert the markdown to the required format
    let posts = postFiles.map((file) => convertToPostPreview(file));
    console.log(posts)
    // stringify to give it as a result of the get command
    let body = JSON.stringify(posts);
    console.log('BODY--->')
    console.log(body)
    return {body}
}