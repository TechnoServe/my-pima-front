import { gql } from "@apollo/client";

export const GET_WETMILLS = gql`
  query GetWetmills {
    getWetmills {
      message
      status
      wetmills {
        id
        wet_mill_unique_id
        commcare_case_id
        name
        mill_status
        exporting_status
        programe
        country
        manager_name
        manager_role
        comments
        wetmill_counter
        ba_signature
        manager_signature
        tor_page_picture
        registration_date
        created_at
        updated_at
      }
    }
  }
`;

export const EXPORT_WETMILLS_EXCEL = gql`
  query ExportWetmillsExcel {
    exportWetMillsDataExcel {
      filename
      contentBase64
    }
  }
`;
