const appRoutesNested = [
    {
      index: "true",
      path: "dashboard",
      element: "Dashboard",
      state: "Dashboard",
      sidebarProps: {
        display: "Dashboard",
        img: "dashboard.svg",
        alt: "sidebar_img",
      },
    },
    {
      path: "questions",
      state: "Questions",
      children: [
        {
          path: "choosesyllabus",
          element: "ChooseSyllabus",
          state: "Choose Syllabus",
          sidebarProps: {
            display: "Choose Syllabus",
            img: "choosesyllabus.svg",
            alt: "sidebar_img",
          },
        },
        {
          path: "addquestions",
          element: "AddQuestions",
          state: "Add Questions",
          sidebarProps: {
            display: "Add Questions",
            img: "addquestions.svg",
            alt: "sidebar_img",
          },
        },
      ],
    },
  ];
  
  const pathToDisplayNameRecursive = (routes, mapping) => {
    routes.forEach(({path, state, children}) => {
      mapping[path] = state;
      if (children) {
        pathToDisplayNameRecursive(children, mapping);
      }
    });
  };
  
  const routeToDisplayName = {};
  
  pathToDisplayNameRecursive(appRoutesNested, routeToDisplayName);
  
  export { routeToDisplayName };
  export default appRoutesNested;