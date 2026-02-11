export const Page_Seo_Query = `
   	seoMetaTags {
        seoMetaInformation {
            metaDescription
            metaTitle
            metaImage {
                node {
                    altText
                    sourceUrl
                }
            }
        }
    }
`;

export const Hero_Intro_Query = `
   	 heroIntro: heroIntroComponent {
        title
        subTitle
        backgroundColour
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
