export const Bold_Intro_Query = `
   	 boldIntro: boldIntroComponent {
        boldIntro
        title
        content
    }
`;

export const Images_Row_Query = `
   	imagesRow: imagesRowComponent {
        imageOne {
            node {
                sourceUrl
                altText
                mediaDetails {
                    width
                    height
                }
            }
        }

         imageTwo {
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

export const Content_Logo_Query = `
   	contentLogo: contentLogoComponent {
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
        title
        contentSections {
            boldText
            content
        }
    }
`;

export const Page_Hero_Query = `
   	pageHero: pageHeroComponent {
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
        title
        content
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

export const Steps_Process_Query = `
   	stepsProcess: stepsProcessComponent {
        title
        steps {
            title
            content
        }
    }
`;

export const Values_Query = `
   	values: valuesComponent {
        title
        content
    }
`;
