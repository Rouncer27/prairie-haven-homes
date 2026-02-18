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

export const Investment_Form_Display_Query = `
   	 investmentFormDisplay: investmentFormDisplayComponent {
        displayInvestmentForm
        title
        content
    }
`;

export const Contact_Form_Display_Query = `
   	 contactFormDisplay: contentFormDisplayComponent {
        displayContentForm
        title
        content
    }
`;
