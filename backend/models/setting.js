class Setting {
  constructor({
    facebookLink = null,
    linkedinLink,
    githubLink,
    twitterLink,
    aboutText,
    skillsText,
    clientCount,
    projectCount,
    lisenceCount,
    experienceYear,
    addressText,
    phoneNumber,
    email,
  }) {
    this.email = email;
    this.facebookLink = facebookLink;
    this.linkedinLink = linkedinLink;
    this.githubLink = githubLink;
    this.twitterLink = twitterLink;
    this.aboutText = aboutText;
    this.skillsText = skillsText;
    this.clientCount = clientCount;
    this.projectCount = projectCount;
    this.lisenceCount = lisenceCount;
    this.experienceYear = experienceYear;
    this.phoneNumber = phoneNumber;
    this.addressText = addressText;
  }
}

module.exports = Setting;
