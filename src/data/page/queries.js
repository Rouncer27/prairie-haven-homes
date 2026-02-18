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

export const Locations_Query = `
   	 locations: locationsComponent {
        title
    }
`;

export const Key_Features_Query = `
   	 keyFeatures: keyFeaturesComponent {
        title
        backgroundColour
        features {
            feature
        }
    }
`;

export const Testimonials_Query = `
   	 testimonials: testimonialsComponent {
        displayTestimonials
        title
    }
`;

export const Floorplan_Hero_Query = `
   	 heroImage: siteWideSettings {
        floorplanHero {
            floorplanHeroImage {
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

export const Steps_Process_Query = `
   	stepsProcess: stepsProcessComponent {
        title
        steps {
            title
            content
        }
    }
`;
