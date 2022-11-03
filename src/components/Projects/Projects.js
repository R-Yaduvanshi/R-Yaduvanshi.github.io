import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import espn from "../../assets/svg/projects/espn.png";
import { ThemeContext } from "../../contexts/ThemeContext";
import { projectsData } from "../../data/projectsData";
import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import "../projectscard/projectcard.css";

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* {projectsData.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
          name="project"
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projectsData.slice(0, 3).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </div>

            {projectsData.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )} */}
      {/* {projectsData.length > 0 && (
        <section
          className="container"
          name="project"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          {projectsData.slice(0, 3).map((project) => (
            <SingleProject
              theme={theme}
              key={project.id}
              id={project.id}
              name={project.projectName}
              desc={project.projectDesc}
              tags={project.tags}
              code={project.code}
              demo={project.demo}
              image={project.image}
            />
          ))}
          <div className="projects--viewAll">
            <Link to="/projects">
              <button className={classes.viewAllBtn}>
                View All
                <HiArrowRight className={classes.viewArr} />
              </button>
            </Link>
          </div>
        </section>
      )} */}

      {projectsData.length > 0 && (
        <section
          className="container"
          name="project"
          style={{
            backgroundColor: theme.secondary,
            // margin: "0px",
          }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>
          <div
            style={{
              // border: "2px solid green",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {projectsData.slice(0, 3).map((projectss) => (
              <SingleProject
                theme={theme}
                key={projectss.id}
                id={projectss.id}
                name={projectss.projectName}
                desc={projectss.projectDesc}
                tags={projectss.tags}
                code={projectss.code}
                demo={projectss.demo}
                image={projectss.image}
              />
            ))}
          </div>
          <div className="projects--viewAll">
            <Link to="/projects">
              <button className={classes.viewAllBtn}>
                View All
                <HiArrowRight className={classes.viewArr} />
              </button>
            </Link>
          </div>
        </section>
      )}
      {/* <div className="card" style={{ border: "2px solid red" }}>
        <div
          className="card-image"
          style={{
            height: "35vh",
            marginBottom: "15px",
            borderRadius: "15px 15px 0 0",
            overflow: "hidden",
            backgroundImage: `url(${espn})`,
          }}
        ></div>
        <div style={{ height: "30vh" }}>
          <h2>Fabbag Clone</h2>
          <p>
            Fabbag is a customized cosmetic and beauty counselling website. The
            project is to replicating the features of the website.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // border: "2px solid yellow",
            height: "16vh",
          }}
        >
          <p
            style={{
              textAlign: "center",
            }}
          >
            Tech Stacks :
          </p>
          <p>
            React | JavaScript | HTML | CSS | BootStrap | React | JavaScript |
            MongoDB | Express | NodeJS
          </p>
        </div>
        <div
          style={{
            display: "flex",
            // border: "2px solid pink",
            justifyContent: "space-evenly",
          }}
        >
          <a href="#">Github Link</a>
          <a href="#">Live Link</a>
        </div>
      </div> */}

      {/*Card No 2  */}
      {/* <div className="card">
          <div className="card-image pro-1"></div>
          <div style={{ height: "30vh" }}>
            <h2>Fabbag Clone</h2>
            <p>
              Fabbag is a customized cosmetic and beauty counselling website.
              The project is to replicating the features of the website.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // border: "2px solid yellow",
              height: "16vh",
            }}
          >
            <p style={{ textAlign: "center" }}>Tech Stacks :</p>
            <p>
              React | JavaScript | HTML | CSS | BootStrap | React | JavaScript |
              MongoDB | Express | NodeJS
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <a href="#">Github Link</a>
            <a href="#">Live Link</a>
          </div>
        </div> */}

      {/* Card No 3 */}
      {/* <div className="card">
          <div className="card-image pro-2"></div>
          <div style={{ height: "30vh" }}>
            <h2>Fabbag Clone</h2>
            <p>
              Fabbag is a customized cosmetic and beauty counselling website.
              The project is to replicating the features of the website.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // border: "2px solid yellow",
              height: "16vh",
            }}
          >
            <p style={{ textAlign: "center" }}>Tech Stacks :</p>
            <p>
              React | JavaScript | HTML | CSS | BootStrap | React | JavaScript |
              MongoDB | Express | NodeJS
            </p>
          </div>
          <div
            style={{
              display: "flex",
              // border: "2px solid pink",
              justifyContent: "space-evenly",
            }}
          >
            <a href="#">Github Link</a>
            <a href="#">Live Link</a>
          </div> */}
      {/* </div> */}
    </>
  );
}

export default Projects;
