const mockTestimonialsData = {
    id: "testimonials-section-1",
    title: "What Our Clients Say",
    description:
        "",
    testimonials: [
        {
            text:
                "This service exceeded my expectations! The team was professional, and the results were amazing.",
            authorName: "John Doe - CEO Hudson Trading",
            picture: {
                data: {
                    id: "picture-1",
                    attributes: {
                        name: "John Doe",
                        alternativeText: "Picture of John Doe",
                        url: "https://amzn-s3-my-blog-images.s3.ap-south-1.amazonaws.com/person1.jpg",
                    },
                },
            },
        },
        {
            text:
                "The support I received was fantastic. I highly recommend this company to anyone!",
            authorName: "Mira Murati - CTO OpenAI",
            picture: {
                data: {
                    id: "picture-2",
                    attributes: {
                        name: "Mira Murati",
                        alternativeText: "Picture of Mira Murati",
                        url: "https://amzn-s3-my-blog-images.s3.ap-south-1.amazonaws.com/person2.jpeg",
                    },
                },
            },
        },
    ],
};

export default mockTestimonialsData;
