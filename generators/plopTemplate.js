module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
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
        path: "../src/components/templates/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/templates/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
    ],
  });
};
