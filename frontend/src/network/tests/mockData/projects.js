import { TM_DEFAULT_CHANGESET_COMMENT } from '../../../config';

export const getProjectSummary = (id) => ({
  projectId: id,
  defaultLocale: 'en',
  author: 'test_user',
  created: '2019-08-27T12:18:07.186897Z',
  dueDate: '2020-04-07T12:20:42.460024Z',
  lastUpdated: '2020-06-22T10:16:16.076317Z',
  projectPriority: 'URGENT',
  campaigns: [
    {
      id: 3,
      name: 'Environment Conservation',
    },
    {
      id: 5,
      name: 'Women security',
    },
  ],
  organisation: 32,
  organisationName: 'HOT',
  organisationLogo: 'https://www.missingmaps.org/assets/graphics/content/logos/hot_logo.png',
  countryTag: ['Bolivia'],
  osmchaFilterId: '9322aa63-cccc-4d0d-9f93-403678e52345',
  mappingTypes: ['BUILDINGS'],
  changesetComment: `${TM_DEFAULT_CHANGESET_COMMENT}-${id} #brumado-buildings`,
  percentMapped: 16,
  percentValidated: 6,
  percentBadImagery: 0,
  aoiCentroid: {
    type: 'Point',
    coordinates: [-41.669134813, -14.20341561],
  },
  difficulty: 'EASY',
  mappingPermission: 'LEVEL',
  validationPermission: 'LEVEL',
  allowedUsernames: [],
  enforceRandomTaskSelection: false,
  private: false,
  teams: [],
  projectInfo: {
    locale: 'en',
    name: 'La Paz Buildings',
    shortDescription: 'La Paz buildings mapping  [here](http://localhost:8111/import).',
    description: 'La Paz buildings mapping  [here](http://localhost:8111/import).',
    instructions:
      'Project Specific Mapping Notes: Bing appears to be the best imagery for the area, you may need to align it with GPS or existing roads, but will likely need to adjust the roads with this better/most recent imagery.* `Please improve existing incorrectly mapped elements by moving and adjusting, rather than deleting, if they do not line up with the imagery.`',
    perTaskInstructions:
      'This task involves loading extra data. Click [here](http://localhost:8111/import?new_layer=true&amp;url=http://www.domain.com/data/{x}/{y}/{z}/routes_2009.osm) to load the data into JOSM.',
  },
  shortDescription: null,
  status: 'PUBLISHED',
  imagery: null,
  licenseId: null,
  idPresets: ['building/house', 'building/residential', 'building'],
  mappingEditors: ['ID', 'JOSM'],
  validationEditors: ['JOSM', 'POTLATCH_2', 'FIELD_PAPERS'],
});

export const getProjectStats = (id) => ({
  projectId: id,
  'projectArea(in sq.km)': 3506.03997973834,
  totalMappers: 105,
  totalTasks: 2779,
  totalComments: 47,
  totalMappingTime: 2186584,
  totalValidationTime: 589857,
  totalTimeSpent: 2776441,
  averageMappingTime: 679.2743087915502,
  averageValidationTime: 202.14427690198767,
  percentMapped: 100,
  percentValidated: 100,
  percentBadImagery: 0,
  aoiCentroid: {
    type: 'Point',
    coordinates: [-7.56545195794146, 13.0603087530714],
  },
  timeToFinishMapping: 0,
  timeToFinishValidating: 0,
});

export const projects = {
  mapResults: [],
  results: [
    {
      projectId: 7935,
      locale: 'en',
      name: 'NRCS_Duduwa Mapping',
      shortDescription:
        'Nepal Red Cross society is mapping Duduwa Rural municipality under the Preparedness For Emergency Response  programme. The current Action is a continuation and consolidation of the previous two projects aiming at enhancing preparedness for emergency response through the development and establishment of national systems and mechanisms, in line with the new Federal structure and in the framework of the DRR/M Act (2074). \nThe Action is in line with the DG ECHO in terms of Preparedness for emergency response in the Western Parts.',
      difficulty: 'EASY',
      priority: 'MEDIUM',
      organisationName: 'IFRC',
      organisationLogo: 'https://dummyimage.com/600x400/000/fff',
      campaigns: [{ id: 74, name: 'Banke Nepal' }],
      percentMapped: 75,
      percentValidated: 5,
      status: 'PUBLISHED',
      activeMappers: 0,
      lastUpdated: '2020-05-01T11:03:43.689732Z',
      dueDate: '2023-03-10T21:00:00.000000Z',
      totalContributors: 50,
      country: ['Nepal'],
    },
    {
      projectId: 8006,
      locale: 'en',
      name: 'NRCS_Khajura Mapping',
      shortDescription:
        'Nepal Red Cross society is mapping Khajura Rural municipality under the Preparedness For Emergency Response  programme. The current Action is a continuation and consolidation of the previous two projects aiming at enhancing preparedness for emergency response through the development and establishment of national systems and mechanisms, in line with the new Federal structure and in the framework of the DRR/M Act (2074). \nThe Action is in line with the DG ECHO in terms of Preparedness for emergency response in the Western Parts.',
      difficulty: 'EASY',
      priority: 'MEDIUM',
      organisationName: 'IFRC',
      organisationLogo: null,
      campaigns: [{ id: 74, name: 'Banke Nepal' }],
      percentMapped: 87,
      percentValidated: 0,
      status: 'DRAFT',
      activeMappers: 0,
      lastUpdated: '2020-04-26T12:28:30.870191Z',
      dueDate: null,
      totalContributors: 79,
      country: ['Nepal'],
    },
  ],
  pagination: {
    hasNext: false,
    hasPrev: false,
    nextNum: null,
    page: 1,
    pages: 1,
    prevNum: null,
    perPage: 14,
    total: 2,
  },
};

export const userTouchedProjects = {
  mappedProjects: [
    {
      projectId: 8629,
      name: 'tessttt',
      tasksMapped: 1,
      tasksValidated: 0,
      status: 'DRAFT',
      centroid: {
        type: 'Point',
        coordinates: [47.119799174, 14.300025921],
      },
    },
  ],
};
