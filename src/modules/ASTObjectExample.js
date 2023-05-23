const ASTObjectExample = {
  nodeType: "element",
  tagName: "div",
  attributes: [
    {
      name: "class",
      value: "profile",
    },
  ],
  children: [
    {
      nodeType: "element",
      tagName: "img",
      attributes: [
        {
          name: "class",
          value: "profile__avatar",
        },
        {
          name: "src",
          value:
            "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg",
        },
        {
          name: "alt",
          value: "Avatar",
        },
      ],
    },
    {
      nodeType: "element",
      tagName: "div",
      attributes: [
        {
          name: "class",
          value: "profile__details",
        },
      ],
      children: [
        {
          nodeType: "element",
          tagName: "p",
          attributes: [
            {
              name: "class",
              value: "profile__name",
            },
          ],
          children: [
            {
              nodeType: "text",
              value: "John Doe",
            },
          ],
        },
        {
          nodeType: "element",
          tagName: "p",
          attributes: [
            {
              name: "class",
              value: "profile__phone",
            },
          ],
          children: [
            {
              nodeType: "text",
              value: "+48 123 456 789",
            },
          ],
        },
        {
          nodeType: "element",
          tagName: "p",
          attributes: [
            {
              name: "class",
              value: "profile__link",
            },
          ],
          children: [
            {
              nodeType: "element",
              tagName: "a",
              attributes: [
                {
                  name: "href",
                  value: "https://przeprogramowani.pl/o-nas",
                },
              ],
              children: [
                {
                  nodeType: "text",
                  value: "Zobacz więcej",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default ASTObjectExample;
