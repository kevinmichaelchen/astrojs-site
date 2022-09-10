export type Author = {
  id: string;
  name: string;
};

export type Image = {
  url: string;
  width: number;
  height: number;
};

export type Book = {
  id: string;
  title: string;
  subtitle: string;
  authors: Author[];
  image: Image;
  description: string;
  slug: string;
  progress: "done" | "reading" | "on_shelf";
};

export const GET_BOOK_QUERY = `
query GetBook($slug: String) {
  book(where: {
    slug: $slug
  }) {
    id
    title
    subtitle
    authors {
      name
    }
    description
    progress
    slug
    image {
      url
      width
      height
    }
  }
}
`;

export const GET_BOOKS_QUERY = `
query GetBooks {
  books {
    id
    title
    subtitle
    authors {
      name
    }
    description
    progress
    slug
    image {
      url
      width
      height
    }
  }
}
`;
