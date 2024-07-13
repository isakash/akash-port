import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import ProjectCard from '../../comon/ProjectCard';
//src,link,h3 aur p ko change karna hai sab me aur apne project ka github link copy karke dal dena
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
            src={viberr} 
            link="https://github.com/a3ro-dev/python_codes_"
            h3="Viberr"
            p="Streaming App"
        />
        <ProjectCard 
            src={freshBurger} 
            link="https://github.com/a3ro-dev/python_codes_"
            h3="Fresh Burger"
            p="Food App"
        />
        <ProjectCard 
            src={hipsster} 
            link="https://github.com/a3ro-dev/python_codes_"
            h3="Hipssters"
            p="Googles Accessories"
        />
      </div>
    </section>
  );
}

export default Projects;
