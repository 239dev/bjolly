export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mathiew H",
    role: "Client",
    quote: "Shannon was great help in helping me claim the Saskatchewan graduation retention credit. Much appreciated!",
    rating: 5
  },
  {
    id: 2,
    name: "Morgan Monseler",
    role: "Long-term Client",
    quote: "Shannon has been doing my taxes for a few years now, she is friendly, quick and efficient. She is also very knowledgeable and ensures you get the best tax return. 10/10 great service, will be continuing to use B Jolly Accounting well into the future :)",
    rating: 5
  },
  {
    id: 3,
    name: "Merilynn Downey",
    role: "Client",
    quote: "Great people to deal with and always straight forward!",
    rating: 5
  }
];

export default testimonials;