/******************      View          **************/

declare class mxCellState {

  constructor(cell: any, view: any,style:any);
  cell: any;
  view: any;
  style: any;
  // this.origin = new mxPoint();
	// this.absoluteOffset = new mxPoint();

}

declare class mxEdgeStyle {

  /** Implements an entity relation style for edges (as used in database schema diagrams).  At the time
   * the function is called, the result array contains a placeholder (null) for the first absolute point,
   * that is, the point where the edge and source terminal are connected.  The implementation of the style
   * then adds all intermediate waypoints except for the last point, that is, the connection point between
   * the edge and the target terminal.  The first ant the last point in the result array are then replaced
   * with mxPoints that take into account the terminal’s perimeter and next point on the edge.
   */
  static EntityRelation(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

  /** Implements a self-reference, aka. loop. */
  static Loop(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

  /** Uses either SideToSide or TopToBottom depending on the horizontal flag in the cell style.
   * SideToSide is used if horizontal is true or unspecified.  See EntityRelation for a description of the parameters.
   */
  static ElbowConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

  /** Implements a vertical elbow edge.  See EntityRelation for a description of the parameters. */
  static SideToSide(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

  /** Implements a horizontal elbow edge.  See EntityRelation for a description of the parameters */
  static TopToBottom(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

  /** Implements an orthogonal edge style.  Use <mxEdgeSegmentHandler> as an interactive handler for this style. */
  static SegmentConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

  /** Implements a local orthogonal router between the given cells. */
  static OrthConnector(state: mxCellState, source: mxCell, target: mxCell, points: mxPoint[], result: any): any;

}

declare class mxHierarchicalLayout {

  forceConstant: any;

  constructor(graph: mxGraph);

  execute(parent: any);

}

declare class mxConnectionConstraint {

  constructor(point: any, perimeter: any,name?:any);
  point: any;
  perimeter: any;
  name:any;

}

declare class mxPrintPreview {

  constructor(graph?, scale?, pageFormat?, border?, x0?, y0?, borderColor?, title?, pageSelector?);
  graph;
  pageFormat;
  scale;
  border;
  marginTop;
  marginBottom;
  x0;
  y0;
  autoOrigin;
  printOverlays;
  printControls;
  printBackgroundImage;
  backgroundColor;
  borderColor;
  title;
  pageSelector;
  wnd;
  targetWindow;
  pageCount0;
  clipping;
  open(css?, targetWindow?, forcePageBreaks?, keepOpen?)

}


/******************      View end      **************/


