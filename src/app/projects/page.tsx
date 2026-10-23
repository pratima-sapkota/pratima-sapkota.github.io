'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { projects } from '@/data/projects';

const statusColors: Record<string, string> = {
  live: 'text-matrix-green',
  completed: 'text-matrix-cyan',
  archived: 'text-text-muted',
  learning: 'text-matrix-purple',
};

const statusLabels: Record<string, string> = {
  live: 'LIVE',
  completed: 'DONE',
  archived: 'ARCH',
  learning: 'LEARN',
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Command header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8"
      >
        <span className="text-matrix-amber">$</span>
        <span className="text-matrix-green ml-2">ls -la projects/</span>
      </motion.div>

      {/* Directory listing header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="font-mono text-sm text-text-muted mb-4 hidden md:block"
      >
        <div className="grid grid-cols-12 gap-2">
          <span className="col-span-2">permissions</span>
          <span className="col-span-1">owner</span>
          <span className="col-span-2">size</span>
          <span className="col-span-2">date</span>
          <span className="col-span-5">name</span>
        </div>
        <div className="border-b border-matrix-green-dim mt-1" />
      </motion.div>

      {/* Project list */}
      <div className="space-y-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {/* Directory row */}
            <div
              className={`font-mono text-sm cursor-pointer p-2 hover:bg-matrix-green/10 transition-colors
                ${selectedProject === project.id ? 'bg-matrix-green/10 border-l-2 border-matrix-green' : ''}`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Desktop view */}
              <div className="hidden md:grid grid-cols-12 gap-2 items-center">
                <span className="col-span-2 text-matrix-cyan">drwxr-xr-x</span>
                <span className="col-span-1 text-text-muted">pratima</span>
                <span className="col-span-2 text-text-muted">
                  {project.technologies.length} deps
                </span>
                <span className="col-span-2 text-text-muted">{project.period.split(' ')[0]}</span>
                <span className="col-span-5 flex items-center gap-2">
                  <span className="text-matrix-green">{project.name}/</span>
                  <span className={`text-xs ${statusColors[project.status]}`}>
                    [{statusLabels[project.status]}]
                  </span>
                </span>
              </div>

              {/* Mobile view */}
              <div className="md:hidden">
                <div className="flex items-center justify-between">
                  <span className="text-matrix-green">{project.name}/</span>
                  <span className={`text-xs ${statusColors[project.status]}`}>
                    [{statusLabels[project.status]}]
                  </span>
                </div>
                <div className="text-text-muted text-xs mt-1">{project.period}</div>
              </div>
            </div>

            {/* Expanded project details */}
            {selectedProject === project.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="terminal-window mt-2 ml-0 md:ml-8"
              >
                <div className="terminal-header">
                  <div className="terminal-dot red" />
                  <div className="terminal-dot yellow" />
                  <div className="terminal-dot green" />
                  <span className="text-text-muted text-sm ml-2">
                    cat {project.name}/README.md
                  </span>
                </div>
                <div className="p-4">
                  {/* Project title */}
                  <h3 className="text-matrix-green text-xl font-bold mb-2">
                    # {project.name}
                  </h3>
                  <p className="text-text-secondary mb-4">{project.description}</p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-2 py-1 bg-matrix-amber/20 text-matrix-amber text-xs font-mono"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="text-matrix-cyan text-sm mb-2">## Highlights</div>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-matrix-green">-</span>
                          <span className="text-text-secondary">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="text-matrix-cyan text-sm mb-2">## Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-terminal-bg-light
                                   text-matrix-green border border-matrix-green-dim"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-matrix-cyan hover:text-glow-subtle text-sm"
                      >
                        [Live Demo]
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-matrix-cyan hover:text-glow-subtle text-sm"
                      >
                        [GitHub]
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-text-muted text-sm font-mono"
      >
        total {projects.length} projects
      </motion.div>
    </div>
  );
}
