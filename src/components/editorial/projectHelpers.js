export const projectType = (project) => {
  if (/adu/i.test(project.category)) return 'ADU';
  if (/rebuild|new construction/i.test(project.category)) return 'New construction';
  if (/addition/i.test(project.category)) return 'Addition & remodel';
  return 'Remodel';
};
export const projectName = (project) => `${project.location} ${projectType(project) === 'New construction' ? 'Residence' : projectType(project) === 'ADU' ? 'ADU' : 'Renovation'}`;
