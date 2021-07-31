//https://www.npmjs.com/package/regenerator-runtime
//runtime import - thanks to this we can use async function
import regeneratorRuntime from "regenerator-runtime";

// styles import
import "../styles/main.css";

import AST from "./classes/ASTConvert";

const ASTObject = {
    "nodeType": "element",
    "tagName": "div",
    "attributes": [
      {
        "name": "class",
        "value": "profile"
      }
    ],
    "children": [
      {
        "nodeType": "element",
        "tagName": "img",
        "attributes": [
          {
            "name": "class",
            "value": "profile__avatar"
          },
          {
            "name": "src",
            "value": "https://www.thispersondoesnotexist.com/image"
          },
          {
            "name": "alt",
            "value": "Avatar"
          }
        ]
      },
      {
        "nodeType": "element",
        "tagName": "div",
        "attributes": [
          {
            "name": "class",
            "value": "profile__details"
          }
        ],
        "children": [
          {
            "nodeType": "element",
            "tagName": "p",
            "attributes": [
              {
                "name": "class",
                "value": "profile__name"
              }
            ],
            "children": [
              {
                "nodeType": "text",
                "value": "John Doe"
              }
            ]
          },
          {
            "nodeType": "element",
            "tagName": "p",
            "attributes": [
              {
                "name": "class",
                "value": "profile__phone"
              }
            ],
            "children": [
              {
                "nodeType": "text",
                "value": "+48 123 456 789"
              }
            ]
          },
          {
            "nodeType": "element",
            "tagName": "p",
            "attributes": [
              {
                "name": "class",
                "value": "profile__link"
              }
            ],
            "children": [
              {
                "nodeType": "element",
                "tagName": "a",
                "attributes": [
                  {
                    "name": "href",
                    "value": "https://przeprogramowani.pl/o-nas"
                  }
                ],
                "children": [
                  {
                    "nodeType": "text",
                    "value": "Zobacz więcej"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }

const ast = new AST(ASTObject);
