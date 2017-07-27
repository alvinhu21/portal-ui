import React from 'react';
import { withProps } from 'recompose';
import { debounce } from 'lodash';

import {
  validateCases,
  CASE_ID_FIELDS,
  caseMap,
  CASE_ID_FIELD_DISPLAY,
  validateGenes,
  GENE_ID_FIELDS,
  geneMap,
  GENE_ID_FIELD_DISPLAY,
} from '@ncigdc/utils/validateIds';
import CreateExploreCaseSetButton from '@ncigdc/modern_components/CreateSetButton/CreateExploreCaseSetButton';
import CreateRepositoryCaseSetButton from '@ncigdc/modern_components/CreateSetButton/CreateRepositoryCaseSetButton';
import CreateExploreGeneSetButton from '@ncigdc/modern_components/CreateSetButton/CreateExploreGeneSetButton';
import { SpinnerIcon } from '@ncigdc/theme/icons';

import SetInput from './SetInput';
import { CaseMappingTable, GeneMappingTable } from './MappingTable';
import CreateSetButton from './CreateSetButton';
import Base from './Base.js';

const caseValidateHits = debounce(validateCases, 200);
function createUploadCaseSet(CreateButton) {
  return withProps(() => ({
    CreateSetButton: withProps(() => ({
      CreateButton,
      idFields: CASE_ID_FIELDS,
      mainField: 'cases.case_id',
    }))(CreateSetButton),
    SetInput: withProps(() => ({
      type: 'case',
      placeholder:
        'e.g. c86ff390-e3fe-44f9-8f26-e7c7dd6c5536, TCGA-DD-AAVP-10A-01D-A40U-10, 6b763295-c8d2-47ad-91e9-3de0f8458139, TCGA-DD-AAVP-10A-01D, TCGA-DD-AAVP, 0004d251-3f70-4395-b175-c94c2f5b1b81, d9a46ed2-fe56-456a-a241-6609c8d97245, TCGA-DD-AAVP-10A-01, 9ea47c2e-47a7-443d-99f0-f9b50a4729a6, TCGA-DD-AAVP-10A, 55f36120-46fb-4c88-b137-81798b011a9f, TCGA-04-1655-01A-01-BS1',
      helpText: (
        <div>
          <div style={{ maxWidth: '50rem', whiteSpace: 'initial' }}>
            - Case identifier accepted:{' '}
            {Object.values(CASE_ID_FIELD_DISPLAY).join(', ')}
          </div>
          - Delimiters between gene identifiers: comma, space, tab or 1 case
          identifier per line<br />
          - If you upload a file, format file is text file (.txt, .csv, .tsv)
        </div>
      ),
    }))(SetInput),
    MappingTable: CaseMappingTable,

    validateHits: caseValidateHits,
    idMap: caseMap,
    heading: 'Upload Case Set',
    validatingMessage: <span><SpinnerIcon /> validating cases</span>,
  }))(Base);
}

export const UploadSetExploreCase = createUploadCaseSet(
  CreateExploreCaseSetButton,
);
export const UploadSetRepositoryCase = createUploadCaseSet(
  CreateRepositoryCaseSetButton,
);

const geneValidateHits = debounce(validateGenes, 200);

export const UploadSetExploreGene = withProps(() => ({
  CreateSetButton: withProps(() => ({
    CreateButton: CreateExploreGeneSetButton,
    idFields: GENE_ID_FIELDS,
    mainField: 'genes.gene_id',
  }))(CreateSetButton),
  SetInput: withProps(() => ({
    type: 'gene',
    placeholder: 'e.g. ENSG00000155657, TTN, 7273, HGNC:12403, 188840, Q8WZ42',
    helpText: (
      <div>
        <div style={{ maxWidth: '50rem', whiteSpace: 'initial' }}>
          - Gene identifier accepted:{' '}
          {Object.values(GENE_ID_FIELD_DISPLAY).join(', ')}
        </div>
        - Delimiters between gene identifiers: comma, space, tab or 1 gene
        identifier per line<br />
        - If you upload a file, format file is text file (.txt, .csv,
        .tsv)
      </div>
    ),
  }))(SetInput),
  MappingTable: GeneMappingTable,

  validateHits: geneValidateHits,
  idMap: geneMap,
  heading: 'Upload Gene Set',
  validatingMessage: <span><SpinnerIcon /> validating genes</span>,
}))(Base);
