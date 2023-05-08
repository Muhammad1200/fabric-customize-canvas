const rectangle = (canvas) => {
    const rect = new fabric.Rect({
        left: 100,
    top: 100,
    fill: 'red',
    // radius: 50
      width: 100,
      height: 100
    });
    canvas.add(rect);
    canvas.setActiveObject(rect);
    canvas.renderAll();
};

const circle = (canvas) => {
    const shape = new fabric.Circle({
        left: 100,
        top: 100,
        fill: 'red',
        radius: 50
    });
    canvas.add(shape);
    canvas.setActiveObject(shape);
    canvas.renderAll();
};

const triangle = (canvas) => {
    const shape = new fabric.Triangle({
        left: 100,
        top: 100,
        fill: 'blue',
        width: 50,
        height: 50
    });
    canvas.add(shape);
    canvas.setActiveObject(shape);
    canvas.renderAll();
};

const ellipse = (canvas) => {
    const shape = new fabric.Ellipse({
        left: 100,
        top: 100,
        fill: 'green',
        rx: 50,
        ry: 30
    });
    canvas.add(shape);
    canvas.setActiveObject(shape);
    canvas.renderAll();
};

const ploygon = (canvas) => {
    const points = [
        { x: 100, y: 100 },
        { x: 150, y: 50 },
        { x: 200, y: 100 },
        { x: 175, y: 150 },
        { x: 125, y: 150 }
      ];
      
      const shape = new fabric.Polygon(points, {
        left: 100,
        top: 100,
        fill: 'orange'
      });
    canvas.add(shape);
    canvas.setActiveObject(shape);
    canvas.renderAll();
};

const trapezoid = (canvas) => {
    
    const points = [
        { x: 100, y: 100 },
        { x: 200, y: 100 },
        { x: 150, y: 150 },
        { x: 50, y: 150 }
      ];
      
      const shape = new fabric.Polygon(points, {
        left: 0,
        top: 0,
        fill: 'blue'
      });
    canvas.add(shape);
    canvas.setActiveObject(shape);
    canvas.renderAll();
};
