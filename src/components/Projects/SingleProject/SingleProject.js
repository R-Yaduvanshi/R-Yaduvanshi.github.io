// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { FaPlay, FaCode } from "react-icons/fa";
// import Fade from "react-reveal/Fade";

// import placeholder from "../../../assets/png/placeholder.png";
import "./SingleProject.css";

// function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
// const useStyles = makeStyles((t) => ({
//   iconBtn: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: 40,
//     height: 40,
//     borderRadius: 50,
//     border: `2px solid ${theme.tertiary}`,
//     color: theme.tertiary,
//     transition: "all 0.2s",
//     "&:hover": {
//       backgroundColor: theme.secondary,
//       color: theme.primary,
//       transform: "scale(1.1)",
//       border: `2px solid ${theme.secondary}`,
//     },
//   },
//   icon: {
//     fontSize: "1.1rem",
//     transition: "all 0.2s",
//     "&:hover": {},
//   },
// }));

// const classes = useStyles();

//   return (
//     <Fade bottom>
//       <div
//         key={id}
//         className="singleProject"
//         style={{ backgroundColor: theme.primary400 }}
//       >
//         <div className="projectContent">
//           <h2
//             id={name.replace(" ", "-").toLowerCase()}
//             style={{ color: theme.tertiary }}
//           >
//             {name}
//           </h2>
//           <img src={image ? image : placeholder} alt={name} />
//           <div className="project--showcaseBtn">
//             <a
//               href={demo}
//               target="_blank"
//               rel="noreferrer"
//               className={classes.iconBtn}
//               aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
//                 .replace(" ", "-")
//                 .toLowerCase()}-demo`}
//             >
//               <FaPlay
//                 id={`${name.replace(" ", "-").toLowerCase()}-demo`}
//                 className={classes.icon}
//                 aria-label="Demo"
//               />
//             </a>
//             <a
//               href={code}
//               target="_blank"
//               rel="noreferrer"
//               className={classes.iconBtn}
//               aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
//                 .replace(" ", "-")
//                 .toLowerCase()}-code`}
//             >
//               <FaCode
//                 id={`${name.replace(" ", "-").toLowerCase()}-code`}
//                 className={classes.icon}
//                 aria-label="Code"
//               />
//             </a>
//           </div>
//         </div>
//         <p
//           className="project--desc"
//           style={{
//             background: theme.secondary,
//             color: theme.tertiary,
//           }}
//         >
//           {desc}
//         </p>
//         <div
//           className="project--lang"
//           style={{
//             background: theme.secondary,
//             color: theme.tertiary80,
//           }}
//         >
//           {tags.map((tag, id) => (
//             <span key={id}>{tag}</span>
//           ))}
//         </div>
//       </div>
//     </Fade>
//   );
// }

// export default SingleProject;

import React from "react";
import "../../projectscard/projectcard.css";
import Fade from "react-reveal/Fade";
import { FaCode, FaPlay } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap";
const SingleProject = ({ id, name, desc, tags, code, demo, image, theme }) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();
  return (
    <Fade left>
      <div className="card">
        <div
          className="card-image"
          style={{
            height: "35vh",
            marginBottom: "15px",
            borderRadius: "15px 15px 0 0",
            overflow: "hidden",
            // backgroundImage: `url(${image})`,
          }}
        >
          <img src={image} alt="" />
        </div>
        <div style={{ height: "30vh" }}>
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: theme.primary }}
            className="projectname"
          >
            {name}
          </h2>
          <p>{desc}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // border: "2px solid yellow",
            height: "16vh",
            // gap: "5px",
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
            {tags.map((tag, id) => (
              <span key={id}>{tag} | </span>
            ))}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            // border: "2px solid pink",
            justifyContent: "space-evenly",
          }}
        >
          {/* <a href={code} target="_blank">
            Github Link
          </a>
          <a href={demo} target="_blank">
            Live Link
          </a> */}
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-demo`}
            title="See Demo"
          >
            <FaPlay
              id={`${name.replace(" ", "-").toLowerCase()}-demo`}
              className={classes.icon}
              aria-label="Demo"
            />
          </a>
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
            aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
              .replace(" ", "-")
              .toLowerCase()}-code`}
            title="See Codebase"
          >
            <FaCode
              id={`${name.replace(" ", "-").toLowerCase()}-code`}
              className={classes.icon}
              aria-label="Code"
            />
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default SingleProject;
