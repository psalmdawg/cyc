var mongoose = require('mongoose');


var ProfileSchema = mongoose.Schema({
  Parentid: {
    type: String
  },
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  PreferredName: {
    type: String
  },
  Dob: {
    type: Date
  },
  Sex: {
    type: String
  },
  StreetAddress1: {
    type: String
  },
  StreetAddress2: {
    type: String
  },
  Suburb: {
    type: String
  },
  State: {
    type: String
  },
  Postcode: {
    type: String
  },
  School: {
    type: String
  },
  Grade: {
    type: Number
  },
  ShirtSize: {
    type: String
  },
  CabinRequest: {
    type: String
  },
  ReferralMethod: {
    type: String
  },
  ConsentPhotos: {
    type: Boolean
  },
  ConsentLeaderContact: {
    type: Boolean
  },
  ParentName: {
    type: String
  },
  ParentMob: {
    type: Number
  },
  ParentHomePhone: {
    type: Number
  },
  CampersEmail: {
    type: String
  },
  CamperMobile: {
    type: Number
  },
  EC1Name: {
    type: Number
  },
  EC1Phone: {
    type: Number
  },
  EC1Relationship: {
    type: String
  },
  EC2Name: {
    type: String
  },
  EC2Number: {
    type: Number
  },
  EC2Relationship: {
    type: String
  },
  MedicareNumber: {
    type: String
  },
  NumOnMedicareCard: {
    type: String
  },
  MedicareExpDate: {
    type: Date
  },
  PrivateHealthProvider: {
    type: String
  },
  PrivateHealthNumber: {
    type: String
  },
  ParacetamolOk: {
    type: Boolean
  },
  Allergies: {
    type: String
  },
  LatestTetanus: {
    type: String
  },
  Asthma: {
    type: String
  },
  Appendicitus: {
    type: String
  },
  ChickenPox: {
    type: String
  },
  Diabetes: {
    type: String
  },
  EpilepsyFits: {
    type: String
  },
  GlandularFever: {
    type: String
  },
  HeartProbs: {
    type: String
  },
  Pnuemonia: {
    type: String
  },
  Tonsillitis: {
    type: String
  },
  HeartProbs: {
    type: String
  },
  OtherRelevantInfo: {
    type: String
  },
  OnMedication: {
    type: Boolean
  },
  TypeOfMed: {
    type: String
  },
  DosageAmountAndTime: {
    type: String
  },
  DairyFree: {
    type: Boolean
  },
  Vegetarian: {
    type: Boolean
  },
  GlutenFree: {
    type: Boolean
  },
  Nuts: {
    type: Boolean
  },
  FurtherDietryReq: {
    type: String
  },
  Adhd: {
    type: Boolean
  },
  Aspergers: {
    type: Boolean
  },
  HearingSight: {
    type: Boolean
  },
  CounsellingDepression: {
    type: Boolean
  },
  RestrictionsOnActivities: {
    type: String
  },
  SwimmingAbiltiy: {
    type: String
  },
  BedWetting: {
    type: Boolean
  },
  SleepWalking: {
    type: Boolean
  },
  TravelSickness: {
    type: Boolean
  },
  TransportToCamp: {
    type: String
  },
  TransportFromCamp: {
    type: String
  },
  AdditionalComments: {
    type: String
  }

});
