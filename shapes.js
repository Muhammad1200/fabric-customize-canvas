const rectangle = (canvas) => {
    const rect = new fabric.Circle({
        left: 100,
    top: 100,
    fill: 'red',
    radius: 50
    //   width: 100,
    //   height: 100
    });
    canvas.add(rect);
    canvas.renderAll();
  };
