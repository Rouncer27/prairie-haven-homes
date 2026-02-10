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
