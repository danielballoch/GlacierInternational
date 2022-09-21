exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
      fromPath: "https://tundra.nz/*", 
      toPath: "https://www.glacier.nz/:splat", 
      isPermanent: true, 
      force: true
    });
  };