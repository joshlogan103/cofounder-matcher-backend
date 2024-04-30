import Profile from '../models/profileModel.js'

// create function to get industryInterests from Profile Schema

export const getIndustryInterests = (req, res) => {
  try {
    // Access the enum values directly from the schema definition
    const industryInterestsEnumValues = Profile.schema.path('industryInterests').caster.enumValues;
    res.json(industryInterestsEnumValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}


// create function to get areasOfResponsibility from Profile

export const getAreasOfResponsibility = (req, res) => {
  try {
    // Since areasOfResponsibility is an array, use .caster to access the schema type of the array's items
    const areasOfResponsibilityEnumValues = Profile.schema.path('areasOfResponsibility').caster.enumValues;
    res.json(areasOfResponsibilityEnumValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

// create function to get hasIdea from Profile

export const getHasIdea = (req, res) => {
  try {
    // Access the enum values directly from the Profile model's schema definition
    const hasIdeaEnumValues = Profile.schema.path('hasIdea').enumValues;
    res.json(hasIdeaEnumValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}

// create function to get programType from Profile

export const getProgramType = (req, res) => {
  try {
    // Access the enum values directly from the Profile model's schema definition
    const programTypeEnumValues = Profile.schema.path('programType').enumValues;
    res.json(programTypeEnumValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}
