import fs from 'fs';
// import files with pattern
import glob from "glob";
// parse front matter and body of markdown
import fm from "front-matter";
// parse body to html
import {micromark} from 'micromark';

/**
 * import all markdown files in specified path, extract front matter and convert to html
 * @param {string} markdownPath path to folder containing the markdown files (ends on /)
 * @returns [{path, attributes, body}]
 */
export function importMarkdowns(markdownPath) {
    const fileNames = glob.sync(`${markdownPath}/*.md`, {root: '/Users/joshuaweber/personal/personal-blog/'});
    return fileNames.map((path) => convertMarkdown(path));
}

/**
 * convert markdown to object with attributes and html
 * @param {string} path path to file
 * @returns 
 */
export function convertMarkdown(path) {
    // read file
    let file = fs.readFileSync(path, 'utf8');
    // extract frontmatter and body with the front-matter package
    let { attributes, body } = fm(file);
    console.log(attributes);
    console.log(body);

    // parse the body to html with the remark/rehype pipeline
    let result = micromark(body);
    let new_path = path.split('/')
    console.log(new_path)
    console.log({ path, attributes, html: result});

    return { path, attributes, html: result};
}

export function convertToPostPreview(object) {
    const url = object.path.replace(".md","").replace("src/", "").replace("/Users/joshuaweber/personal/personal-blog","");
    return {...object.attributes, url};
}
