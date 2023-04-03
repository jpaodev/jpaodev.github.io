import { IBlogPost, IPostInfo } from "../interfaces/IDataModels";

export const parsePost = (post: IPostInfo): IBlogPost => {
  const regex =
    /^---\r?\nname: (.+)\r?\ndate: (.+)\r?\ntags: ([^-\n]+)\r?\n---\r?\n([\s\S]*)$/;
  const matches = post.post.match(regex);

  if (matches) {
    const tags = matches[3].split(",");
    return {
      name: matches[1],
      date: matches[2],
      // image: matches[3],
      tags,
      markdown: matches[4],
      path: post.filePath,
      image: "assets/img/laptop-coding.jpeg",
    };
  } else {
    throw "Couldn't parse blog post";
  }
};
