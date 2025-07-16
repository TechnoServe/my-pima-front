export const dummyFarmVisitsV2 = [
  // Household 1: FT/AA Pair (Existing)
  {
    id: 1,
    household_id: 'HH001',
    farmer_name: 'John Doe',
    visit_date: '2023-05-10',
    submitted_by_name: 'Peter Jones (FT)',
    submitted_by_role: 'FT',
    status: 'Pending',
    qas: {
        "bp_id": "a17Oj00004V9sgyIAB_FT_1",
        "fv_id": "a14Oj00000Da8dvIAB_FT_1",
        "qas": [
          {
            "practice_name_id": "Compost",
            "practice_name": "Compost",
            "questions": ["Do you have compost manure?", "Status of the photo"],
            "answers": ["Yes", "not_approved"]
          },
          {
            "practice_name_id": "Nutrition",
            "practice_name": "Nutrition",
            "questions": ["Colour of the coffee leaves in the field", "Chemicals and Fertilizers Applied"],
            "answers": ["Nearly all leaves are dark green.", "<ul><li>Manure</li></ul>"]
          }
        ]
    }
  },
  {
    id: 2,
    household_id: 'HH001',
    farmer_name: 'John Doe',
    visit_date: '2023-05-11',
    submitted_by_name: 'Jane Smith (AA)',
    submitted_by_role: 'AA',
    status: 'Pending',
    qas: {
        "bp_id": "a17Oj00004V9sgyIAB_AA_1",
        "fv_id": "a14Oj00000Da8dvIAB_AA_1",
        "qas": [
          {
            "practice_name_id": "Compost",
            "practice_name": "Compost",
            "questions": ["Do you have compost manure?", "Status of the photo"],
            "answers": ["No", "not_approved"] // Different answer
          },
          {
            "practice_name_id": "Nutrition",
            "practice_name": "Nutrition",
            "questions": ["Colour of the coffee leaves in the field", "Chemicals and Fertilizers Applied"],
            "answers": ["Nearly all leaves are dark green.", "<ul><li>Manure</li><li>Compost, homemade or pulp compost</li></ul>"] // Different answer
          }
        ]
    }
  },

  // Household 2: FT/AA Pair (New)
  {
    id: 3,
    household_id: 'HH002',
    farmer_name: 'Jane Roe',
    visit_date: '2023-06-01',
    submitted_by_name: 'Peter Jones (FT)',
    submitted_by_role: 'FT',
    status: 'Pending',
    qas: {
        "bp_id": "a17Oj00004V9sgyIAB_FT_2",
        "fv_id": "a14Oj00000Da8dvIAB_FT_2",
        "qas": [
            {
                "practice_name_id": "IPDM",
                "practice_name": "IPDM",
                "questions": ["Pest and Disease Management: Methods Used", "Have you observed any pests recently?"],
                "answers": ["<ul><li>Uproot wilt infected coffee trees and burn</li></ul>", "Yes"]
            },
            {
                "practice_name_id": "Soil_Erosion",
                "practice_name": "Soil Erosion methods",
                "questions": ["What soil erosion control methods are you using?", "Are there visible signs of soil erosion?"],
                "answers": ["<ul><li>Cover crops</li></ul>", "No"]
            }
        ]
    }
  },
  {
    id: 4,
    household_id: 'HH002',
    farmer_name: 'Jane Roe',
    visit_date: '2023-06-02',
    submitted_by_name: 'Jane Smith (AA)',
    submitted_by_role: 'AA',
    status: 'Pending',
    qas: {
        "bp_id": "a17Oj00004V9sgyIAB_AA_2",
        "fv_id": "a14Oj00000Da8dvIAB_AA_2",
        "qas": [
            {
                "practice_name_id": "IPDM",
                "practice_name": "IPDM",
                "questions": ["Pest and Disease Management: Methods Used", "Have you observed any pests recently?"],
                "answers": ["<ul><li>Uproot wilt infected coffee trees and burn</li><li>Use good agricultural practices</li></ul>", "Yes"] // Different answer
            },
            {
                "practice_name_id": "Soil_Erosion",
                "practice_name": "Soil Erosion methods",
                "questions": ["What soil erosion control methods are you using?", "Are there visible signs of soil erosion?"],
                "answers": ["<ul><li>Cover crops</li></ul>", "Yes, minor signs"] // Different answer
            }
        ]
    }
  },

  // Household 3: FT/AA Pair (New)
  {
    id: 5,
    household_id: 'HH003',
    farmer_name: 'Richard Roe',
    visit_date: '2023-06-05',
    submitted_by_name: 'Peter Jones (FT)',
    submitted_by_role: 'FT',
    status: 'Pending',
    qas: {
        "bp_id": "a17Oj00004V9sgyIAB_FT_3",
        "fv_id": "a14Oj00000Da8dvIAB_FT_3",
        "qas": [
          {
            "practice_name_id": "Nutrition",
            "practice_name": "Nutrition",
            "questions": ["Colour of the coffee leaves in the field"],
            "answers": ["Some leaves are yellow or pale green."]
          }
        ]
    }
  },
  {
    id: 6,
    household_id: 'HH003',
    farmer_name: 'Richard Roe',
    visit_date: '2023-06-06',
    submitted_by_name: 'Jane Smith (AA)',
    submitted_by_role: 'AA',
    status: 'Pending',
    qas: {
        "bp_id": "a17Oj00004V9sgyIAB_AA_3",
        "fv_id": "a14Oj00000Da8dvIAB_AA_3",
        "qas": [
          {
            "practice_name_id": "Nutrition",
            "practice_name": "Nutrition",
            "questions": ["Colour of the coffee leaves in the field"],
            "answers": ["Some leaves are yellow or pale green."]
          }
        ]
    }
  },

];