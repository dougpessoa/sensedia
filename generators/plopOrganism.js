module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a Organism",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your organism component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/organisms/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/organisms/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
    ],
  });
};
