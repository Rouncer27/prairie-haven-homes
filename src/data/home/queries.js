export const Hero_Intro_Query = `
   	 heroIntro: heroIntroComponent {
        title
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
    }
`;

export const Page_Intro_Query = `
   	pageIntro: pageIntroComponent {
        contentBig
        contentSmall
        logo {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        image {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;

export const Key_Features_Query = `
   	 keyFeatures: keyFeaturesComponent {
        title
        features {
            feature
        }
    }
`;

export const Content_Boxes_Query = `
   	 contentBoxes: contentBoxesComponent {
        boxOneImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        boxOneBackground {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        boxOneContent
        boxOneButtonText
        boxOneButtonLink {
            edges {
                node {
                    uri
                }
            }
        }
        boxTwoImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        boxTwoBackground {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        boxTwoContent
    }
`;

export const Steps_Query = `
   	 steps: stepsComponent {
        title
        subTitle
        backgroundImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        stepsImage {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }
        buttonText
        buttonLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;
