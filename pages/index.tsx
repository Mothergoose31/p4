import { Fragment } from 'react';
import Home from '../components/home-page/home';
import { projectsList } from "../data/projects-list";
import Meta from '../components/layout/meta';
//THEORY 1
// the reason why blogs is not working is because Im passing page probs into the component but not the layout  and because of this ,
//I cant load any of the blog posts
export default function Index({ projects}) {
  return (
    <Fragment>
      <Meta title='Joseph Alvarenga Beech - Full Stack Developer' />
      

      <Home projects={projects} 
       />
    </Fragment>
  )
}

export function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    },
  };
}
