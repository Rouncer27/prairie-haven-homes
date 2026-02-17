export const Hero_Titles_Query = `
    heroTitles: heroTitlesComponent {
        title
    }
`;

export const Floorplan_Intro_Query = `
    floorplanIntro: floorplanIntroComponent {
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
    }
`;
