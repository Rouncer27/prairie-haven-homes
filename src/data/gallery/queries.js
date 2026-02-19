export const Image_Gallery_Query = `
    imageGallery: imageGalleryComponent {
        gallery {
            edges {
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
