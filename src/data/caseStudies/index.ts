import FlowboardCaseStudy from './flowboard.mdx';
import PlaycreateCaseStudy from './playcreate.mdx';
import PlanthopperCaseStudy from './planthopper.mdx';

export const caseStudyComponentBySlug: Record<string, any> = {
  flowboard: FlowboardCaseStudy,
  playcreate: PlaycreateCaseStudy,
  'plant-hopper': PlanthopperCaseStudy,
};

export const caseStudyTitleBySlug: Record<string, string> = {
  flowboard: 'FlowBoard — My First Viral Open Source Project',
  playcreate: 'PlayCreate — Case Study',
  'plant-hopper': 'Plant Hopper — Case Study',
};

