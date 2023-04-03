import React, { Fragment, Component } from "react";
import ReactMarkdown from "react-markdown";
import { Grid } from "@mui/material";
import { Typography, Button } from "@mui/material";
import InfoModal from "../components/general/InfoModal";
import { IPostInfo } from "../interfaces/IDataModels";
import { parsePost } from "../utilities/blog";
import ProjectCard from "../components/general/ProjectCard";
import { withTranslation, WithTranslation } from "react-i18next";

const importAll = (r: any) => r.keys().map(r);

interface Props extends WithTranslation {}

const Blog: React.FC<Props> = () => {
  const [blogposts, setBlogposts] = React.useState<Array<IPostInfo>>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  function toggleModal() {
    open ? setOpen(false) : setOpen(true);
  }
  function removeHashFromFilename(filename: string) {
    return filename.replace(/^\/static\/media\/(.+?)\.[a-f0-9]+\./, "$1.");
  }

  const loadBlogposts = async () => {
    const markdownFiles = importAll(
      require.context("../data/blog", false, /\.md$/)
    )
      .sort()
      .reverse();

    const posts: Array<IPostInfo> = await Promise.all(
      markdownFiles.map((file: any) =>
        fetch(file)
          .then((res) => res.text())
          .then((postString) => ({ post: postString, filePath: file }))
      )
    );
    setBlogposts(posts);
  };

  React.useEffect(() => {
    loadBlogposts();
  });

  const getLink = (path: string) => {
    return "../blog/" + removeHashFromFilename(path);
  };
  const openBlogpost = (path: string) => {
    window.location.href = "../blog/" + getLink(path);
  };

  /* eslint-disable react/no-array-index-key */
  const post_infos = blogposts.map((post) => parsePost(post));

  return (
    <Fragment>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        alignSelf={"center"}
        id="Projects"
      >
        {post_infos.map((post) => (
          <Grid item xs={12} sm={6} md={3} key={`${post.name}`}>
            <ProjectCard
              key={post!.name}
              name={post!.name}
              description={post!.date}
              link={getLink(post!.path)}
              img={post!.image}
              alt={post!.name}
              tags={post!.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default withTranslation()(Blog);
