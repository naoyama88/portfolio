import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUl = Styled.ul`
  padding-left: 20px;
`;

const ProjectContainer = Styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 40px;
`;

const ProjectUl = Styled.ul`
  padding-left: 20px;
`;

const ProjectLi = Styled.li`
  padding-bottom: 20px;
`;

const StyledLi = Styled.li`
  &:before {
    content: "- ";
    text-indent: -5px;
  }
  padding-bottom: 7px;
`;

const StyledH4 = Styled.h4`
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 12px;
`;

const ProjectImg = Styled.img`
  width: 100%;
`;

const Projects = (props) => {
  const { projects } = props;
  return (
    <ProjectContainer>
      <div className="left">
        <StyledUl>
          {projects.projects.map((project) => {
            return (
              <ProjectLi>
                <section key={project.id}>
                  <StyledH4>{project.title}</StyledH4>
                  <ProjectUl>
                    {project.descriptions.map((description) => {
                      return <StyledLi key={description.id}>{description.content}</StyledLi>;
                    })}
                  </ProjectUl>
                </section>
              </ProjectLi>
            );
          })}
        </StyledUl>
      </div>
      {console.log(projects.imgSrc)}
        {typeof projects.imgSrc !== 'undefined' &&
          <div className="right">
            <ProjectImg src={`/portfolio/${projects.imgSrc}`} alt={projects.imgAlt} />
          </div>
        }
    </ProjectContainer>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
  }).isRequired,
};

export default Projects;
