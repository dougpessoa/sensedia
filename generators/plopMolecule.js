module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a Molecule",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your molecule component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/molecules/{{pascalCase name}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/molecules/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
    ],
  });
};
