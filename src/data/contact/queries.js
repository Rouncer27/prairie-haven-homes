export const Contact_Information_Query = `
   	 contactInformation: contactInformationComponent {
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

        imageThree {
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
