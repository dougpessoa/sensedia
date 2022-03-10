module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a Atom",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your atom component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/atoms/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/atoms/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/atoms/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/atoms/{{pascalCase name}}/test.tsx",
        templateFile: "templates/test.tsx.hbs",
      },
    ],
  });
};
