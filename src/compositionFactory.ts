import { v4 as uuidv4 } from 'uuid';

export default class CompositionFactory {
  getEhrNotesDocument(headings) {
    if (headings.length == 4)
    {
      return `
      {
        "_type": "COMPOSITION",
        "archetype_node_id": "openEHR-EHR-COMPOSITION.report.v1",
        "name": {
          "value": "Epikrise"
        },
        "uid": {
          "_type": "OBJECT_VERSION_ID",
          "value": "${uuidv4()}::ehr-notes::1"
        },
        "archetype_details": {
          "archetype_id": {
            "value": "openEHR-EHR-COMPOSITION.report.v1"
          },
          "template_id": {
            "value": "epikrise_dips_semistrukturert_01"
          },
          "rm_version": "1.0.4"
        },
        "language": {
          "terminology_id": {
            "value": "openehr"
          },
          "code_string": "nb"
        },
        "territory": {
          "terminology_id": {
            "value": "openehr"
          },
          "code_string": "NO"
        },
        "category": {
          "defining_code": {
            "terminology_id": {
              "value": "openehr"
            },
            "code_string": "433"
          }
        },
        "composer": {
          "_type": "PARTY_IDENTIFIED",
          "name": "unknown"
        },
        "context": {
          "start_time": {
            "value": "${new Date().toISOString()}"
          },
          "setting": {
            "value": "secondary medical care",
            "defining_code": {
              "terminology_id": {
                "value": "openehr"
              },
              "code_string": "232"
            }
          },
          "other_context": {
            "_type": "ITEM_TREE",
            "archetype_node_id": "at0001",
            "name": {
              "value": "Tree"
            }
          }
        },
        "content": [
          {
            "_type": "EVALUATION",
            "archetype_node_id": "openEHR-EHR-EVALUATION.clinical_synopsis.v1",
            "name": {
              "value": "Aktuell problemstilling"
            },
            "archetype_details": {
              "archetype_id": {
                "value": "openEHR-EHR-EVALUATION.clinical_synopsis.v1"
              },
              "template_id": {
                "value": "epikrise_dips_semistrukturert_01"
              },
              "rm_version": "1.0.4"
            },
            "language": {
              "terminology_id": {
                "value": "ISO_639-1"
              },
              "code_string": "nb"
            },
            "encoding": {
              "terminology_id": {
                "value": "IANA"
              },
              "code_string": "UTF-8"
            },
            "subject": {
              "_type": "PARTY_SELF"
            },
            "protocol": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0003",
              "name": {
                "value": "Tree"
              },
              "items": [
                {
                  "_type": "CLUSTER",
                  "archetype_node_id": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1",
                  "name": {
                    "value": "Metadata om epikrise"
                  },
                  "archetype_details": {
                    "archetype_id": {
                      "value": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1"
                    },
                    "template_id": {
                      "value": "epikrise_dips_semistrukturert_01"
                    },
                    "rm_version": "1.0.4"
                  },
                  "items": [
                    {
                      "_type": "ELEMENT",
                      "archetype_node_id": "at0001",
                      "name": {
                        "value": "Type tekstsvar"
                      },
                      "value": {
                        "_type": "DV_CODED_TEXT",
                        "value": "Aktuell problemstilling",
                        "defining_code": {
                          "terminology_id": {
                            "value": "local"
                          },
                          "code_string": "at0016"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "data": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0001",
              "name": {
                "value": "List"
              },
              "items": [
                {
                  "_type": "ELEMENT",
                  "archetype_node_id": "at0002",
                  "name": {
                    "value": "Sammendrag"
                  },
                  "value": {
                    "_type": "DV_TEXT",
                    "value": "${headings[0]}"
                  }
                }
              ]
            }
          },
          {
            "_type": "EVALUATION",
            "archetype_node_id": "openEHR-EHR-EVALUATION.clinical_synopsis.v1",
            "name": {
              "value": "Funn og undersøkelser"
            },
            "archetype_details": {
              "archetype_id": {
                "value": "openEHR-EHR-EVALUATION.clinical_synopsis.v1"
              },
              "template_id": {
                "value": "epikrise_dips_semistrukturert_01"
              },
              "rm_version": "1.0.4"
            },
            "language": {
              "terminology_id": {
                "value": "ISO_639-1"
              },
              "code_string": "nb"
            },
            "encoding": {
              "terminology_id": {
                "value": "IANA"
              },
              "code_string": "UTF-8"
            },
            "subject": {
              "_type": "PARTY_SELF"
            },
            "protocol": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0003",
              "name": {
                "value": "Tree"
              },
              "items": [
                {
                  "_type": "CLUSTER",
                  "archetype_node_id": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1",
                  "name": {
                    "value": "Metadata om epikrise"
                  },
                  "archetype_details": {
                    "archetype_id": {
                      "value": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1"
                    },
                    "template_id": {
                      "value": "epikrise_dips_semistrukturert_01"
                    },
                    "rm_version": "1.0.4"
                  },
                  "items": [
                    {
                      "_type": "ELEMENT",
                      "archetype_node_id": "at0001",
                      "name": {
                        "value": "Type tekstsvar"
                      },
                      "value": {
                        "_type": "DV_CODED_TEXT",
                        "value": "Funn og undersøkelser",
                        "defining_code": {
                          "terminology_id": {
                            "value": "local"
                          },
                          "code_string": "at0006"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "data": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0001",
              "name": {
                "value": "List"
              },
              "items": [
                {
                  "_type": "ELEMENT",
                  "archetype_node_id": "at0002",
                  "name": {
                    "value": "Sammendrag"
                  },
                  "value": {
                    "_type": "DV_TEXT",
                    "value": "${headings[1]}"
                  }
                }
              ]
            }
          },
          {
            "_type": "EVALUATION",
            "archetype_node_id": "openEHR-EHR-EVALUATION.clinical_synopsis.v1",
            "name": {
              "value": "Vurdering"
            },
            "archetype_details": {
              "archetype_id": {
                "value": "openEHR-EHR-EVALUATION.clinical_synopsis.v1"
              },
              "template_id": {
                "value": "epikrise_dips_semistrukturert_01"
              },
              "rm_version": "1.0.4"
            },
            "language": {
              "terminology_id": {
                "value": "ISO_639-1"
              },
              "code_string": "nb"
            },
            "encoding": {
              "terminology_id": {
                "value": "IANA"
              },
              "code_string": "UTF-8"
            },
            "subject": {
              "_type": "PARTY_SELF"
            },
            "protocol": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0003",
              "name": {
                "value": "Tree"
              },
              "items": [
                {
                  "_type": "CLUSTER",
                  "archetype_node_id": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1",
                  "name": {
                    "value": "Metadata om epikrise"
                  },
                  "archetype_details": {
                    "archetype_id": {
                      "value": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1"
                    },
                    "template_id": {
                      "value": "epikrise_dips_semistrukturert_01"
                    },
                    "rm_version": "1.0.4"
                  },
                  "items": [
                    {
                      "_type": "ELEMENT",
                      "archetype_node_id": "at0001",
                      "name": {
                        "value": "Type tekstsvar"
                      },
                      "value": {
                        "_type": "DV_CODED_TEXT",
                        "value": "Vurdering",
                        "defining_code": {
                          "terminology_id": {
                            "value": "local"
                          },
                          "code_string": "at0007"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "data": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0001",
              "name": {
                "value": "List"
              },
              "items": [
                {
                  "_type": "ELEMENT",
                  "archetype_node_id": "at0002",
                  "name": {
                    "value": "Sammendrag"
                  },
                  "value": {
                    "_type": "DV_TEXT",
                    "value": "${headings[2]}"
                  }
                }
              ]
            }
          },
          {
            "_type": "EVALUATION",
            "archetype_node_id": "openEHR-EHR-EVALUATION.clinical_synopsis.v1",
            "name": {
              "value": "Planer for videre oppfølging"
            },
            "archetype_details": {
              "archetype_id": {
                "value": "openEHR-EHR-EVALUATION.clinical_synopsis.v1"
              },
              "template_id": {
                "value": "epikrise_dips_semistrukturert_01"
              },
              "rm_version": "1.0.4"
            },
            "language": {
              "terminology_id": {
                "value": "ISO_639-1"
              },
              "code_string": "nb"
            },
            "encoding": {
              "terminology_id": {
                "value": "IANA"
              },
              "code_string": "UTF-8"
            },
            "subject": {
              "_type": "PARTY_SELF"
            },
            "protocol": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0003",
              "name": {
                "value": "Tree"
              },
              "items": [
                {
                  "_type": "CLUSTER",
                  "archetype_node_id": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1",
                  "name": {
                    "value": "Metadata om epikrise"
                  },
                  "archetype_details": {
                    "archetype_id": {
                      "value": "openEHR-EHR-CLUSTER.epicrisis_result_metadata_dips.v1"
                    },
                    "template_id": {
                      "value": "epikrise_dips_semistrukturert_01"
                    },
                    "rm_version": "1.0.4"
                  },
                  "items": [
                    {
                      "_type": "ELEMENT",
                      "archetype_node_id": "at0001",
                      "name": {
                        "value": "Type tekstsvar"
                      },
                      "value": {
                        "_type": "DV_CODED_TEXT",
                        "value": "Planer for videre oppfølging",
                        "defining_code": {
                          "terminology_id": {
                            "value": "local"
                          },
                          "code_string": "at0009"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "data": {
              "_type": "ITEM_TREE",
              "archetype_node_id": "at0001",
              "name": {
                "value": "List"
              },
              "items": [
                {
                  "_type": "ELEMENT",
                  "archetype_node_id": "at0002",
                  "name": {
                    "value": "Sammendrag"
                  },
                  "value": {
                    "_type": "DV_TEXT",
                    "value": "${headings[3]}"
                  }
                }
              ]
            }
          }
        ]
      }
      `;
    }   
  }
}