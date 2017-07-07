import { get } from 'lodash';

import { fetchApiChunked } from '@ncigdc/utils/ajax';

const FETCH_ALL_GENES = process.env.NODE_ENV !== 'test';

function updateMap(map, ids, hits) {
  hits.forEach(hit => {
    ids.forEach(field => {
      []
        .concat(get(hit, field, []))
        .forEach(value => (map[value.toUpperCase()] = hit));
    });
  });
}

export const GENE_ID_FIELDS = [
  'symbol',
  'gene_id',
  'external_db_ids.entrez_gene',
  'external_db_ids.hgnc',
  'external_db_ids.uniprotkb_swissprot',
  'external_db_ids.omim_gene',
];

export const geneMap = {};
export const validateGenes = validate(GENE_ID_FIELDS, geneMap, 'gene', 'genes');

let allGenePromise = null;
function fetchAllGenes() {
  allGenePromise = fetchApiChunked('genes', {
    headers: { 'Content-Type': 'application/json' },
    body: {
      fields: GENE_ID_FIELDS.join(','),
    },
  }).then(response => {
    updateMap(geneMap, GENE_ID_FIELDS, response.data.hits);
  });
}
FETCH_ALL_GENES && fetchAllGenes();

function validate(idFields, map, field, endpoint) {
  return async (ids = [], onValidatingStateChange) => {
    const notValidatedIds = ids.filter(g => typeof map[g] === 'undefined');
    if (notValidatedIds.length <= 0) return;

    onValidatingStateChange(true);
    if (!allGenePromise) {
      const response = await fetchApiChunked(endpoint, {
        headers: { 'Content-Type': 'application/json' },
        body: {
          size: notValidatedIds.length,
          fields: idFields.join(','),
          filters: {
            op: 'IN',
            content: {
              field: `${field}_autocomplete.lowercase`,
              value: notValidatedIds.map(s => s.toLowerCase()),
            },
          },
        },
      });
      notValidatedIds.forEach(g => (map[g] = map[g] || null));
      updateMap(map, idFields, response.data.hits);
    } else {
      await allGenePromise;
      notValidatedIds.forEach(g => (map[g] = map[g] || null));
    }

    onValidatingStateChange(false);
  };
}
