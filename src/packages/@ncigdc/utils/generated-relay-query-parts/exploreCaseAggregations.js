/* @flow */
/* eslint max-len:0, comma-dangle:0 */

import Relay from 'react-relay/classic';

export const initialECaseAggregationsVariables = {
  shouldShow_available_variation_data: false,
  shouldShow_case_autocomplete: false,
  shouldShow_case_id: false,
  shouldShow_created_datetime: false,
  shouldShow_days_to_index: false,
  shouldShow_demographic__created_datetime: false,
  shouldShow_demographic__demographic_id: false,
  shouldShow_demographic__ethnicity: false,
  shouldShow_demographic__gender: false,
  shouldShow_demographic__race: false,
  shouldShow_demographic__state: false,
  shouldShow_demographic__submitter_id: false,
  shouldShow_demographic__updated_datetime: false,
  shouldShow_demographic__year_of_birth: false,
  shouldShow_demographic__year_of_death: false,
  shouldShow_diagnoses__age_at_diagnosis: false,
  shouldShow_diagnoses__ajcc_clinical_m: false,
  shouldShow_diagnoses__ajcc_clinical_n: false,
  shouldShow_diagnoses__ajcc_clinical_stage: false,
  shouldShow_diagnoses__ajcc_clinical_t: false,
  shouldShow_diagnoses__ajcc_pathologic_m: false,
  shouldShow_diagnoses__ajcc_pathologic_n: false,
  shouldShow_diagnoses__ajcc_pathologic_stage: false,
  shouldShow_diagnoses__ajcc_pathologic_t: false,
  shouldShow_diagnoses__ann_arbor_b_symptoms: false,
  shouldShow_diagnoses__ann_arbor_clinical_stage: false,
  shouldShow_diagnoses__ann_arbor_extranodal_involvement: false,
  shouldShow_diagnoses__ann_arbor_pathologic_stage: false,
  shouldShow_diagnoses__burkitt_lymphoma_clinical_variant: false,
  shouldShow_diagnoses__cause_of_death: false,
  shouldShow_diagnoses__circumferential_resection_margin: false,
  shouldShow_diagnoses__classification_of_tumor: false,
  shouldShow_diagnoses__colon_polyps_history: false,
  shouldShow_diagnoses__created_datetime: false,
  shouldShow_diagnoses__days_to_birth: false,
  shouldShow_diagnoses__days_to_death: false,
  shouldShow_diagnoses__days_to_hiv_diagnosis: false,
  shouldShow_diagnoses__days_to_last_follow_up: false,
  shouldShow_diagnoses__days_to_last_known_disease_status: false,
  shouldShow_diagnoses__days_to_new_event: false,
  shouldShow_diagnoses__days_to_recurrence: false,
  shouldShow_diagnoses__diagnosis_id: false,
  shouldShow_diagnoses__figo_stage: false,
  shouldShow_diagnoses__hiv_positive: false,
  shouldShow_diagnoses__hpv_positive_type: false,
  shouldShow_diagnoses__hpv_status: false,
  shouldShow_diagnoses__last_known_disease_status: false,
  shouldShow_diagnoses__laterality: false,
  shouldShow_diagnoses__ldh_level_at_diagnosis: false,
  shouldShow_diagnoses__ldh_normal_range_upper: false,
  shouldShow_diagnoses__lymph_nodes_positive: false,
  shouldShow_diagnoses__lymphatic_invasion_present: false,
  shouldShow_diagnoses__method_of_diagnosis: false,
  shouldShow_diagnoses__morphology: false,
  shouldShow_diagnoses__new_event_anatomic_site: false,
  shouldShow_diagnoses__new_event_type: false,
  shouldShow_diagnoses__perineural_invasion_present: false,
  shouldShow_diagnoses__primary_diagnosis: false,
  shouldShow_diagnoses__prior_malignancy: false,
  shouldShow_diagnoses__prior_treatment: false,
  shouldShow_diagnoses__progression_or_recurrence: false,
  shouldShow_diagnoses__residual_disease: false,
  shouldShow_diagnoses__site_of_resection_or_biopsy: false,
  shouldShow_diagnoses__state: false,
  shouldShow_diagnoses__submitter_id: false,
  shouldShow_diagnoses__tissue_or_organ_of_origin: false,
  shouldShow_diagnoses__treatments__created_datetime: false,
  shouldShow_diagnoses__treatments__days_to_treatment: false,
  shouldShow_diagnoses__treatments__days_to_treatment_end: false,
  shouldShow_diagnoses__treatments__days_to_treatment_start: false,
  shouldShow_diagnoses__treatments__state: false,
  shouldShow_diagnoses__treatments__submitter_id: false,
  shouldShow_diagnoses__treatments__therapeutic_agents: false,
  shouldShow_diagnoses__treatments__treatment_anatomic_site: false,
  shouldShow_diagnoses__treatments__treatment_id: false,
  shouldShow_diagnoses__treatments__treatment_intent_type: false,
  shouldShow_diagnoses__treatments__treatment_or_therapy: false,
  shouldShow_diagnoses__treatments__treatment_outcome: false,
  shouldShow_diagnoses__treatments__treatment_type: false,
  shouldShow_diagnoses__treatments__updated_datetime: false,
  shouldShow_diagnoses__tumor_grade: false,
  shouldShow_diagnoses__tumor_stage: false,
  shouldShow_diagnoses__updated_datetime: false,
  shouldShow_diagnoses__vascular_invasion_present: false,
  shouldShow_diagnoses__vital_status: false,
  shouldShow_diagnoses__year_of_diagnosis: false,
  shouldShow_disease_type: false,
  shouldShow_exposures__alcohol_history: false,
  shouldShow_exposures__alcohol_intensity: false,
  shouldShow_exposures__bmi: false,
  shouldShow_exposures__cigarettes_per_day: false,
  shouldShow_exposures__created_datetime: false,
  shouldShow_exposures__exposure_id: false,
  shouldShow_exposures__height: false,
  shouldShow_exposures__pack_years_smoked: false,
  shouldShow_exposures__state: false,
  shouldShow_exposures__submitter_id: false,
  shouldShow_exposures__tobacco_smoking_onset_year: false,
  shouldShow_exposures__tobacco_smoking_quit_year: false,
  shouldShow_exposures__tobacco_smoking_status: false,
  shouldShow_exposures__updated_datetime: false,
  shouldShow_exposures__weight: false,
  shouldShow_exposures__years_smoked: false,
  shouldShow_family_histories__created_datetime: false,
  shouldShow_family_histories__family_history_id: false,
  shouldShow_family_histories__relationship_age_at_diagnosis: false,
  shouldShow_family_histories__relationship_gender: false,
  shouldShow_family_histories__relationship_primary_diagnosis: false,
  shouldShow_family_histories__relationship_type: false,
  shouldShow_family_histories__relative_with_cancer_history: false,
  shouldShow_family_histories__state: false,
  shouldShow_family_histories__submitter_id: false,
  shouldShow_family_histories__updated_datetime: false,
  shouldShow_gene__biotype: false,
  shouldShow_gene__gene_id: false,
  shouldShow_gene__is_cancer_gene_census: false,
  shouldShow_gene__ssm__chromosome: false,
  shouldShow_gene__ssm__consequence__consequence_id: false,
  shouldShow_gene__ssm__consequence__transcript__aa_change: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__amino_acids: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__ccds: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__cdna_position: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__cds_end: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__cds_length: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__cds_position: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__cds_start: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__clin_sig: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__codons: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__dbsnp_rs: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__dbsnp_val_status: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__domains: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__ensp: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__existing_variation: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__hgvsc: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__hgvsp: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__hgvsp_short: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__impact: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__polyphen: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__protein_position: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__pubmed: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__sift: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__swissprot: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__transcript_id: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__trembl: false,
  shouldShow_gene__ssm__consequence__transcript__annotation__uniparc: false,
  shouldShow_gene__ssm__consequence__transcript__consequence_type: false,
  shouldShow_gene__ssm__consequence__transcript__ref_seq_accession: false,
  shouldShow_gene__ssm__consequence__transcript__transcript_id: false,
  shouldShow_gene__ssm__cosmic_id: false,
  shouldShow_gene__ssm__end_position: false,
  shouldShow_gene__ssm__genomic_dna_change: false,
  shouldShow_gene__ssm__mutation_subtype: false,
  shouldShow_gene__ssm__mutation_type: false,
  shouldShow_gene__ssm__ncbi_build: false,
  shouldShow_gene__ssm__observation__center: false,
  shouldShow_gene__ssm__observation__input_bam_file__normal_bam_uuid: false,
  shouldShow_gene__ssm__observation__input_bam_file__tumor_bam_uuid: false,
  shouldShow_gene__ssm__observation__mutation_status: false,
  shouldShow_gene__ssm__observation__normal_genotype__match_norm_seq_allele1: false,
  shouldShow_gene__ssm__observation__normal_genotype__match_norm_seq_allele2: false,
  shouldShow_gene__ssm__observation__observation_id: false,
  shouldShow_gene__ssm__observation__read_depth__n_depth: false,
  shouldShow_gene__ssm__observation__read_depth__t_alt_count: false,
  shouldShow_gene__ssm__observation__read_depth__t_depth: false,
  shouldShow_gene__ssm__observation__read_depth__t_ref_count: false,
  shouldShow_gene__ssm__observation__sample__matched_norm_sample_barcode: false,
  shouldShow_gene__ssm__observation__sample__matched_norm_sample_uuid: false,
  shouldShow_gene__ssm__observation__sample__tumor_sample_barcode: false,
  shouldShow_gene__ssm__observation__sample__tumor_sample_uuid: false,
  shouldShow_gene__ssm__observation__src_vcf_id: false,
  shouldShow_gene__ssm__observation__tumor_genotype__tumor_seq_allele1: false,
  shouldShow_gene__ssm__observation__tumor_genotype__tumor_seq_allele2: false,
  shouldShow_gene__ssm__observation__validation__tumor_validation_allele1: false,
  shouldShow_gene__ssm__observation__validation__tumor_validation_allele2: false,
  shouldShow_gene__ssm__observation__validation__validation_method: false,
  shouldShow_gene__ssm__observation__variant_calling__variant_caller: false,
  shouldShow_gene__ssm__observation__variant_calling__variant_process: false,
  shouldShow_gene__ssm__reference_allele: false,
  shouldShow_gene__ssm__ssm_id: false,
  shouldShow_gene__ssm__start_position: false,
  shouldShow_gene__ssm__tumor_allele: false,
  shouldShow_gene__symbol: false,
  shouldShow_primary_site: false,
  shouldShow_project__dbgap_accession_number: false,
  shouldShow_project__disease_type: false,
  shouldShow_project__intended_release_date: false,
  shouldShow_project__name: false,
  shouldShow_project__primary_site: false,
  shouldShow_project__program__dbgap_accession_number: false,
  shouldShow_project__program__name: false,
  shouldShow_project__program__program_id: false,
  shouldShow_project__project_id: false,
  shouldShow_project__releasable: false,
  shouldShow_project__released: false,
  shouldShow_project__state: false,
  shouldShow_state: false,
  shouldShow_submitter_id: false,
  shouldShow_summary__data_categories__data_category: false,
  shouldShow_summary__data_categories__file_count: false,
  shouldShow_summary__experimental_strategies__experimental_strategy: false,
  shouldShow_summary__experimental_strategies__file_count: false,
  shouldShow_summary__file_count: false,
  shouldShow_summary__file_size: false,
  shouldShow_tissue_source_site__bcr_id: false,
  shouldShow_tissue_source_site__code: false,
  shouldShow_tissue_source_site__name: false,
  shouldShow_tissue_source_site__project: false,
  shouldShow_tissue_source_site__tissue_source_site_id: false,
  shouldShow_updated_datetime: false,
};

export const exploreCaseAggregationsFragment = () => Relay.QL`
  fragment on ECaseAggregations {
    
available_variation_data @include(if: $shouldShow_available_variation_data) {
  
      buckets {
        doc_count
        key
      }
      
}

case_autocomplete @include(if: $shouldShow_case_autocomplete) {
  
      buckets {
        doc_count
        key
      }
      
}

case_id @include(if: $shouldShow_case_id) {
  
      buckets {
        doc_count
        key
      }
      
}


days_to_index @include(if: $shouldShow_days_to_index) {
  
      count
      max
      avg
      min
    
}


demographic__demographic_id @include(if: $shouldShow_demographic__demographic_id) {
  
      buckets {
        doc_count
        key
      }
      
}

demographic__ethnicity @include(if: $shouldShow_demographic__ethnicity) {
  
      buckets {
        doc_count
        key
      }
      
}

demographic__gender @include(if: $shouldShow_demographic__gender) {
  
      buckets {
        doc_count
        key
      }
      
}

demographic__race @include(if: $shouldShow_demographic__race) {
  
      buckets {
        doc_count
        key
      }
      
}

demographic__state @include(if: $shouldShow_demographic__state) {
  
      buckets {
        doc_count
        key
      }
      
}

demographic__submitter_id @include(if: $shouldShow_demographic__submitter_id) {
  
      buckets {
        doc_count
        key
      }
      
}


demographic__year_of_birth @include(if: $shouldShow_demographic__year_of_birth) {
  
      count
      max
      avg
      min
    
}

demographic__year_of_death @include(if: $shouldShow_demographic__year_of_death) {
  
      count
      max
      avg
      min
    
}

diagnoses__age_at_diagnosis @include(if: $shouldShow_diagnoses__age_at_diagnosis) {
  
      count
      max
      avg
      min
    
}

diagnoses__ajcc_clinical_m @include(if: $shouldShow_diagnoses__ajcc_clinical_m) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_clinical_n @include(if: $shouldShow_diagnoses__ajcc_clinical_n) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_clinical_stage @include(if: $shouldShow_diagnoses__ajcc_clinical_stage) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_clinical_t @include(if: $shouldShow_diagnoses__ajcc_clinical_t) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_pathologic_m @include(if: $shouldShow_diagnoses__ajcc_pathologic_m) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_pathologic_n @include(if: $shouldShow_diagnoses__ajcc_pathologic_n) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_pathologic_stage @include(if: $shouldShow_diagnoses__ajcc_pathologic_stage) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ajcc_pathologic_t @include(if: $shouldShow_diagnoses__ajcc_pathologic_t) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ann_arbor_b_symptoms @include(if: $shouldShow_diagnoses__ann_arbor_b_symptoms) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ann_arbor_clinical_stage @include(if: $shouldShow_diagnoses__ann_arbor_clinical_stage) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ann_arbor_extranodal_involvement @include(if: $shouldShow_diagnoses__ann_arbor_extranodal_involvement) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ann_arbor_pathologic_stage @include(if: $shouldShow_diagnoses__ann_arbor_pathologic_stage) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__burkitt_lymphoma_clinical_variant @include(if: $shouldShow_diagnoses__burkitt_lymphoma_clinical_variant) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__cause_of_death @include(if: $shouldShow_diagnoses__cause_of_death) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__circumferential_resection_margin @include(if: $shouldShow_diagnoses__circumferential_resection_margin) {
  
      count
      max
      avg
      min
    
}

diagnoses__classification_of_tumor @include(if: $shouldShow_diagnoses__classification_of_tumor) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__colon_polyps_history @include(if: $shouldShow_diagnoses__colon_polyps_history) {
  
      buckets {
        doc_count
        key
      }
      
}


diagnoses__days_to_birth @include(if: $shouldShow_diagnoses__days_to_birth) {
  
      count
      max
      avg
      min
    
}

diagnoses__days_to_death @include(if: $shouldShow_diagnoses__days_to_death) {
  
      count
      max
      avg
      min
    
}

diagnoses__days_to_hiv_diagnosis @include(if: $shouldShow_diagnoses__days_to_hiv_diagnosis) {
  
      count
      max
      avg
      min
    
}

diagnoses__days_to_last_follow_up @include(if: $shouldShow_diagnoses__days_to_last_follow_up) {
  
      count
      max
      avg
      min
    
}

diagnoses__days_to_last_known_disease_status @include(if: $shouldShow_diagnoses__days_to_last_known_disease_status) {
  
      count
      max
      avg
      min
    
}

diagnoses__days_to_new_event @include(if: $shouldShow_diagnoses__days_to_new_event) {
  
      count
      max
      avg
      min
    
}

diagnoses__days_to_recurrence @include(if: $shouldShow_diagnoses__days_to_recurrence) {
  
      count
      max
      avg
      min
    
}

diagnoses__diagnosis_id @include(if: $shouldShow_diagnoses__diagnosis_id) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__figo_stage @include(if: $shouldShow_diagnoses__figo_stage) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__hiv_positive @include(if: $shouldShow_diagnoses__hiv_positive) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__hpv_positive_type @include(if: $shouldShow_diagnoses__hpv_positive_type) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__hpv_status @include(if: $shouldShow_diagnoses__hpv_status) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__last_known_disease_status @include(if: $shouldShow_diagnoses__last_known_disease_status) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__laterality @include(if: $shouldShow_diagnoses__laterality) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__ldh_level_at_diagnosis @include(if: $shouldShow_diagnoses__ldh_level_at_diagnosis) {
  
      count
      max
      avg
      min
    
}

diagnoses__ldh_normal_range_upper @include(if: $shouldShow_diagnoses__ldh_normal_range_upper) {
  
      count
      max
      avg
      min
    
}

diagnoses__lymph_nodes_positive @include(if: $shouldShow_diagnoses__lymph_nodes_positive) {
  
      count
      max
      avg
      min
    
}

diagnoses__lymphatic_invasion_present @include(if: $shouldShow_diagnoses__lymphatic_invasion_present) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__method_of_diagnosis @include(if: $shouldShow_diagnoses__method_of_diagnosis) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__morphology @include(if: $shouldShow_diagnoses__morphology) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__new_event_anatomic_site @include(if: $shouldShow_diagnoses__new_event_anatomic_site) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__new_event_type @include(if: $shouldShow_diagnoses__new_event_type) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__perineural_invasion_present @include(if: $shouldShow_diagnoses__perineural_invasion_present) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__primary_diagnosis @include(if: $shouldShow_diagnoses__primary_diagnosis) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__prior_malignancy @include(if: $shouldShow_diagnoses__prior_malignancy) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__prior_treatment @include(if: $shouldShow_diagnoses__prior_treatment) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__progression_or_recurrence @include(if: $shouldShow_diagnoses__progression_or_recurrence) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__residual_disease @include(if: $shouldShow_diagnoses__residual_disease) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__site_of_resection_or_biopsy @include(if: $shouldShow_diagnoses__site_of_resection_or_biopsy) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__state @include(if: $shouldShow_diagnoses__state) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__submitter_id @include(if: $shouldShow_diagnoses__submitter_id) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__tissue_or_organ_of_origin @include(if: $shouldShow_diagnoses__tissue_or_organ_of_origin) {
  
      buckets {
        doc_count
        key
      }
      
}


diagnoses__treatments__days_to_treatment @include(if: $shouldShow_diagnoses__treatments__days_to_treatment) {
  
      count
      max
      avg
      min
    
}

diagnoses__treatments__days_to_treatment_end @include(if: $shouldShow_diagnoses__treatments__days_to_treatment_end) {
  
      count
      max
      avg
      min
    
}

diagnoses__treatments__days_to_treatment_start @include(if: $shouldShow_diagnoses__treatments__days_to_treatment_start) {
  
      count
      max
      avg
      min
    
}

diagnoses__treatments__state @include(if: $shouldShow_diagnoses__treatments__state) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__submitter_id @include(if: $shouldShow_diagnoses__treatments__submitter_id) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__therapeutic_agents @include(if: $shouldShow_diagnoses__treatments__therapeutic_agents) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__treatment_anatomic_site @include(if: $shouldShow_diagnoses__treatments__treatment_anatomic_site) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__treatment_id @include(if: $shouldShow_diagnoses__treatments__treatment_id) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__treatment_intent_type @include(if: $shouldShow_diagnoses__treatments__treatment_intent_type) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__treatment_or_therapy @include(if: $shouldShow_diagnoses__treatments__treatment_or_therapy) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__treatment_outcome @include(if: $shouldShow_diagnoses__treatments__treatment_outcome) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__treatments__treatment_type @include(if: $shouldShow_diagnoses__treatments__treatment_type) {
  
      buckets {
        doc_count
        key
      }
      
}


diagnoses__tumor_grade @include(if: $shouldShow_diagnoses__tumor_grade) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__tumor_stage @include(if: $shouldShow_diagnoses__tumor_stage) {
  
      buckets {
        doc_count
        key
      }
      
}


diagnoses__vascular_invasion_present @include(if: $shouldShow_diagnoses__vascular_invasion_present) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__vital_status @include(if: $shouldShow_diagnoses__vital_status) {
  
      buckets {
        doc_count
        key
      }
      
}

diagnoses__year_of_diagnosis @include(if: $shouldShow_diagnoses__year_of_diagnosis) {
  
      count
      max
      avg
      min
    
}

disease_type @include(if: $shouldShow_disease_type) {
  
      buckets {
        doc_count
        key
      }
      
}

exposures__alcohol_history @include(if: $shouldShow_exposures__alcohol_history) {
  
      buckets {
        doc_count
        key
      }
      
}

exposures__alcohol_intensity @include(if: $shouldShow_exposures__alcohol_intensity) {
  
      buckets {
        doc_count
        key
      }
      
}

exposures__bmi @include(if: $shouldShow_exposures__bmi) {
  
      count
      max
      avg
      min
    
}

exposures__cigarettes_per_day @include(if: $shouldShow_exposures__cigarettes_per_day) {
  
      count
      max
      avg
      min
    
}


exposures__exposure_id @include(if: $shouldShow_exposures__exposure_id) {
  
      buckets {
        doc_count
        key
      }
      
}

exposures__height @include(if: $shouldShow_exposures__height) {
  
      count
      max
      avg
      min
    
}

exposures__pack_years_smoked @include(if: $shouldShow_exposures__pack_years_smoked) {
  
      count
      max
      avg
      min
    
}

exposures__state @include(if: $shouldShow_exposures__state) {
  
      buckets {
        doc_count
        key
      }
      
}

exposures__submitter_id @include(if: $shouldShow_exposures__submitter_id) {
  
      buckets {
        doc_count
        key
      }
      
}

exposures__tobacco_smoking_onset_year @include(if: $shouldShow_exposures__tobacco_smoking_onset_year) {
  
      count
      max
      avg
      min
    
}

exposures__tobacco_smoking_quit_year @include(if: $shouldShow_exposures__tobacco_smoking_quit_year) {
  
      count
      max
      avg
      min
    
}

exposures__tobacco_smoking_status @include(if: $shouldShow_exposures__tobacco_smoking_status) {
  
      buckets {
        doc_count
        key
      }
      
}


exposures__weight @include(if: $shouldShow_exposures__weight) {
  
      count
      max
      avg
      min
    
}

exposures__years_smoked @include(if: $shouldShow_exposures__years_smoked) {
  
      count
      max
      avg
      min
    
}


family_histories__family_history_id @include(if: $shouldShow_family_histories__family_history_id) {
  
      buckets {
        doc_count
        key
      }
      
}

family_histories__relationship_age_at_diagnosis @include(if: $shouldShow_family_histories__relationship_age_at_diagnosis) {
  
      count
      max
      avg
      min
    
}

family_histories__relationship_gender @include(if: $shouldShow_family_histories__relationship_gender) {
  
      buckets {
        doc_count
        key
      }
      
}

family_histories__relationship_primary_diagnosis @include(if: $shouldShow_family_histories__relationship_primary_diagnosis) {
  
      buckets {
        doc_count
        key
      }
      
}

family_histories__relationship_type @include(if: $shouldShow_family_histories__relationship_type) {
  
      buckets {
        doc_count
        key
      }
      
}

family_histories__relative_with_cancer_history @include(if: $shouldShow_family_histories__relative_with_cancer_history) {
  
      buckets {
        doc_count
        key
      }
      
}

family_histories__state @include(if: $shouldShow_family_histories__state) {
  
      buckets {
        doc_count
        key
      }
      
}

family_histories__submitter_id @include(if: $shouldShow_family_histories__submitter_id) {
  
      buckets {
        doc_count
        key
      }
      
}


gene__biotype @include(if: $shouldShow_gene__biotype) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__gene_id @include(if: $shouldShow_gene__gene_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__is_cancer_gene_census @include(if: $shouldShow_gene__is_cancer_gene_census) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__chromosome @include(if: $shouldShow_gene__ssm__chromosome) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__consequence_id @include(if: $shouldShow_gene__ssm__consequence__consequence_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__aa_change @include(if: $shouldShow_gene__ssm__consequence__transcript__aa_change) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__amino_acids @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__amino_acids) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__ccds @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__ccds) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__cdna_position @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__cdna_position) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__cds_end @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__cds_end) {
  
      count
      max
      avg
      min
    
}

gene__ssm__consequence__transcript__annotation__cds_length @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__cds_length) {
  
      count
      max
      avg
      min
    
}

gene__ssm__consequence__transcript__annotation__cds_position @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__cds_position) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__cds_start @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__cds_start) {
  
      count
      max
      avg
      min
    
}

gene__ssm__consequence__transcript__annotation__clin_sig @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__clin_sig) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__codons @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__codons) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__dbsnp_rs @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__dbsnp_rs) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__dbsnp_val_status @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__dbsnp_val_status) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__domains @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__domains) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__ensp @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__ensp) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__existing_variation @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__existing_variation) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__hgvsc @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__hgvsc) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__hgvsp @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__hgvsp) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__hgvsp_short @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__hgvsp_short) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__impact @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__impact) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__polyphen @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__polyphen) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__protein_position @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__protein_position) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__pubmed @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__pubmed) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__sift @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__sift) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__swissprot @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__swissprot) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__transcript_id @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__transcript_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__trembl @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__trembl) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__annotation__uniparc @include(if: $shouldShow_gene__ssm__consequence__transcript__annotation__uniparc) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__consequence_type @include(if: $shouldShow_gene__ssm__consequence__transcript__consequence_type) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__ref_seq_accession @include(if: $shouldShow_gene__ssm__consequence__transcript__ref_seq_accession) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__consequence__transcript__transcript_id @include(if: $shouldShow_gene__ssm__consequence__transcript__transcript_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__cosmic_id @include(if: $shouldShow_gene__ssm__cosmic_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__end_position @include(if: $shouldShow_gene__ssm__end_position) {
  
      count
      max
      avg
      min
    
}

gene__ssm__genomic_dna_change @include(if: $shouldShow_gene__ssm__genomic_dna_change) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__mutation_subtype @include(if: $shouldShow_gene__ssm__mutation_subtype) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__mutation_type @include(if: $shouldShow_gene__ssm__mutation_type) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__ncbi_build @include(if: $shouldShow_gene__ssm__ncbi_build) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__center @include(if: $shouldShow_gene__ssm__observation__center) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__input_bam_file__normal_bam_uuid @include(if: $shouldShow_gene__ssm__observation__input_bam_file__normal_bam_uuid) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__input_bam_file__tumor_bam_uuid @include(if: $shouldShow_gene__ssm__observation__input_bam_file__tumor_bam_uuid) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__mutation_status @include(if: $shouldShow_gene__ssm__observation__mutation_status) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__normal_genotype__match_norm_seq_allele1 @include(if: $shouldShow_gene__ssm__observation__normal_genotype__match_norm_seq_allele1) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__normal_genotype__match_norm_seq_allele2 @include(if: $shouldShow_gene__ssm__observation__normal_genotype__match_norm_seq_allele2) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__observation_id @include(if: $shouldShow_gene__ssm__observation__observation_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__read_depth__n_depth @include(if: $shouldShow_gene__ssm__observation__read_depth__n_depth) {
  
      count
      max
      avg
      min
    
}

gene__ssm__observation__read_depth__t_alt_count @include(if: $shouldShow_gene__ssm__observation__read_depth__t_alt_count) {
  
      count
      max
      avg
      min
    
}

gene__ssm__observation__read_depth__t_depth @include(if: $shouldShow_gene__ssm__observation__read_depth__t_depth) {
  
      count
      max
      avg
      min
    
}

gene__ssm__observation__read_depth__t_ref_count @include(if: $shouldShow_gene__ssm__observation__read_depth__t_ref_count) {
  
      count
      max
      avg
      min
    
}

gene__ssm__observation__sample__matched_norm_sample_barcode @include(if: $shouldShow_gene__ssm__observation__sample__matched_norm_sample_barcode) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__sample__matched_norm_sample_uuid @include(if: $shouldShow_gene__ssm__observation__sample__matched_norm_sample_uuid) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__sample__tumor_sample_barcode @include(if: $shouldShow_gene__ssm__observation__sample__tumor_sample_barcode) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__sample__tumor_sample_uuid @include(if: $shouldShow_gene__ssm__observation__sample__tumor_sample_uuid) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__src_vcf_id @include(if: $shouldShow_gene__ssm__observation__src_vcf_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__tumor_genotype__tumor_seq_allele1 @include(if: $shouldShow_gene__ssm__observation__tumor_genotype__tumor_seq_allele1) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__tumor_genotype__tumor_seq_allele2 @include(if: $shouldShow_gene__ssm__observation__tumor_genotype__tumor_seq_allele2) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__validation__tumor_validation_allele1 @include(if: $shouldShow_gene__ssm__observation__validation__tumor_validation_allele1) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__validation__tumor_validation_allele2 @include(if: $shouldShow_gene__ssm__observation__validation__tumor_validation_allele2) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__validation__validation_method @include(if: $shouldShow_gene__ssm__observation__validation__validation_method) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__variant_calling__variant_caller @include(if: $shouldShow_gene__ssm__observation__variant_calling__variant_caller) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__observation__variant_calling__variant_process @include(if: $shouldShow_gene__ssm__observation__variant_calling__variant_process) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__reference_allele @include(if: $shouldShow_gene__ssm__reference_allele) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__ssm_id @include(if: $shouldShow_gene__ssm__ssm_id) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__ssm__start_position @include(if: $shouldShow_gene__ssm__start_position) {
  
      count
      max
      avg
      min
    
}

gene__ssm__tumor_allele @include(if: $shouldShow_gene__ssm__tumor_allele) {
  
      buckets {
        doc_count
        key
      }
      
}

gene__symbol @include(if: $shouldShow_gene__symbol) {
  
      buckets {
        doc_count
        key
      }
      
}

primary_site @include(if: $shouldShow_primary_site) {
  
      buckets {
        doc_count
        key
      }
      
}

project__dbgap_accession_number @include(if: $shouldShow_project__dbgap_accession_number) {
  
      buckets {
        doc_count
        key
      }
      
}

project__disease_type @include(if: $shouldShow_project__disease_type) {
  
      buckets {
        doc_count
        key
      }
      
}

project__intended_release_date @include(if: $shouldShow_project__intended_release_date) {
  
      buckets {
        doc_count
        key
      }
      
}

project__name @include(if: $shouldShow_project__name) {
  
      buckets {
        doc_count
        key
      }
      
}

project__primary_site @include(if: $shouldShow_project__primary_site) {
  
      buckets {
        doc_count
        key
      }
      
}

project__program__dbgap_accession_number @include(if: $shouldShow_project__program__dbgap_accession_number) {
  
      buckets {
        doc_count
        key
      }
      
}

project__program__name @include(if: $shouldShow_project__program__name) {
  
      buckets {
        doc_count
        key
      }
      
}

project__program__program_id @include(if: $shouldShow_project__program__program_id) {
  
      buckets {
        doc_count
        key
      }
      
}

project__project_id @include(if: $shouldShow_project__project_id) {
  
      buckets {
        doc_count
        key
      }
      
}

project__releasable @include(if: $shouldShow_project__releasable) {
  
      buckets {
        doc_count
        key
      }
      
}

project__released @include(if: $shouldShow_project__released) {
  
      buckets {
        doc_count
        key
      }
      
}

project__state @include(if: $shouldShow_project__state) {
  
      buckets {
        doc_count
        key
      }
      
}

state @include(if: $shouldShow_state) {
  
      buckets {
        doc_count
        key
      }
      
}

submitter_id @include(if: $shouldShow_submitter_id) {
  
      buckets {
        doc_count
        key
      }
      
}

summary__data_categories__data_category @include(if: $shouldShow_summary__data_categories__data_category) {
  
      buckets {
        doc_count
        key
      }
      
}

summary__data_categories__file_count @include(if: $shouldShow_summary__data_categories__file_count) {
  
      count
      max
      avg
      min
    
}

summary__experimental_strategies__experimental_strategy @include(if: $shouldShow_summary__experimental_strategies__experimental_strategy) {
  
      buckets {
        doc_count
        key
      }
      
}

summary__experimental_strategies__file_count @include(if: $shouldShow_summary__experimental_strategies__file_count) {
  
      count
      max
      avg
      min
    
}

summary__file_count @include(if: $shouldShow_summary__file_count) {
  
      count
      max
      avg
      min
    
}

summary__file_size @include(if: $shouldShow_summary__file_size) {
  
      count
      max
      avg
      min
    
}

tissue_source_site__bcr_id @include(if: $shouldShow_tissue_source_site__bcr_id) {
  
      buckets {
        doc_count
        key
      }
      
}

tissue_source_site__code @include(if: $shouldShow_tissue_source_site__code) {
  
      buckets {
        doc_count
        key
      }
      
}

tissue_source_site__name @include(if: $shouldShow_tissue_source_site__name) {
  
      buckets {
        doc_count
        key
      }
      
}

tissue_source_site__project @include(if: $shouldShow_tissue_source_site__project) {
  
      buckets {
        doc_count
        key
      }
      
}

tissue_source_site__tissue_source_site_id @include(if: $shouldShow_tissue_source_site__tissue_source_site_id) {
  
      buckets {
        doc_count
        key
      }
      
}

  }
`;
