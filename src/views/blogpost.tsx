import React from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Typography, Container, Grid } from "@mui/material";
import ProfileArea from "../components/home/ProfileArea";
import Skills from "../components/home/Skills";
import ExperienceArea from "../components/home/ExperienceArea";
import AboutMeMain from "../components/home/AboutMeMain";
import Projects from "../components/home/Projects";
import { IBlogPost, IPostInfo } from "../interfaces/IDataModels";
import { parsePost } from "../utilities/blog";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

interface BlogpostProps extends WithTranslation {}

const Blogpost: React.FC<BlogpostProps> = ({ t }) => {
  const { blogpostId } = useParams();
  const [blogpostContent, setBlogpostContent] = React.useState<IBlogPost>({
    name: "",
    date: "",
    path: "",
    image: "",
    markdown: "",
    tags: [],
  });

  const loadBlogpost = async () => {
    const loadedFile = await import(`../data/blog/${blogpostId}`);
    const loadedContent = await fetch(loadedFile.default).then((res) =>
      res.text()
    );
    console.log(`../../data/blog/${blogpostId}`);
    console.log(loadedContent);
    const parsedBlogpost = parsePost({
      post: loadedContent,
      filePath: blogpostId!.toString(),
    });
    setBlogpostContent(parsedBlogpost);
  };

  React.useEffect(() => {
    loadBlogpost();
  }, []);
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4">{blogpostContent.name}</Typography>
        <Typography variant="h5" color="gray">
          {blogpostContent.date}
        </Typography>
        <ReactMarkdown>{blogpostContent.markdown}</ReactMarkdown>
      </Container>
    </>
  );
};

export default withTranslation()(Blogpost);
