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
