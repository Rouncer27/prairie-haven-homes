export const Side_Side_Intro_Query = `
   	 sideSideIntro: sideSideIntroComponent {
        bigFontContent
        content
    }
`;

export const Floorplans_Query = `
   	floorplans: floorplansComponent {
        displayFloorplans
        title
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
        boxTwoButtonText
        boxTwoButtonLink {
            edges {
                node {
                    uri
                }
            }
        }
    }
`;
