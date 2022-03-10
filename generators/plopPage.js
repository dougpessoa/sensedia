module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a page",
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
        path: "../src/pages/{{name}}.tsx",
        templateFile: "templates/Page.tsx.hbs",
      },
    ],
  });
};
