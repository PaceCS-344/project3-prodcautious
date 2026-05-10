import { useEffect, useMemo, useState } from "react";
import AccordionItem from "./ui/accordion";
import { projects } from "../data/portfolio";

const githubUsername = "prodcautious";

function formatDate(dateString) {
  if (!dateString) {
    return "recently";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

function repoToProject(repo) {
  const language = repo.language || "Code";

  return {
    id: repo.id,
    name: repo.name,
    description: repo.description || "No description added yet.",
    tags: [language],
    skillsUsed: [language],
    details: `Updated ${formatDate(repo.updated_at)}. Stars: ${repo.stargazers_count}. Watchers: ${repo.watchers_count}. Open issues: ${repo.open_issues_count}.`,
    link: repo.html_url,
  };
}

function matchesProject(project, query) {
  if (!query) {
    return true;
  }

  return [
    project.name,
    project.description,
    project.details,
    ...(project.tags || []),
    ...(project.skillsUsed || []),
  ]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export default function Projects({ searchTerm = "" }) {
  const [githubProjects, setGithubProjects] = useState([]);
  const [repoSearch, setRepoSearch] = useState("");
  const [openProject, setOpenProject] = useState(projects[0]?.id || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}/repos?sort=pushed&direction=desc&per_page=6`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        const repos = await response.json();
        const publicRepos = repos
          .filter((repo) => !repo.fork)
          .map(repoToProject);

        setGithubProjects(publicRepos);
        setOpenProject(publicRepos[0]?.id || projects[0]?.id || null);
        setError("");
      } catch (requestError) {
        if (requestError.name !== "AbortError") {
          setError("Could not load GitHub repos, showing saved projects.");
        }
      } finally {
        setLoading(false);
      }
    }

    loadRepos();

    return () => controller.abort();
  }, []);

  const allProjects = githubProjects.length ? githubProjects : projects;
  const combinedSearch = [searchTerm, repoSearch]
    .join(" ")
    .trim()
    .toLowerCase();
  const filteredProjects = useMemo(
    () => allProjects.filter((project) => matchesProject(project, combinedSearch)),
    [allProjects, combinedSearch]
  );

  useEffect(() => {
    if (
      filteredProjects.length &&
      !filteredProjects.some((project) => project.id === openProject)
    ) {
      setOpenProject(filteredProjects[0].id);
    }
  }, [filteredProjects, openProject]);

  return (
    <section
      id="projects"
      className={`section-shell ${
        combinedSearch && filteredProjects.length ? "search-match" : ""
      }`}
    >
      <p className="section-label">Projects</p>

      <div className="project-tools">
        <input
          type="search"
          value={repoSearch}
          onChange={(event) => setRepoSearch(event.target.value)}
          placeholder="Filter repos by name or language"
          aria-label="Filter GitHub repositories"
        />
        {loading && <span className="project-status">Loading GitHub repos...</span>}
        {error && <span className="project-status">{error}</span>}
      </div>

      <div className="accordion-list">
        {filteredProjects.map((project) => (
          <AccordionItem
            key={project.id}
            title={project.name}
            subtitle={project.description}
            tags={project.tags}
            details={project.details}
            skillsUsed={project.skillsUsed}
            link={project.link}
            isOpen={openProject === project.id}
            onToggle={() =>
              setOpenProject((current) =>
                current === project.id ? null : project.id
              )
            }
          />
        ))}

        {!filteredProjects.length && (
          <p className="section-copy">No projects matched that search.</p>
        )}
      </div>
    </section>
  );
}
